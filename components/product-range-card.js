import React from 'react';
import { MdNavigateNext } from 'react-icons/md';

export default function ProductRangeCard({ title, image }) {
  return (
    <div className='bg-gray-100 group flex h-40 lg:h-48 xl:h-56 2xl:h-64 border shadow-md max-w-xs md:max-w-none overflow-hidden border-b-8 border-b-transparent hover:border-b-blue-700 cursor-pointer duration-500'>
      <div className='w-1/2 h-full flex justify-center items-center'>
        <img className='h-full w-full object-contain' src={image} alt='' />
      </div>
      <div className='w-1/2 h-full flex items-center'>
        <div className='p-5'>
          <h3 className='font-bold text-xl leading-6 text-gray-900 my-2'>
            {title}
          </h3>
          <a
            className='mt-3 flex items-center font-normal text-lg group-hover:text-blue-700 group-hover:font-semibold duration-500'
            href='#'>
            View more <MdNavigateNext className='text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
}
