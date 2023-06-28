import React, { useRef } from 'react';

export default function Clients({ clientLogos }) {
  const clients = useRef(null);

  console.log(clientLogos);
  return (
    <section className='py-20 px-8 mx-auto max-w-7xl xl:px-12'>
      <h3 className='mt-2 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        Clients
      </h3>
      <div ref={clients} className='w-full range overflow-x-scroll mt-4'>
        {[...Array(16)].map((ele, i) => (
          <img
            className='object-center object-cover'
            src='https://logos-world.net/wp-content/uploads/2020/11/Shell-Logo-1971-present.jpg'
            alt='client logo'
            style={{
              width: 200,
              padding: 16,
              float: 'left',
            }}
          />
        ))}
      </div>
    </section>
  );
}
