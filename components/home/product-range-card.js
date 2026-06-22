import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import { MdNavigateNext } from 'react-icons/md';
import { cfImage } from '../../utils/image';

export default function ProductRangeCard({ q, title, image }) {
  if (!q) return null;

  return (
    <Link
      href={`/products?q=${q}`}
      className='bg-gray-100 group flex h-32 lg:h-48 xl:h-56 2xl:h-64 shadow-md md:max-w-none overflow-hidden cursor-pointer duration-500'
    >
      <div className='w-1/2 h-full flex justify-center items-center'>
        {image && (
          <img
            className='h-full w-full object-cover'
            src={cfImage(image, { width: 400 })}
            alt={title ?? ''}
            loading='lazy'
            decoding='async'
          />
        )}
      </div>
      <div className='w-1/2 h-full flex items-center'>
        <div className='p-5'>
          <h3 className='font-bold text-base lg:text-xl 2xl:text-2xl leading-6 text-gray-900 my-2'>
            {title}
          </h3>
          <span className='mt-3 flex items-center font-normal text-sm lg:text-lg 2xl:text-xl group-hover:text-dotec group-hover:font-semibold duration-500'>
            View more <MdNavigateNext className='text-xl' />
          </span>
        </div>
      </div>
    </Link>
  );
}

ProductRangeCard.propTypes = {
  q: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
};
