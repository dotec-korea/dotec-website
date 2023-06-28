import React, { useEffect, useRef } from 'react';

export default function Clients({ clients }) {
  const slider = useRef(null);
  clients = clients.sort((x, y) => x?.order - y?.order);

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.scrollTo({
        left: slider.current?.scrollLeft + 150,
        behavior: 'smooth',
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    clients && (
      <section className='w-full py-10 flex'>
        <h3 className='mt-2 p-4 w-1/6 text-3xl font-bold bg-blue-700 text-white uppercase sm:text-left'>
          Our Clients
        </h3>
        <div className='flex items-center w-5/6 order-last'>
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
