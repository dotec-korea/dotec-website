import { useRef } from 'react';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

export default function History({ history }) {
  const slider = useRef(null);

  history = history.sort((x, y) => x?.order - y?.order);

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

  return (
    history && (
      <section id='history' className='bg-white my-20'>
        <h3 className='px-8 mx-auto max-w-7xl xl:px-12 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
          Brief History
        </h3>
        <div className='w-full flex justify-between items-center my-20 px-8 mx-auto max-w-7xl xl:px-12'>
          {history?.length > 5 && (
            <MdOutlineKeyboardDoubleArrowLeft
              onClick={previous}
              fontSize={64}
              className='text-blue-700 cursor-pointer'
            />
          )}
          <div
            ref={slider}
            className='snap-x mx-auto snap-mandatory w-10/12 overflow-x-scroll flex range'
          >
            {history.map((element, index) => (
              <div key={index} className='w-1/5 flex-shrink-0 snap-center py-2'>
                <div className='font-bold text-blue-700 leading-none text-5xl'>
                  {element?.year}
                </div>
                <div className='font-light text-blue-700 text-xl'>
                  {element?.month}
                </div>
                <div className='divider text-blue-700 py-5 flex items-center'>
                  <div className='w-2 h-2 bg-blue-700 rounded-full'></div>
                  <div className='h-0.5 w-full bg-blue-700'></div>
                </div>
                <div className='description w-32'>{element?.description}</div>
              </div>
            ))}
          </div>
          {history.length > 5 && (
            <MdOutlineKeyboardDoubleArrowRight
              onClick={next}
              fontSize={64}
              className='text-blue-700 cursor-pointer'
            />
          )}
        </div>
      </section>
    )
  );
}
