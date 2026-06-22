import { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

export default function History({ history = [] }) {
  const slider = useRef(null);

  const sortedHistory = useMemo(
    () => [...history].sort((x, y) => x?.order - y?.order),
    [history]
  );

  const next = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft + 150,
      behavior: 'smooth',
    });
  };

  const previous = () => {
    slider.current?.scrollTo({
      left: slider.current?.scrollLeft - 150,
      behavior: 'smooth',
    });
  };

  if (sortedHistory.length === 0) return null;

  return (
    <section id='history' className='bg-white my-20 px-5'>
      <h3 className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 text-2xl font-bold text-dotec uppercase sm:text-left md:text-4xl'>
        Brief History
      </h3>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 py-8 w-full flex justify-between items-center'>
        {sortedHistory.length > 5 && (
          <button
            type='button'
            aria-label='Previous history entries'
            onClick={previous}
          >
            <MdOutlineKeyboardDoubleArrowLeft
              fontSize={64}
              className='text-dotec cursor-pointer'
            />
          </button>
        )}
        <div
          ref={slider}
          className='snap-x mx-auto snap-mandatory w-10/12 overflow-x-scroll flex range'
        >
          {sortedHistory.map((element) => (
            <div
              key={`${element?.year}-${element?.month}-${element?.order}`}
              className='w-1/2 lg:w-1/5 flex-shrink-0 snap-center py-2'
            >
              <div className='font-bold text-dotec leading-none text-2xl lg:text-5xl'>
                {element?.year}
              </div>
              <div className='font-light text-dotec text-base lg:text-xl'>
                {element?.month}
              </div>
              <div className='text-dotec py-5 flex items-center'>
                <div className='w-2 h-2 bg-dotec rounded-full'></div>
                <div className='h-0.5 w-full bg-dotec'></div>
              </div>
              <div className='w-32 text-sm lg:text-base px-2'>
                {element?.description}
              </div>
            </div>
          ))}
        </div>
        {sortedHistory.length > 5 && (
          <button
            type='button'
            aria-label='Next history entries'
            onClick={next}
          >
            <MdOutlineKeyboardDoubleArrowRight
              fontSize={64}
              className='text-dotec cursor-pointer'
            />
          </button>
        )}
      </div>
    </section>
  );
}

History.propTypes = {
  history: PropTypes.array,
};
