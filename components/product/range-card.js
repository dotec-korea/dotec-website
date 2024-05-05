import { useEffect, useState } from 'react';
import { getProductRange } from '../../lib/api/products';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const RangeCard = ({ rangeId }) => {
  const [productRange, setProductRange] = useState({});
  const [productRangeTables, setProductRangeTables] = useState({});

  useEffect(() => {
    setProductRange({});
    if (rangeId) {
      async function fetchData() {
        const response = await getProductRange(rangeId);
        if (response) {
          setProductRange(response);
          setProductRangeTables(response.tablesCollection);
        }
      }
      fetchData();

      console.log(productRangeTables);
    }
  }, [rangeId]);

  return (
    <>
      {productRange?.description && (
        <>
          <h2 className='text-lg lg:text-2xl font-bold mb-5'>
            {productRange?.title}
          </h2>
          <div className='w-full p-6 bg-gray-100'>
            <div className='flex flex-col-reverse lg:flex-row'>
              <div className='w-full aspect-square'>
                {productRange?.image?.url && (
                  <img
                    src={productRange?.image?.url}
                    alt={productRange?.title}
                    className='object-center object-contain h-full w-full'
                  />
                )}
              </div>
              <div className='w-full lg:px-8'>
                <ReactMarkdown
                  className='text-xs lg:text-base mb-6'
                  children={productRange?.description}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {productRangeTables && (
        <div className='w-full p-6 bg-gray-100 mt-4'>
          <h3 className='text-xs lg:text-base font-bold mb-5'>
            {productRange?.tableHeader}
          </h3>
          <div className='grid grid-cols-2 gap-4'>
            {productRangeTables?.items?.map((item, key) => {
              return (
                <img
                  key={key}
                  src={item.url}
                  alt={productRange?.title + ' ' + key}
                  className='w-full object-contain'
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default RangeCard;
