import { useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function Certificates({ certificates }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  certificates = certificates.sort((x, y) => x.id - y.id);
  const landscape = certificates?.filter((x) => x.main) ?? [];
  const portrait = certificates?.filter((x) => !x.main) ?? [];
  let size = certificates.length;

  const next = () => {
    setCurrentIndex(currentIndex < size ? currentIndex + 1 : 1);
  };

  const previous = () => {
    setCurrentIndex(currentIndex > 1 ? currentIndex - 1 : size);
  };

  if (currentIndex !== 0)
    return (
      <div className='h-screen w-screen bg-white fixed top-0 z-20'>
        <div className='w-full h-full py-10 mb-20'>
          <div className='h-full flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
            <div className='h-full flex flex-col sm:flex-row'>
              <div className='h-full flex items-center justify-center sm:w-1/2 md:w-8/12 sm:order-last'>
                <div className='h-full w-10/12 flex justify-center items-center'>
                  <img
                    src={certificates[currentIndex - 1]?.image.url}
                    className='w-full h-full object-contain drop-shadow-lg'
                  />
                </div>
              </div>
              <div className='flex flex-row justify-center mb-8 md:mt-0 sm:w-1/2 md:w-4/12 sm:pr-16'>
                <div className='flex flex-col justify-between w-11/12'>
                  <div className='flex flex-row justify-between w-8/12'>
                    <button
                      className='flex items-center text-xs uppercase font-bold text-left hover:opacity-75'
                      onClick={() => setCurrentIndex(0)}
                    >
                      Go Back
                    </button>
                  </div>

                  <p className='mt-24 text-2xl font-bold text-gray-900 text md:text-left uppercase'>
                    {certificates[currentIndex - 1]?.title}
                  </p>
                  <div className='mt-12 flex flex-row justify-between w-8/12'>
                    <button
                      className='flex items-center text-xs uppercase font-bold text-left hover:opacity-75'
                      onClick={previous}
                    >
                      <MdNavigateBefore className='text-xl' />
                      Back
                    </button>
                    <span className='text-sm uppercase font-bold text-center'>
                      {currentIndex}/{size}
                    </span>
                    <button
                      className='flex items-center text-xs uppercase font-bold text-right text-blue-700 hover:opacity-75'
                      onClick={next}
                    >
                      Next
                      <MdNavigateNext className='text-xl' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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
              {landscape.map((x) => {
                return (
                  <LandscapeCertificate
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    image={x.image.url}
                    setCurrentIndex={setCurrentIndex}
                  />
                );
              })}
            </div>
            <div className='grid grid-cols-3 gap-x-4 gap-y-12'>
              {portrait.map((x) => {
                return (
                  <PortraitCertificate
                    key={x.id}
                    id={x.id}
                    title={x.title}
                    image={x.image.url}
                    setCurrentIndex={setCurrentIndex}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <News /> */}
    </>
  );
}

const LandscapeCertificate = ({ title, image, id, setCurrentIndex }) => {
  return (
    <div className='w-full aspect-video p-2'>
      <div
        className='w-full h-full relative group cursor-pointer'
        onClick={() => setCurrentIndex(id)}
      >
        <img
          src={image}
          alt={title}
          className='object-center object-contain h-full w-full opacity-100 group-hover:opacity-10 duration-300'
        />
        <div className='w-full h-full opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col justify-center items-center'>
          <span className='w-3/5 text-center text-xl text-black font-bold uppercase'>
            {title}
          </span>
          <p className='text-center mt-6 text-blue-700 font-bold text-xs uppercase'>
            View Full
          </p>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  );
};

const PortraitCertificate = ({ title, image, id, setCurrentIndex }) => {
  return (
    <div className='w-9/12 mx-auto aspect-[3/4] p-2'>
      <div
        className='w-full h-full relative group cursor-pointer'
        onClick={() => setCurrentIndex(id)}
      >
        <img
          src={image}
          alt={title}
          className='object-center object-contain h-full w-full opacity-100 group-hover:opacity-10 duration-300'
        />
        <div className='w-full h-full opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex flex-col justify-center items-center '>
          <span className='w-3/5 text-center text-xl text-black font-bold uppercase'>
            {title}
          </span>
          <p className='text-center mt-6 text-blue-700 font-bold text-xs uppercase'>
            View Full
          </p>
        </div>
      </div>
      <div className='shadow'></div>
    </div>
  );
};
