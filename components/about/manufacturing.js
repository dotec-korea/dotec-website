import { useEffect, useState } from 'react';
import { getProcess } from '../../lib/api/about';

const headers = [
  {
    id: 1,
    title: 'Casting',
  },
  {
    id: 2,
    title: 'Machining',
  },
  {
    id: 3,
    title: 'Assembling',
  },
  {
    id: 4,
    title: 'Inspection and Test',
  },
];

export default function Manufacturing() {
  const [tab, setTab] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([]);
    const current = headers.find((x) => x.id === tab);

    if (current) {
      async function fetchData() {
        const response = await getProcess(current.title);
        if (response.length > 0) setImages(response[0].imagesCollection?.items);
      }

      fetchData();
    }
  }, [tab]);

  return (
    <section id='manufacturing' className='bg-gray-100 py-12'>
      <h3 className='px-8 pb-6 mx-auto max-w-7xl xl:px-12 text-2xl font-bold text-blue-700 uppercase sm:text-left md:text-4xl'>
        MANUFACTURING PROCESS
      </h3>
      <div className='w-full pt-6 mb-12 mx-auto max-w-7xl xl:px-12 flex justify-center'>
        <div className='w-full grid grid-cols-4'>
          {headers.map((header, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-center text-xl font-bold cursor-pointer ${
                  header.id <= tab ? 'bg-blue-700 text-white' : ' text-gray-800'
                }`}
                onClick={() => setTab(header.id)}
              >
                <div
                  className={`relative w-full h-20 flex items-center justify-center
                  ${
                    header.id === tab &&
                    header.id !== headers.length &&
                    'pointed-tab'
                  }
                  `}
                >
                  {header.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {images?.length > 0 && (
        <div className='w-full pt-6 mb-40 mx-auto max-w-7xl xl:px-12 flex justify-center'>
          <div className='w-full grid grid-cols-3 gap-16'>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <img
                    className='h-full w-full object-center object-contain'
                    src={image.url}
                    alt={tab + ' ' + index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
