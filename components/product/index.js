import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionSeparator from '../section-separator';
import ProductTab from './product-tab';
import ProductCard from './product-card';
import SideBar from './side-bar';
import { kebab } from '../../utils/convert';

export default function Product({ products }) {
  const searchParams = useSearchParams();

  const [range, setRange] = useState('');
  const [productList, setProductList] = useState(['']);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setRange(query);
    } else {
      setRange(kebab(products[0]?.title));
    }
  }, [products]);

  useEffect(() => {
    if (range) {
      const product = products.filter(
        (product) => kebab(product?.title) === range
      );

      if (product && product.length > 0) {
        const items = product[0].productCollection.items;
        setProductList(items);

        if (!productId && items.length > 0) {
          setProductId(items[0].sys.id);
        }
      } else {
        setProductId('');
      }
    }
  }, [range]);

  return (
    <section className='py-20 m-auto px-6 md:px-12 lg:px-12 mx-auto max-w-7xl'>
      <div className='w-full flex'>
        <div className='w-1/4'>
          <SideBar
            products={products}
            range={range}
            setRange={setRange}
            productId={productId}
            setProductId={setProductId}
          />
        </div>
        <div className='w-3/4'>
          <div className='grid grid-cols-3 gap-5'>
            {productList.map((item, key) => {
              return (
                <ProductTab
                  key={key}
                  product={item}
                  productId={productId}
                  setProductId={setProductId}
                />
              );
            })}
          </div>
          {productId && (
            <>
              <SectionSeparator width={'3/4'} />
              <ProductCard productId={productId} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
