import News from './news';

export default function Certificates() {
  return (
    <>
      <section id='certificates' className='bg-gray-100'>
        <div className='px-8 pt-12 pb-6 mx-auto max-w-7xl xl:px-12'>
          <h3 className='text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl mb-4'>
            Certifications
          </h3>
          <p className='w-1/2 font-lg font-medium tracking-wide'>
            Because we are a manufacturing company which puts price on quality,
            we show you a series of certificates obtained
          </p>
          <div className='w-full my-10'>
            <div className='grid grid-cols-2 gap-x-4 gap-y-12 my-16'>
              <div className='w-full aspect-video p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-full aspect-video p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
              <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
                <div className='w-full h-full bg-orange-100'></div>
                <div className='shadow'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
    </>
  );
}
