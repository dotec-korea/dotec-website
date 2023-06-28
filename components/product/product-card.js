import { useEffect, useState } from 'react';
import SectionSeparator from '../section-separator';
import Table from './table';
import { getProduct } from '../../lib/api/products';

const ProductCard = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      async function fetchData() {
        const response = await getProduct(productId);
        if (response) setProduct(response);
      }
      fetchData();
    }
  }, [productId]);

  return (
    product && (
      <>
        <div className='w-full p-6 bg-gray-100'>
          <div className='flex'>
            <div className='w-full aspect-square'>
              <img
                src={product?.image?.url}
                alt={product?.title}
                className='object-center object-contain h-full w-full'
              />
            </div>
            <div className='w-full p-8'>
              <h2 className='text-4xl font-bold'>{product?.title}</h2>
              <p className='my-4 uppercase text-blue-700 text-base font-medium'>
                MODEL NO: {product?.modelNumber}
              </p>
              <div className='text-gray-600'>
                <div
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              </div>
            </div>
          </div>
          <SectionSeparator width={'full'} />
          <div className='w-full flex'>
            <Table header={'Class'} body={product?.class} />
            <Table header={'Size'} body={product?.size} />
            <Table header={'Body Material'} body={product?.bodyMaterial} />
            <Table header={'Design'} body={product?.design} />
          </div>
        </div>
        <div className='w-full p-6 bg-gray-100 mt-4'>
          <table className='w-full table-auto'>
            <thead>
              <tr className='text-sm uppercase tracking-wider text-left'>
                <th className='w-1/3 px-1 py-3 text-blue-700'>SPECIFICATION</th>
              </tr>
              <tr className='text-sm text-left'>
                <th className='w-2/3 px-1 py-3'>{product?.specification}</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Wall Thickness</td>
                <td className='w-2/3 p-1'>{product?.wallThickness} </td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Bore Size</td>
                <td className='w-2/3 p-1'>{product?.boreSize}</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Face to Face</td>
                <td className='w-2/3 p-1'>{product?.faceToFace}</td>
              </tr>
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>End Flange</td>
                <td className='w-2/3 p-1'>{product?.endFlange}</td>
              </tr>
              {product?.buttWelding && (
                <tr className='text-sm tracking-wider font-medium text-gray-600'>
                  <td className='w-1/3 p-1 text-black'>Butt Welding</td>
                  <td className='w-2/3 p-1'>{product?.buttWelding}</td>
                </tr>
              )}
              <tr className='text-sm tracking-wider font-medium text-gray-600'>
                <td className='w-1/3 p-1 text-black'>Testing</td>
                <td className='w-2/3 p-1'>{product?.testing}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  );
};

export default ProductCard;
