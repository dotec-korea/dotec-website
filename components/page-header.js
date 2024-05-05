export default function PageHeader({ text, subtext, isHome }) {
  return (
    <div className={`${isHome ? 'py-12' : 'py-16'}`}>
      <div className='flex mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
        <div className='w-9/12'>
          {text && (
            <h1 className='font-bold uppercase text-white text-4xl md:text-6xl text-center lg:text-left lg:ml-0 lg:leading-tight'>
              {text}
            </h1>
          )}
          <div className='lg:flex'>
            <div className='mt-4 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12'>
              <p className='lg:text-lg xl:text-xl text-white lg:w-10/12'>
                {subtext && subtext}
              </p>
            </div>
          </div>
        </div>
        {isHome && (
          <div className='w-3/12 flex justify-end'>
            <img
              src='/valves.webp'
              alt=''
              className='w-2/3 object-contain drop-shadow-2xl'
            />
          </div>
        )}
      </div>
    </div>
  );
}
