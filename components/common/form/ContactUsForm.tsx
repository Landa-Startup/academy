'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactUSFormData } from '../../../app/types/global';
import GetCsrfToken from '@/utils/get-csrf-token';
import apiClient from '@/utils/api';
import NotificationSendForm from './NotificationSendForm';
import Button from '../Button';

export default function ContactUsForm() {
  const initialFormData: ContactUSFormData = {
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactUSFormData>({
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
  const onSubmit = async (formData: ContactUSFormData) => {
    setIsSubmitting(true);
    setSend(true);
    try {
      await apiClient.post('contactUs-form', JSON.stringify(formData), {
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
      <h2 className="text-center font-gilda text-5xl font-light">Reach us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
          <div className="flex flex-col">
            <input
              id="name"
              type="text"
              {...register('name', {
                required: 'Your Name is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Name.'
                }
              })}
              placeholder="Your Name*"
              className={`input input-bordered w-full bg-white drop-shadow-lg ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
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
              className={`input input-bordered w-full bg-white drop-shadow-lg ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="number"
              type="text"
              {...register('number', {
                required: 'Your Number is required.',
                pattern: {
                  value: /^\d{11}$/,
                  message: 'Enter a valid number.'
                }
              })}
              placeholder="Your Number*"
              className={`input input-bordered w-full bg-white drop-shadow-lg ${
                errors.number ? 'border-red-500' : ''
              }`}
            />
            {errors.number && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.number.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              id="subject"
              type="text"
              {...register('subject', {
                required: 'Your Subject is required.',
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: 'Enter a valid Subject.'
                }
              })}
              placeholder="Your Subject*"
              className={`input input-bordered w-full bg-white drop-shadow-lg ${
                errors.subject ? 'border-red-500' : ''
              }`}
            />
            {errors.subject && (
              <span className="mt-2 text-sm text-yellow-500">
                {errors.subject.message}
              </span>
            )}
          </div>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            cols={20}
            className={`textarea textarea-bordered col-span-1 w-full bg-white drop-shadow-lg md:col-span-2 ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-yellow-500 ">
              {errors.message.message}
            </span>
          )}
        </div>
        <div className="text-center">
          <Button
            text={send ? 'Submitting ....' : 'Submit'}
            size="visit"
            type="submit"
            disabled={send}
            bgColor="Yellow"
            addedClass="mx-auto"
          />
        </div>
      </form>
      <NotificationSendForm
        submitting={isSubmitting}
        success={isSuccess}
        sendStatus={send}
        show={showNotification}
      />
    </div>
  );
}
