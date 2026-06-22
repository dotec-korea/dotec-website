import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import SectionSeparator from '../section-separator';
import Table from './table';
import { cfImage } from '../../utils/image';

const ProductCard = ({ product }) => {
  if (!product?.sys?.id) return null;

  // CMS-authored HTML — sanitize before injecting to prevent stored XSS.
  // This component only renders client-side, so the browser-native (non-jsdom)
  // build of DOMPurify is used, which bundles cleanly in serverless runtimes.
  const description = DOMPurify.sanitize(product?.description ?? '');
  const specification = DOMPurify.sanitize(product?.specification ?? '');

  return (
    <>
      <div className='w-full p-6 bg-gray-100'>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full aspect-square'>
            {product?.image?.url && (
              <img
                key={product.sys.id}
                src={cfImage(product.image.url, { width: 800 })}
                alt={product?.title ?? ''}
                decoding='async'
                className={`object-center object-contain h-full w-full ${
                  [1, 2].includes(product?.id) ? 'p-12' : 'p-20'
                }`}
              />
            )}
          </div>
          <div className='w-full lg:p-8'>
            {product?.title && (
              <h2 className='text-base lg:text-2xl font-bold'>
                {product.title}
              </h2>
            )}
            {product?.modelNumber && (
              <p className='my-4 uppercase text-dotec text-xs lg:text-base font-semibold'>
                MODEL NO: {product.modelNumber}
              </p>
            )}
            <div className='text-gray-600 text-xs lg:text-base'>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <br />
              {product?.design && (
                <div>
                  <span className='text-xs lg:text-sm uppercase font-semibold'>
                    Design:{' '}
                  </span>
                  {product.design?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        className='text-xs lg:text-sm tracking-wider text-gray-600'
                      >
                        {item}
                        {index + 1 !== product.design.length && (
                          <span className='text-dotec font-bold'>{' | '}</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        {product?.specification && <SectionSeparator width={'full'} />}
        <div className='w-full'>
          <div className='text-xs lg:text-sm uppercase tracking-wider text-left font-bold'>
            <div className='w-full px-1 py-3 text-dotec'>
              {product?.specification && <>SPECIFICATION</>}
              {product?.specification && (
                <div className='text-black'>
                  <div dangerouslySetInnerHTML={{ __html: specification }} />
                </div>
              )}
            </div>
          </div>
          <table className='w-full table-auto'>
            <tbody className='w-full'>
              {product?.wallThickness && (
                <tr className='w-full text-xs lg:text-sm tracking-wider font-semibold text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>Wall Thickness</td>
                  <td className='w-2/3 p-1'>{product?.wallThickness}</td>
                </tr>
              )}
              {product?.boreSize && (
                <tr className='w-full text-xs lg:text-sm tracking-wider font-semibold text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>Bore Size</td>
                  <td className='w-2/3 p-1'>{product?.boreSize}</td>
                </tr>
              )}
              {product?.faceToFace && (
                <tr className='w-full text-xs lg:text-sm tracking-wider font-semibold text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>Face to Face</td>
                  <td className='w-2/3 p-1'>{product?.faceToFace}</td>
                </tr>
              )}
              {product?.endFlange && (
                <tr className='w-full text-xs lg:text-sm tracking-wider font-semibold text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>End Flange</td>
                  <td className='w-2/3 p-1'>{product?.endFlange}</td>
                </tr>
              )}
              {product?.testing && (
                <tr className='w-full text-xs lg:text-sm tracking-wider font-semibold text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>Testing</td>
                  <td className='w-2/3 p-1'>{product?.testing}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {(product?.class || product?.size || product?.bodyMaterial) && (
        <div className='w-full p-6 bg-gray-100 mt-4 flex'>
          <Table header={'Class'} body={product?.class} />
          <Table header={'Size'} body={product?.size} />
          <Table header={'Body Material'} body={product?.bodyMaterial} />
        </div>
      )}
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
