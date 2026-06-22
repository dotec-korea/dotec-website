import Link from 'next/link';
import PropTypes from 'prop-types';
import { cfImage } from '../../utils/image';

export default function Summary({ title, summary, link, image }) {
  return (
    <section id='summary' className='px-5'>
      <div className='flex flex-col mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
        <div className='lg:border-l-4 lg:border-dotec py-4 lg:p-8'>
          <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
            <div className='flex flex-col justify-start lg:flex-1'>
              {title && (
                <h2 className='mb-4 text-2xl font-bold text-dotec uppercase sm:text-left md:text-4xl'>
                  {title}
                </h2>
              )}
              {summary && (
                <p className='text-sm md:text-base tracking-wider text-gray-500 md:text-justify'>
                  {summary}
                </p>
              )}
              {link && (
                <Link
                  href={link}
                  className='mt-4 inline-block w-fit font-semibold text-dotec hover:opacity-75'
                >
                  Learn more
                </Link>
              )}
            </div>
            {image && (
              <div className='lg:w-1/3'>
                <img
                  src={cfImage(image, { width: 640 })}
                  alt={title ? `${title}` : ''}
                  loading='lazy'
                  decoding='async'
                  className='w-full object-contain'
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Summary.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
};
