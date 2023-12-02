import SurveyForm from '@/components/academy/SurveyForm';
import Banner from '@/components/common/Banner';
import Hat from '@/components/icons/Hat';
import FooterSecondary from '@/components/layout/FooterSecondary';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landa Academy | Survey',
  description: ''
};

export default function SurveyPage() {
  return (
    <div>
      <Banner image="" title="Courses Survey" />
      <div className="relative mx-5 my-16 flex flex-col items-center bg-[#F1F8EC] px-8 py-14 md:mx-auto md:w-[720px] md:px-11">
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
        <SurveyForm />
      </div>
      <FooterSecondary />
    </div>
  );
}
