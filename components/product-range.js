import React, { useState } from 'react';
import ProductRangeCard from './product-range-card';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function ProductRange({ productRange }) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);
  const [fourth, setFourth] = useState(3);

  let size = productRange.length - 1;

  const next = () => {
    setFirst(first < size ? first + 1 : 0);
    setSecond(second < size ? second + 1 : 0);
    setThird(third < size ? third + 1 : 0);
    setFourth(fourth < size ? fourth + 1 : 0);
  };

  const previous = () => {
    setFirst(first < 0 ? first - 1 : size);
    setSecond(second < 0 ? second - 1 : size);
    setThird(third < 0 ? third - 1 : size);
    setFourth(fourth < 0 ? fourth - 1 : size);
  };

  return (
    <section className='py-20 px-8 mx-auto xl:px-12'>
      <h3 className='mt-2 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        Product Range
      </h3>
      <div className='grid justify-center md:grid-cols-2 gap-5 lg:gap-7 my-10'>
        <ProductRangeCard
          title={productRange[first]?.title}
          image={productRange[first]?.image.url}
        />
        <ProductRangeCard
          title={productRange[second]?.title}
          image={productRange[second]?.image.url}
        />
        <ProductRangeCard
          title={productRange[third]?.title}
          image={productRange[third]?.image.url}
        />
        <ProductRangeCard
          title={productRange[fourth]?.title}
          image={productRange[fourth]?.image.url}
        />
      </div>
      <div className='w-2/3 mx-auto flex justify-between'>
        <div className='inline-flex items-center w-full'>
          <button className='flex items-center uppercase font-bold text-left text-blue-700 hover:opacity-75'>
            <MdNavigateBefore className='text-4xl' />
          </button>
          <hr className='w-full my-8 border-blue-700 border-[1px]' />
          <button className='flex items-center uppercase font-bold text-right text-blue-700 hover:opacity-75'>
            <MdNavigateNext className='text-4xl' />
          </button>
        </div>
      </div>
    </section>
  );
}
