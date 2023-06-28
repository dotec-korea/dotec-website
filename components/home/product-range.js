import React, { useRef, useState } from 'react';
import ProductRangeCard from './product-range-card';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import useWindowDimensions from '../../utils/width-dimensions';

export default function ProductRange({ productRange }) {
  const slider = useRef(null);
  const { width } = useWindowDimensions();

  let batch = Math.ceil(productRange.length / 4);

  const next = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft + width,
      behavior: 'smooth',
    });
  };

  const previous = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft - width,
      behavior: 'smooth',
    });
  };

  return (
    <section className='py-20 px-8 mx-auto max-w-7xl xl:px-12'>
      <h3 className='mt-2 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        Product Range
      </h3>
      <div ref={slider} className='w-full range overflow-x-scroll'>
        <div
          style={{ width: batch * 100 + '%' }}
          className={`grid md:grid-cols-${
            2 * batch
          } grid-rows-2 grid-flow-col gap-5 lg:gap-7 my-10`}
        >
          {productRange.map((pr, index) => {
            return (
              <ProductRangeCard
                key={index}
                title={pr?.title}
                image={pr?.image.url}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <div className='w-1/2 mx-auto flex justify-between'>
        <button
          className='flex items-center uppercase font-bold text-left text-blue-700 hover:opacity-75'
          onClick={previous}
        >
          <MdNavigateBefore className='text-4xl' />
        </button>
        <button
          className='flex items-center uppercase font-bold text-right text-blue-700 hover:opacity-75'
          onClick={next}
        >
          <MdNavigateNext className='text-4xl' />
        </button>
      </div>
    </section>
  );
}
