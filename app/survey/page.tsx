import Banner from "@/components/common/Banner";
import Button from "@/components/common/Button";
import Hat from "@/components/icons/Hat";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Landa Academy | Survey",
  description: "",
};

const SurveyPage = () => {
  return (
    <div>
      <Banner image="" title="Courses Survey" />
      <div className="relative mx-auto my-16 flex w-[720px] flex-col items-center bg-[#F1F8EC] px-11 py-14">
        <div className="absolute -top-10 rounded-full bg-[#F1F8EC] px-3 pt-3">
          <Hat />
        </div>
        <div className="flex flex-col text-[#B2B2B2]">
          <p>
            At Landa Academy, various courses and skills are held, and after
            completing the course, in addition to getting a valid certificate,
            the best of the course enter the workplace and use the skills they
            learned experimentally with the best mentors.
          </p>
          <p>
            The purpose of this form is to find out your need and interest for
            the future courses that will be held.
          </p>
        </div>
        <form className="mt-4 w-full space-y-8">
          <div>
            <input
              className="inline-flex h-[40px] w-full items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
          </div>
          <div>
            <input
              className="inline-flex h-[40px] w-full items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]"
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              className="inline-flex h-[40px] w-full items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="skills" className="text-[#B2B2B2]">
              Which skills would you like to learn at Landa Academy?
            </label>
            <select
              className="inline-flex h-[40px] w-full items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px]"
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
      <Footer />
    </div>
  );
};

export default SurveyPage;
