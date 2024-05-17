const SideBar = ({
  products,
  rangeId,
  setRangeId,
  productId,
  setProductId,
  setShowCard,
}) => {
  const setRangeAndProduct = (product, id) => {
    setShowCard(false);

    setProductId(id);
    setRangeId(product.sys.id);
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
                      product?.sys?.id === rangeId && 'text-dotec'
                    }`}
                    onClick={() => setRangeAndProduct(product, null)}
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
                          className={`text-sm my-1 tracking-wide cursor-pointer flex hover:text-dotec ${
                            item.sys.id === productId ? 'text-dotec' : ''
                          }`}
                          onClick={() =>
                            setRangeAndProduct(product, item.sys.id)
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
