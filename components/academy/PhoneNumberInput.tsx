"use client";
import { useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneInput({
  phone,
  setPhone,
}: {
  phone: any;
  setPhone: any;
}) {
  return (
    <div>
      {/* <PhoneInputWithCountrySelect
        value={phone}
        onChange={() => setPhone(phone)}
        name="phoneNumber"
        defaultCountry="IR"
        international
        countryCallingCodeEditable={false}
        className="w-[360px] md:w-[389px] h-[40px] md:h-[50px]  bg-yellow-50 border border-yellow-400 justify-center items-center inline-flex [&>*:nth-child(2)]:bg-yellow-50 !important] [&>*:nth-child(1)]:border-r-2 !important]"
      /> */}
    </div>
  );
}
