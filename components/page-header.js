import Link from 'next/link';

export default function PageHeader({ text, subtext, link }) {
  return (
    <div className='py-16'>
      <div className='xl:container m-auto px-6 md:px-12 lg:px-6'>
        {text && (
          <h1 className='sm:mx-auto font-bold uppercase text-white text-5xl text-center sm:text-5xl md:text-6xl lg:text-left lg:ml-0 lg:leading-tight'>
            {text}
          </h1>
        )}
        <div className='lg:flex'>
          <div className='relative mt-4 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
            {subtext && (
              <p className='sm:text-lg text-white lg:w-10/12'>{subtext}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
