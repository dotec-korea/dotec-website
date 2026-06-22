import PropTypes from 'prop-types';

const SideBar = ({
  products,
  rangeId,
  setRangeId,
  productId,
  setProductId,
}) => {
  const setRangeAndProduct = (product, id) => {
    setProductId(id);
    setRangeId(product.sys.id);
  };

  if (!products) return null;

  const sortedProducts = [...products].sort((x, y) => x.id - y.id);

  return (
    <>
      {sortedProducts.map((product) => {
        const sortedItems = [...(product.productCollection?.items ?? [])].sort(
          (x, y) => x.id - y.id
        );

        return (
          <div key={product.id} className='mb-6'>
            <button
              type='button'
              className={`block text-left font-bold uppercase tracking-wide text-sm mb-3 cursor-pointer ${
                product?.sys?.id === rangeId ? 'text-dotec' : ''
              }`}
              onClick={() => setRangeAndProduct(product, null)}
            >
              {product?.id && String.fromCharCode(product?.id + 64) + '. '}
              {product.title}
            </button>
            {sortedItems.map((item) => {
              return (
                item && (
                  <button
                    type='button'
                    key={item.id}
                    className={`text-sm my-1 tracking-wide cursor-pointer flex text-left hover:text-dotec ${
                      item.sys.id === productId ? 'text-dotec' : ''
                    }`}
                    onClick={() => setRangeAndProduct(product, item.sys.id)}
                  >
                    <span className='shrink-0 mr-1'>
                      {product?.id &&
                        String.fromCharCode(product?.id + 64) + '-'}
                      {item?.id && item?.id + '. '}
                    </span>
                    <span>{item?.title}</span>
                  </button>
                )
              );
            })}
          </div>
        );
      })}
    </>
  );
};

SideBar.propTypes = {
  products: PropTypes.array,
  rangeId: PropTypes.string,
  setRangeId: PropTypes.func,
  productId: PropTypes.string,
  setProductId: PropTypes.func,
};

export default SideBar;
