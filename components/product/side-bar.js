import { kebab } from '../../utils/convert';

const SideBar = ({ products, range, setRange, productId, setProductId }) => {
  const setRangeAndProduct = (range, id) => {
    setRange(kebab(range));
    setProductId(id);
  };

  return (
    products && (
      <>
        {products.map((product, i) => {
          return (
            <div key={i} className='mb-6'>
              {product && (
                <h5
                  className={`font-bold uppercase tracking-wide text-sm mb-3 cursor-pointer ${
                    kebab(product?.title) === range && 'text-blue-700'
                  }`}
                  onClick={() => setRangeAndProduct(product?.title, '')}>
                  {product.title}
                </h5>
              )}
              {product.productCollection.items.map((item, j) => {
                return (
                  item && (
                    <p
                      key={j}
                      className={`text-sm my-1 tracking-wide cursor-pointer hover:text-blue-700 ${
                        item.sys.id === productId ? 'text-blue-700' : ''
                      }`}
                      onClick={() =>
                        setRangeAndProduct(product.title, item.sys.id)
                      }>
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
