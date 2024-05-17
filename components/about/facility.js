import FacilityCard from './facility-card';
import React, { useRef } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function Facility({ facilities }) {
  const slider = useRef(null);

  facilities = facilities.sort((x, y) => x.id - y.id);

  const next = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft + 300,
      behavior: 'smooth',
    });
  };

  const previous = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft - 300,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id='facility'
      className='mb-20 px-5'
      style={{
        background: `linear-gradient(
      to right, 
      #ffffff 0%, 
      #ffffff 50%, 
      #BB1B1B 50%, 
      #BB1B1B 100%
    )`,
      }}
    >
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 flex flex-col py-20'>
        <div className='flex flex-col-reverse animated fadeIn lg:flex-row'>
          <div className='flex items-center w-full md:w-8/12 sm:order-last'>
            <div
              ref={slider}
              className='snap-x mx-auto snap-mandatory flex w-full overflow-x-scroll range'
            >
              {facilities.map((facility, index) => {
                return (
                  <FacilityCard
                    key={index}
                    title={facility?.title}
                    image={facility?.image.url}
                    text={facility?.description}
                  />
                );
              })}
            </div>
          </div>
          <div className='flex flex-row justify-start mb-8 md:mt-0 sm:w-1/2 md:w-4/12 sm:pr-16'>
            <div className='flex flex-col justify-start w-11/12'>
              <p className='text-2xl font-semibold text-gray-900 text md:text-left'>
                We are Building a Sustainable Future
              </p>
              <h3 className='mt-8 text-2xl font-bold text-dotec uppercase sm:text-left md:text-6xl'>
                Facility
              </h3>
              <div className='mt-12 flex flex-row justify-between w-1/2 lg:w-8/12'>
                <button
                  className='flex items-center text-xs uppercase font-bold text-left hover:opacity-75'
                  onClick={previous}
                >
                  <MdNavigateBefore className='text-xl' />
                  Back
                </button>
                <button
                  className='flex items-center text-xs uppercase font-bold text-right text-dotec hover:opacity-75'
                  onClick={next}
                >
                  Next
                  <MdNavigateNext className='text-xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
