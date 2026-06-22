import PropTypes from 'prop-types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { cfImage } from '../../utils/image';

const RangeCard = ({ productRange }) => {
  const tables = productRange?.tablesCollection;

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
                    src={cfImage(productRange.image.url, { width: 800 })}
                    alt={productRange?.title ?? ''}
                    loading='lazy'
                    decoding='async'
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
      {tables?.items?.length > 0 && (
        <div className='w-full p-6 bg-gray-100 mt-4'>
          <h3 className='text-xs lg:text-base font-bold mb-5'>
            {productRange?.tableHeader}
          </h3>
          <div className='grid grid-cols-2 gap-4'>
            {tables.items.map((item, key) => {
              return (
                <img
                  key={item.url ?? key}
                  src={cfImage(item.url, { width: 800 })}
                  alt={(productRange?.title ?? '') + ' table ' + (key + 1)}
                  loading='lazy'
                  decoding='async'
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

RangeCard.propTypes = {
  productRange: PropTypes.object,
};

export default RangeCard;
