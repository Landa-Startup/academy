'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import ContactUsDropdown from './ContactUsDropdown';
import Input from '../common/form/Input';
import { useForm } from 'react-hook-form';
import GetCsrfToken from '@/utils/get-csrf-token';
import NotificationSendForm from '../common/form/NotificationSendForm';
import apiClient from '@/utils/api';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Button from '../common/Button';
import './ContactUs.css';
import TextArea from '../common/TextArea';

interface ContactUsType {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  description: string;
}

export default function ContactUs() {
  const initialContactUsData: ContactUsType = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    description: ''
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactUsType>({
    mode: 'onBlur',
    defaultValues: initialContactUsData
  });

  const [phone, setPhone] = useState<string | undefined>();
  // const [selectedOption, setSelectedOption] = useState('');

  // TODO: remove below code after testing
  const [formData, setFormData] = useState<ContactUsType>(initialContactUsData);
  console.log(formData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');

  // function handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
  //   setSelectedOption(event.target.value);
  // }

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
    // formData.email = String(selectedOption);
    sendFormData.append('first_name', formData.firstName);
    sendFormData.append('last_name', formData.lastName);
    sendFormData.append('email', formData.email);
    sendFormData.append('phone_number', formData.phoneNumber);
    sendFormData.append('description', formData.description);
    console.log(phone);

    try {
      await apiClient.post('common/contactUs-form', sendFormData, {
        headers: {
          'content-type': 'application/json', 
          'X-CSRFToken': csrfToken
        }
      });

      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      reset(initialContactUsData); // Reset the form after successful submission
      setFormData(initialContactUsData);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    } catch (error) {
      console.log(error);
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      reset(initialContactUsData); // Reset the form after successful submission
      setFormData(initialContactUsData); // reset states after successful submission
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative mx-auto flex h-screen snap-start flex-col items-center justify-start    bg-[#F1F8EC] py-20 md:w-[1440px] "
    >
      <div className="inline-flex flex-col  items-center self-center ">
        <div className="mt-[-2.25] text-center font-gilda text-base font-normal leading-[50px] tracking-[5.6px] text-lime-400 md:h-[58px] md:w-[413px] md:text-3xl md:tracking-[11.20px] ">
          LANDA ACADEMY
        </div>
        <div className="text-center font-gilda text-3xl font-normal leading-[50px] tracking-[1.6px] text-black md:h-[58px] md:w-[413px] md:text-5xl md:tracking-[3.20px]   ">
          Contact Us
        </div>
      </div>
      <div className="relative  grid grid-cols-1 gap-[-2rem]   md:grid-cols-2 ">
        <div className="col-span-1 w-full md:w-1/2 lg:ml-[21rem]">
          <Input
            register={register}
            errors={errors}
            nameInput="firstName"
            type="text"
            label=""
            required="First Name is Required."
            patternValue=""
            patternMessage="Enter a Valid First Name"
            placeholder="First Name"
            className="inline-flex h-[40px] w-full items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]"
            labelClass="text-[#6b6b6b]"
          />
        </div>
        <Input
          register={register}
          errors={errors}
          nameInput="lastName"
          type="text"
          label=""
          required="Last Name is Required."
          patternValue=""
          patternMessage="Enter a Valid Last Name"
          placeholder="Last Name"
          className="inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] lg:ml-[0rem] "
          labelClass="text-[#6b6b6b] dark:text-current"
        />
        <PhoneInputWithCountrySelect
          value={phone}
          onChange={setPhone}
          name="phoneNumber"
          defaultCountry="IR"
          international
          countryCallingCodeEditable={false}
          className="!important] inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]  lg:ml-[21rem] [&>*:nth-child(1)]:border-r-2 [&>*:nth-child(2)]:bg-yellow-50 "
        />
        <Input
          register={register}
          errors={errors}
          nameInput="email"
          type="email"
          label=""
          required="email is Required."
          patternValue="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
          patternMessage="Enter a valid email address. "
          placeholder="Email Address"
          className="mt-5 inline-flex h-[40px] w-[360px] items-center  justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] lg:ml-[0rem] lg:mt-0 "
          labelClass="text-[#6b6b6b] dark:text-current"
        />
        <TextArea
          register={register}
          errors={errors}
          nameTextArea="description"
          title=""
          required=""
          patternValue=""
          patternMessage=""
          placeholder="Description"
          className=" h-[84px] w-[360px]   justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[185px] md:w-[746px] lg:mb-[-38px] lg:ml-[335px]  lg:mr-[323px] lg:mt-[-0.5rem] "
        />
      </div>
      <Button
        onSubmit={handleSubmit(onSubmit)}
        type="submit"
        size="visit"
        text={send ? 'Submitting ....' : 'Submit'}
      />
      <Image
        loading="lazy"
        className="bottom-0 md:absolute md:-left-16"
        src={'/static/images/Academy/Collab-pana 1.svg'}
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
