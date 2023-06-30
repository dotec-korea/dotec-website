import React, { useEffect, useRef, useState } from 'react';

export default function Clients({ clients }) {
  const slider = useRef(null);
  clients = clients.sort((x, y) => x?.order - y?.order);

  useEffect(() => {
    const interval = setInterval(() => {
      const maxScrollLeft =
        slider.current?.scrollWidth - slider.current?.clientWidth;

      if (slider.current?.scrollLeft < maxScrollLeft) {
        slider.current?.scrollTo({
          left: slider.current?.scrollLeft + 150,
          behavior: 'smooth',
        });
      } else {
        slider.current?.scrollTo({
          left: slider.current?.scrollLeft - maxScrollLeft,
          behavior: 'smooth',
        });
      }
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    clients && (
      <section className='w-full py-10 flex'>
        <div className='relative mt-2 h-28 p-4 w-1/6 flex items-center text-3xl xl:4xl font-bold bg-blue-700 text-white uppercase sm:text-left main-pointed-tab'>
          Our Clients
        </div>
        <div className='flex pl-4 items-center w-5/6 order-last'>
          <div
            ref={slider}
            className='snap-x mx-auto snap-mandatory flex w-full overflow-x-scroll range'
          >
            {clients.map((client, index) => (
              <div key={index} className='w-1/5 snap-start flex-shrink-0 px-12'>
                <img
                  className='w-full h-full object-center object-contain'
                  src={client.image.url}
                  alt={client.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}
