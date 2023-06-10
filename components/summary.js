import Image from 'next/image';

export default function Summary({ title, summary, link, image }) {
  return (
    <section className='py-20 bg-white'>
      <div className='flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
        <h3 className='mt-2 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
          {title}
        </h3>
        <div className='flex flex-col mb-8 animated fadeIn sm:flex-row'>
          <div className='flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last'>
            <img
              className='rounded-lg shadow-xl'
              src={image}
              alt='Picture of the author'
            />
          </div>
          <div className='flex flex-row justify-start mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16'>
            <div className='w-12 mr-5 mt-2 border-t-4 border-blue-700'></div>
            <div className='flex flex-col justify-start w-11/12'>
              <p className='text-md text-gray-500 text md:text-left'>
                {summary}
              </p>
              <p className='mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase'>
                {link}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
