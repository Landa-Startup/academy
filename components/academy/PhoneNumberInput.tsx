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
      <PhoneInputWithCountrySelect
        value={phone}
        onChange={() => setPhone(phone)}
        name="phoneNumber"
        defaultCountry="IR"
        international
        countryCallingCodeEditable={false}
        className="!important] inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[389px] [&>*:nth-child(1)]:border-r-2 [&>*:nth-child(2)]:bg-yellow-50"
      />
    </div>
  );
}
