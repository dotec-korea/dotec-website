import Link from 'next/link';

export default function PageHeader({ text, subtext, link }) {
  return (
    <div className='relative py-20'>
      <div className='relative xl:container m-auto px-6 md:px-12 lg:px-6'>
        {text && (
          <h1 className='sm:mx-auto sm:w-10/12 md:w-2/3 font-bold uppercase text-white text-5xl text-center sm:text-5xl md:text-6xl lg:text-left lg:w-5/12 lg:ml-0 lg:leading-tight'>
            {text}
          </h1>
        )}
        <div className='lg:flex'>
          <div className='relative mt-4 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
            {subtext && (
              <p className='sm:text-lg text-white lg:w-10/12'>{subtext}</p>
            )}
            {link && (
              <div className='grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start'>
                <Link
                  aria-label='explore more'
                  href={link}
                  className='p-4 bg-blue-600 rounded-lg duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20'>
                  <div className='flex justify-center space-x-4'>
                    <span className='hidden font-medium md:block text-white'>
                      Explore more
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
