import Banner from "@/components/common/Banner";
import Button from "@/components/common/Button";
import React from "react";

const SurveyPage = () => {
  return (
    <div>
      <Banner image="" title="Courses Survey" />
      <div className="flex flex-col items-center w-[720px] py-14 px-11 mx-auto my-16 bg-[#F1F8EC]">
        <p className="text-[#B2B2B2]">
          At Landa Academy, various courses and skills are held, and after
          completing the course, in addition to getting a valid certificate, the
          best of the course enter the workplace and use the skills they learned
          experimentally with the best mentors. The purpose of this form is to
          find out your need and interest for the future courses that will be
          held.
        </p>
        <form className="mt-4 w-full space-y-8">
          <div>
            <input
              className="w-full h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className="w-full h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              className="w-full h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="skills">
              Which skills would you like to learn at Landa Academy?
            </label>
            <select
              className="w-full h-[40px] md:h-[50px] pl-5 bg-yellow-50 border border-yellow-400 justify-start items-center inline-flex"
              id="skills"
              name="skills"
            >
              <option value="webDevelopment">Web Development</option>
              <option value="dataScience">Data Science</option>
              <option value="mobileAppDevelopment">
                Mobile App Development
              </option>
              <option value="uiUxDesign">UI/UX Design</option>
            </select>
          </div>
          <Button addedClass="mx-auto" text="submit" size="not" goto="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SurveyPage;