import React from 'react';

export default function QualityPolicy() {
  return (
    <section id='quality-policy' className='mb-20 px-5'>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 flex flex-col py-20'>
        <div className='flex flex-col-reverse animated fadeIn lg:flex-row'>
          <div className='flex items-center w-full md:w-6/12 sm:order-last'>
            <div className='w-full'>
              <img
                src='/quality-policy.webp'
                alt='DOTEC quality policy'
                loading='lazy'
                decoding='async'
                className='w-4/5 object-contain'
              />
            </div>
          </div>
          <div className='flex flex-row justify-start mb-8 md:mt-0 sm:w-1/2 md:w-6/12 sm:pr-16'>
            <div className='flex flex-col justify-start w-11/12'>
              <h3 className='mt-8 text-2xl font-bold text-dotec uppercase sm:text-left md:text-6xl'>
                Quality Policy
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
