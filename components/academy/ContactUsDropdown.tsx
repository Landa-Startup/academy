"use client";
import React, { useState } from "react";

const options = ["join us", "courses", "faqs", "Counseling"];

export default function ContactUsDropdown() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select
        className="w-[360px] md:w-[389px] h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex capitalize"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">select contact reason...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
