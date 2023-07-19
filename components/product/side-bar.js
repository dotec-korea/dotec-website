import { kebab } from '../../utils/convert';

const SideBar = ({
  products,
  range,
  setRange,
  productId,
  setProductId,
  setShowCard,
}) => {
  const setRangeAndProduct = (range, id) => {
    setShowCard(false);
    setRange(kebab(range));
    setProductId(id);
  };

  return (
    products && (
      <>
        {products
          .sort((x, y) => x.id - y.id)
          .map((product) => {
            return (
              <div key={product.id} className='mb-6'>
                {product && (
                  <h5
                    className={`font-bold uppercase tracking-wide text-sm mb-3 cursor-pointer ${
                      kebab(product?.title) === range && 'text-blue-700'
                    }`}
                    onClick={() => setRangeAndProduct(product?.title, '')}
                  >
                    {product?.id &&
                      String.fromCharCode(product?.id + 64) + '. '}
                    {product.title}
                  </h5>
                )}
                {product.productCollection.items
                  .sort((x, y) => x.id - y.id)
                  .map((item) => {
                    return (
                      item && (
                        <p
                          key={item.id}
                          className={`text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700 ${
                            item.sys.id === productId ? 'text-blue-700' : ''
                          }`}
                          onClick={() =>
                            setRangeAndProduct(product.title, item.sys.id)
                          }
                        >
                          {product?.id &&
                            String.fromCharCode(product?.id + 64) + '-'}
                          {item?.id && item?.id + '. '}
                          {item?.title}
                        </p>
                      )
                    );
                  })}
              </div>
            );
          })}
      </>
    )
  );
};

export default SideBar;
