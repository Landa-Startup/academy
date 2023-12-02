'use client';
import Banner from '@/components/common/Banner';
import NotificationSendForm from '@/components/common/form/NotificationSendForm';
import Hat from '@/components/icons/Hat';
import FooterSecondary from '@/components/layout/FooterSecondary';
import apiClient from '@/utils/api';
import GetCsrfToken from '@/utils/get-csrf-token';
// import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// export const metadata: Metadata = {
//   title: 'Landa Academy | Survey',
//   description: ''
// };
interface SurveyForm {
  full_name: string;
  email: string;
  phone_number: string;
  favorite_skill: string;
}
const SurveyPage = () => {
  const initialFormData: SurveyForm = {
    full_name: '',
    email: '',
    phone_number: '',
    favorite_skill: ''
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SurveyForm>({
    mode: 'onBlur',
    defaultValues: initialFormData
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [send, setSend] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    async function fetchCsrfToken() {
      const token = await GetCsrfToken(
        `${process.env.NEXT_PUBLIC_DJANGO_HOST_URL}/get-csrf-token`
      );
      setCsrfToken(token);
    }
    fetchCsrfToken();
  }, []);
  const onSubmit = async (formData: SurveyForm) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      await apiClient.post('common/survey-form', JSON.stringify(formData), {
        headers: {
          'X-CSRFToken': csrfToken,
          'Content-Type': 'application/json'
        }
      });
      setIsSuccess(true);
      setShowNotification(true);
      setSend(false);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      reset(initialFormData); // Reset the form after successful submission
      console.log('Form data sent successfully!');
    } catch (error) {
      setShowNotification(true);
      setSend(false);
      setIsSuccess(false);
      console.error('Error sending form data:', error);
      setTimeout(() => {
        setShowNotification(false);
      }, 10000); // 10 seconds in milliseconds
    }
  };
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col items-center space-y-8"
        >
          {/* <div>
            <input
              id="name"
              type="text"
              {...register('full_name', {
                required: 'Your Name is required.',
                pattern: {
                  value: /^[\u0600-\u06FF ,.'-]+$/i,
                  message: 'Enter a valid Name.'
                }
              })}
              placeholder="Your Name*"
              className={`inline-flex h-[40px] w-[300px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[630px] ${
                errors.full_name ? 'border-red-500' : ''
              }`}
            />
            {errors.full_name && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.full_name.message}
              </span>
            )}
          </div> */}
          {/* <div>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Your Email is required.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Enter a valid email address.'
                }
              })}
              placeholder="Your Email*"
              className={`inline-flex h-[40px] w-[300px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[630px] ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.email.message}
              </span>
            )}
          </div> */}
          {/* <div>
            <input
              id="number"
              type="text"
              {...register('phone_number', {
                required: 'Your Number is required.',
                pattern: {
                  value: /^\d{11}$/,
                  message: 'Enter a valid number.'
                }
              })}
              placeholder="Your Number*"
              className={`inline-flex h-[40px] w-[300px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[630px] ${
                errors.phone_number ? 'border-red-500' : ''
              }`}
            />
            {errors.phone_number && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.phone_number.message}
              </span>
            )}
          </div> */}
          <div className="flex flex-col space-y-4">
            <label htmlFor="skills" className="text-[#B2B2B2]">
              Which skills would you like to learn at Landa Academy?
            </label>
            <select
              className={`inline-flex h-[40px] w-[300px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 md:h-[50px] md:w-[630px] ${
                errors.phone_number ? 'border-red-500' : ''
              }`}
              id="skills"
              {...register('favorite_skill', {
                pattern: {
                  value:
                    /^(webDevelopment|dataScience|mobileAppDevelopment|uiUxDesign)$/,
                  message: 'Enter a valid skill.'
                },
                required: 'Your skill is required.'
              })}
            >
              <option disabled value="">
                Select a skill
              </option>
              <option value="webDevelopment">Web Development</option>
              <option value="dataScience">Data Science</option>
              <option value="mobileAppDevelopment">
                Mobile App Development
              </option>
              <option value="uiUxDesign">UI/UX Design</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={send}
            className="h-[40px] w-[180px] bg-[#FDD30A] font-barlow text-black md:h-[50px]"
          >
            {send ? 'Submitting ....' : 'Submit'}
          </button>
        </form>
        <NotificationSendForm
          submitting={isSubmitting}
          success={isSuccess}
          sendStatus={send}
          show={showNotification}
        />
      </div>
      <FooterSecondary />
    </div>
  );
};

export default SurveyPage;
