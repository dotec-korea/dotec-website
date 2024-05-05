import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'DoTEC Website',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className='w-5/6 mx-auto relative'>
      <div className='lg:mx-10 -mt-10 bg-blue-700 p-5 lg:p-10 z-10'>
        <div className='mt-10 mb-20 w-full flex justify-center'>
          <h3 className='text-2xl font-bold text-white uppercase sm:text-left md:text-6xl'>
            Get in touch
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='my-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
            <input
              type='checkbox'
              id=''
              className='hidden'
              style={{ display: 'none' }}
              {...register('botcheck')}
            ></input>

            <div className='mb-5'>
              <input
                type='text'
                placeholder='Full Name'
                autoComplete='false'
                className={`w-full px-4 py-3 bg-transparent border-b-2 text-white text-xs lg:text-sm placeholder:uppercase placeholder:text-gray-200 placeholder:opacity-75 outline-none ${
                  errors.name ? 'border-red-600 ' : 'border-gray-300 '
                }`}
                {...register('name', {
                  required: 'Full name is required',
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className='mt-1 text-red-600'>
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className='mb-5'>
              <label htmlFor='email_address' className='sr-only'>
                Email Address
              </label>
              <input
                id='email_address'
                type='email'
                placeholder='Email Address'
                name='email'
                autoComplete='false'
                className={`w-full px-4 py-3 bg-transparent border-b-2 text-white text-xs lg:text-sm placeholder:uppercase placeholder:text-gray-200 placeholder:opacity-75 outline-none  ${
                  errors.email ? 'border-red-600 ' : 'border-gray-300 '
                }`}
                {...register('email', {
                  required: 'Enter your email',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <div className='mt-1 text-red-600'>
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>
          </div>

          <div className='mb-5'>
            <input
              name='subject'
              placeholder='Your Subject'
              className={`w-full px-4 py-3 bg-transparent border-b-2 text-white text-xs lg:text-sm placeholder:uppercase placeholder:text-gray-200 placeholder:opacity-75 outline-none  ${
                errors.subject ? 'border-red-600 ' : 'border-gray-300 '
              }`}
              {...register('subject', {
                required: 'Enter your Subject',
              })}
            />
            {errors.subject && (
              <div className='mt-1 text-red-600'>
                {' '}
                <small>{errors.subject.message}</small>
              </div>
            )}
          </div>

          <div className='mb-3'>
            <textarea
              name='message'
              placeholder='Your Message'
              className={`w-full px-4 py-3 bg-transparent border-b-2 text-white text-xs lg:text-sm placeholder:uppercase placeholder:text-gray-200 placeholder:opacity-75 outline-none h-36 ${
                errors.message ? 'border-red-600 ' : 'border-gray-300 '
              }`}
              {...register('message', {
                required: 'Enter your Message',
              })}
            />
            {errors.message && (
              <div className='mt-1 text-red-600'>
                {' '}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>

          <div className='w-full flex justify-center'>
            <button
              type='submit'
              className='w-1/4 text-xs lg:text-base p-2 lg:py-4 lg:px-8 font-semibold text-blue-700 transition-colors bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200'
            >
              {isSubmitting ? (
                <svg
                  className='w-5 h-5 mx-auto text-white dark:text-black animate-spin'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>

        {isSubmitSuccessful && isSuccess && (
          <div className='mt-3 text-xs lg:text-sm text-center text-green-500'>
            {message || 'Success. Message sent successfully'}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className='mt-3 text-xs lg:text-sm text-center text-red-500'>
            {message || 'Something went wrong. Please try later.'}
          </div>
        )}

        <div className='text-white text-xs text-center lg:text-sm'>
          For inquiries in South East Asia and Middle East, please contact{' '}
          <a href='mailto:abhi@dotec.sg' className='underline'>
            abhi@dotec.sg
          </a>{' '}
          and phone numbers.
        </div>
      </div>
    </div>
  );
}
