import { useEffect, useState } from 'react';
import { getProcess } from '../../lib/api/about';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [showTab, setShowTab] = useState(false);
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
    setShowTab(true);
  }, [tab]);

  const setManufacturing = (id) => {
    setShowTab(false);
    setTab(id);
  };

  return (
    <section id='manufacturing' className='bg-gray-100 py-12'>
      <h3 className='px-8 pb-6 mx-auto  lg:px-6 text-2xl font-bold text-dotec uppercase sm:text-left md:text-4xl'>
        MANUFACTURING PROCESS
      </h3>
      <div className='w-full pt-6 mb-12 mx-auto  lg:px-6 flex justify-center'>
        <div className='w-full grid grid-cols-4'>
          {headers.map((header, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-center text-xl font-bold cursor-pointer ${
                  header.id <= tab ? 'bg-dotec text-white' : ' text-gray-800'
                }`}
                onClick={() => setManufacturing(header.id)}
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
      <div className='min-h-[300px]'>
        {images?.length > 0 && (
          <AnimatePresence>
            {showTab && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <ImageTab images={images} tab={tab} />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

const ImageTab = ({ images, tab }) => {
  return (
    <div className='w-full pt-6 mb-40 mx-auto  lg:px-6 flex justify-center'>
      <div className='w-full grid grid-cols-3 gap-16'>
        {images.map((image, index) => {
          return (
            <div key={index}>
              {image && (
                <img
                  className='h-full w-full object-center object-contain'
                  src={image.url}
                  alt={tab + ' ' + index}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
