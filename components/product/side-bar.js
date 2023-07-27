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
                    onClick={() => setRangeAndProduct(product?.title, null)}
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
                          className={`text-sm my-1 tracking-wide cursor-pointer flex hover:text-blue-700 ${
                            item.sys.id === productId ? 'text-blue-700' : ''
                          }`}
                          onClick={() =>
                            setRangeAndProduct(product.title, item.sys.id)
                          }
                        >
                          <span className='shrink-0 mr-1'>
                            {product?.id &&
                              String.fromCharCode(product?.id + 64) + '-'}
                            {item?.id && item?.id + '. '}
                          </span>
                          <span>{item?.title}</span>
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
