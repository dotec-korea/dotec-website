import React, { useRef } from 'react';
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
    <section className='py-10 lg:py-20 px-5'>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
        <h3 className='mb-8 text-2xl font-bold text-dotec uppercase sm:text-left md:text-4xl'>
          Product Range
        </h3>
        <div className='lg:hidden grid grid-cols-1 gap-6'>
          {productRange
            .sort((x, y) => x.id - y.id)
            .map((pr, index) => {
              return (
                <ProductRangeCard
                  key={pr?.id}
                  q={pr.sys.id}
                  title={pr?.title}
                  image={pr?.image?.url}
                  index={index}
                />
              );
            })}
        </div>
        <div className='hidden lg:block'>
          <div ref={slider} className='w-full range overflow-x-scroll'>
            <div
              style={{ width: batch * 100 + '%' }}
              className={`grid md:grid-cols-${
                2 * batch
              } grid-rows-2 grid-flow-col gap-5 lg:gap-7 my-10`}
            >
              {productRange
                .sort((x, y) => x.id - y.id)
                .map((pr, index) => {
                  return (
                    <ProductRangeCard
                      key={pr.id}
                      q={pr.sys.id}
                      title={pr?.title}
                      image={pr?.image?.url}
                      index={index}
                    />
                  );
                })}
            </div>
          </div>
          <div className='w-1/2 mx-auto flex justify-between'>
            <button
              className='flex items-center uppercase font-bold text-left text-dotec hover:opacity-75'
              onClick={previous}
            >
              <MdNavigateBefore className='text-4xl' />
            </button>
            <button
              className='flex items-center uppercase font-bold text-right text-dotec hover:opacity-75'
              onClick={next}
            >
              <MdNavigateNext className='text-4xl' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
