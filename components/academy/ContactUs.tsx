"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "./PhoneNumberInput";
import ContactUsDropdown from "./ContactUsDropdown";
import Input from "../common/form/Input";
import { useForm } from "react-hook-form";
import GetCsrfToken from "@/utils/get-csrf-token";
import NotificationSendForm from "../common/form/NotificationSendForm";
import apiClient from "@/utils/api";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface ContactUsType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  contactReason: string;
}

export default function ContactUs() {
  const initialContactUsData: ContactUsType = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    contactReason: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsType>({
    mode: "onBlur",
    defaultValues: initialContactUsData,
  });

  const [phone, setPhone] = useState<string | undefined>();
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState<ContactUsType>(initialContactUsData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState("");

  function handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOption(event.target.value);
  }

  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}get-csrf-token`
      );
      setCsrfToken(token);
    }
    fetchCsrfToken();
  }, []);

  const onSubmit = async (formData: ContactUsType) => {
    setIsSubmitting(true);
    setSend(true);
    const sendFormData = new FormData();
    formData.phoneNumber = String(phone);
    formData.contactReason = String(selectedOption);
    sendFormData.append("first_name", formData.firstName);
    sendFormData.append("last_name", formData.lastName);
    sendFormData.append("contact_reason", formData.contactReason);
    sendFormData.append("phone_number", formData.phoneNumber);
    console.log(phone)
    console.log(selectedOption)

    try {
      console.log("new form data ", formData);

      const response = await apiClient.post(
        "common/contactUs-form",
        sendFormData,
        {
          headers: {
            "content-type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        }
      );

      console.log(phone);

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialContactUsData); // Reset the form after successful submission
      setFormData(initialContactUsData);
      console.log("Form data sent successfully!");
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    } catch (error) {
      console.log(error)
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      //TODO: remove below code after testing
      console.error("Error sending form data:", error);
      reset(initialContactUsData); // Reset the form after successful submission
      setFormData(initialContactUsData); // reset states after successful submission
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative md:w-[1440px] md:h-[694px] md:pl-[121px] md:pr-[120px] md:pt-[38px] md:pb-[104px] pt-5 bg-[#F1F8EC] flex-col justify-start items-center gap-[37px] flex mx-auto"
    >
      <div className="self-center flex-col  items-center inline-flex">
        <div className="font-gilda md:w-[413px] md:h-[58px] text-center text-lime-400 text-base md:text-2xl md:text-[32px] font-normal leading-[50px] tracking-[5.6px] md:tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="md:w-[413px] md:h-[58px] text-center text-black text-3xl md:text-5xl md:text-[64px] font-normal leading-[50px] tracking-[1.6px] md:tracking-[3.20px] ">
          Contact Us
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <Input
          register={register}
          errors={errors}
          nameInput="firstName"
          type="text"
          label=""
          required="First Name is Required."
          patternValue=""
          patternMessage="Enter a Valid First Name"
          placeholder="Enter your First Name"
          className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
          labelClass="text-[#6b6b6b]"
        />

        <Input
          register={register}
          errors={errors}
          nameInput="lastName"
          type="text"
          label=""
          required="Last Name is Required."
          patternValue=""
          patternMessage="Enter a Valid Last Name"
          placeholder="Enter your Last Name"
          className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
          labelClass="text-[#6b6b6b] dark:text-current"
        />

        <ContactUsDropdown
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <PhoneInputWithCountrySelect
        value={phone}
        onChange={setPhone}
        name="phoneNumber"
        defaultCountry="IR"
        international
        countryCallingCodeEditable={false}
        className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex [&>*:nth-child(2)]:bg-yellow-50 !important] [&>*:nth-child(1)]:border-r-2 !important]"
      />
      </div>
      <button
        type="submit"
        onSubmit={handleSubmit(onSubmit)}
        className="bg-yellow-400 h-[36px] md:h-14 w-[160px] md:w-60 mx-auto text-white"
      >
        {send ? "Submitting ...." : "Submit"}
      </button>
      <Image
        loading="lazy"
        className="-mb-4 md:absolute md:-left-16 md:-bottom-[5px]"
        src={"/static/images/Academy/Collab-pana 1.svg"}
        alt="Academy Contact Us"
        width={522}
        height={348}
      />
      <NotificationSendForm
        submitting={isSubmitting}
        success={isSuccess}
        sendStatus={send}
        show={showNotification}
      />
    </form>
  );
}
