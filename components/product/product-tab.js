import { useEffect, useState } from 'react';
import { getProductImage } from '../../lib/api/products';

const ProductTab = ({ product, productId, setProductId, setShowCard }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (product) {
      async function fetchData() {
        const response = await getProductImage(product.sys.id);
        if (response) setImage(response.image.url ?? '');
      }
      fetchData();
    }
  }, [product]);

  const setProduct = () => {
    setShowCard(false);
    setProductId(product.sys.id);
  };

  return (
    product &&
    image && (
      <div
        className={`w-full flex bg-gray-100 p-4 border-2 cursor-pointer ${
          product.sys.id === productId
            ? 'border-blue-700'
            : 'border-transparent'
        }`}
        onClick={setProduct}
      >
        <div className='w-1/2 px-3'>
          <div className='w-full'>
            {image && (
              <img
                src={image}
                alt={product?.title}
                className='object-center object-contain h-full w-full'
              />
            )}
          </div>
        </div>
        <div className='w-1/2 text-lg font-semibold flex items-center'>
          {product?.title}
        </div>
      </div>
    )
  );
};

export default ProductTab;
