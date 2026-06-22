import PropTypes from 'prop-types';
import { cfImage } from '../../utils/image';

const ProductTab = ({ product, productId, setProductId, setShowCard }) => {
  const image = product?.image?.url;

  const setProduct = () => {
    setShowCard(false);
    setProductId(product.sys.id);
  };

  return (
    product &&
    image && (
      <button
        type='button'
        className={`w-full flex bg-gray-100 p-1 lg:p-4 border-2 cursor-pointer text-left ${
          product.sys.id === productId ? 'border-dotec' : 'border-transparent'
        }`}
        onClick={setProduct}
      >
        <div className='w-1/2 px-3'>
          <div className='w-full h-full flex justify-center items-center'>
            <img
              src={cfImage(image, { width: 300 })}
              alt={product?.title ?? ''}
              loading='lazy'
              decoding='async'
              className='object-center object-contain h-full w-full'
            />
          </div>
        </div>
        <div className='w-1/2 text-xs lg:text-lg font-semibold flex items-center'>
          {product?.title}
        </div>
      </button>
    )
  );
};

ProductTab.propTypes = {
  product: PropTypes.object,
  productId: PropTypes.string,
  setProductId: PropTypes.func,
  setShowCard: PropTypes.func,
};

export default ProductTab;
