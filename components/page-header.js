export default function PageHeader({ text, subtext }) {
  return (
    <div className='py-16'>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
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
    </div>
  );
}
