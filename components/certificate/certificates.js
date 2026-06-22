import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { cfImage } from '../../utils/image';

export default function Certificates({ certificates = [] }) {
  // 1-based index into `sorted`; 0 means the grid (no lightbox) is shown.
  const [currentIndex, setCurrentIndex] = useState(0);

  const sorted = useMemo(
    () =>
      [...certificates].filter((x) => x.id).sort((x, y) => x.id - y.id),
    [certificates]
  );

  // Attach the stable lightbox position so selection never depends on the
  // CMS `id` values being contiguous.
  const withPosition = sorted.map((cert, i) => ({ ...cert, position: i + 1 }));
  const landscape = withPosition.filter((x) => x.main);
  const portrait = withPosition.filter((x) => !x.main);
  const size = sorted.length;

  const next = () => setCurrentIndex(currentIndex < size ? currentIndex + 1 : 1);
  const previous = () =>
    setCurrentIndex(currentIndex > 1 ? currentIndex - 1 : size);

  useEffect(() => {
    if (currentIndex === 0) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setCurrentIndex(0);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') previous();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentIndex, size]);

  if (currentIndex !== 0) {
    const active = sorted[currentIndex - 1];
    return (
      <div className='h-screen w-screen bg-white fixed top-0 z-50'>
        <div className='w-full h-full py-10 mb-20'>
          <div className='h-full flex flex-col px-8 mx-auto lg:px-6'>
            <div className='h-full flex flex-col-reverse lg:flex-row'>
              <div className='h-1/2 lg:h-full relative flex items-center justify-center w-full lg:w-8/12 sm:order-last'>
                <div className='h-full w-10/12 flex justify-center items-center'>
                  {active?.image?.url && (
                    <img
                      src={cfImage(active.image.url, { width: 1200 })}
                      alt={active?.title ?? ''}
                      decoding='async'
                      className='w-full h-full object-contain drop-shadow-lg'
                    />
                  )}
                </div>
              </div>
              <div className='h-1/2 lg:h-full flex flex-row justify-center mb-8 mt-6 lg:mt-0 w-full lg:w-4/12 sm:pr-16'>
                <div className='h-full flex flex-col justify-between w-11/12'>
                  <div className='flex flex-row justify-between w-8/12'>
                    <button
                      className='flex items-center text-xs uppercase font-bold text-left hover:opacity-75'
                      onClick={() => setCurrentIndex(0)}
                    >
                      Go Back
                    </button>
                  </div>

                  <p className='mt-6 lg:mt-24 text-base lg:text-2xl font-bold text-gray-900 md:text-left uppercase'>
                    {active?.title}
                  </p>
                  <div className='mt-6 mx-auto lg:mx-0 lg:mt-12 flex flex-row justify-between w-8/12'>
                    <button
                      aria-label='Previous certificate'
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
                      aria-label='Next certificate'
                      className='flex items-center text-xs uppercase font-bold text-right text-dotec hover:opacity-75'
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
  }

  return (
    <section id='certificates' className='bg-gray-100 p-5'>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24'>
        <div className='w-full my-10'>
          <div className='grid grid-cols-2 gap-2 lg:gap-x-4 lg:gap-y-12 my-16'>
            {landscape.map((x) => {
              return (
                <Certificate
                  key={x.id}
                  position={x.position}
                  title={x.title}
                  image={x?.image?.url}
                  aspect='aspect-video'
                  wrapperClass='w-full'
                  setCurrentIndex={setCurrentIndex}
                />
              );
            })}
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-x-4 lg:gap-y-12'>
            {portrait.map((x) => {
              return (
                <Certificate
                  key={x.id}
                  position={x.position}
                  title={x.title}
                  image={x?.image?.url}
                  aspect='aspect-[3/4]'
                  wrapperClass='w-9/12 mx-auto'
                  setCurrentIndex={setCurrentIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Certificates.propTypes = {
  certificates: PropTypes.array,
};

const Certificate = ({
  title,
  image,
  position,
  aspect,
  wrapperClass,
  setCurrentIndex,
}) => {
  return (
    <div className={`${wrapperClass} ${aspect} p-2`}>
      <button
        type='button'
        className='w-full h-full relative group cursor-pointer'
        onClick={() => setCurrentIndex(position)}
      >
        {image && (
          <img
            src={cfImage(image, { width: 600 })}
            alt={title ?? ''}
            loading='lazy'
            decoding='async'
            className='object-center object-contain h-full w-full opacity-100 group-hover:opacity-10 duration-300'
          />
        )}
        <div className='hidden lg:flex w-full h-full opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex-col justify-center items-center'>
          <span className='w-3/5 text-center lg:text-xl text-black font-bold uppercase'>
            {title}
          </span>
          <p className='text-center mt-6 text-dotec font-bold text-xs uppercase'>
            View Full
          </p>
        </div>
      </button>
      <div className='shadow hidden lg:block'></div>
    </div>
  );
};

Certificate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  position: PropTypes.number,
  aspect: PropTypes.string,
  wrapperClass: PropTypes.string,
  setCurrentIndex: PropTypes.func,
};
