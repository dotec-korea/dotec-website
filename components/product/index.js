import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SectionSeparator from '../section-separator';
import ProductTab from './product-tab';
import ProductCard from './product-card';
import SideBar from './side-bar';
import { AnimatePresence, motion } from 'framer-motion';
import RangeCard from './range-card';
import { useRouter } from 'next/router';

export default function Product({ products }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [rangeId, setRangeId] = useState('');
  const [productList, setProductList] = useState(['']);
  const [productId, setProductId] = useState('');
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setRangeId(query);

      const { pathname } = router;
      router.push({ pathname }, undefined, { shallow: true });
    } else {
      setRangeId(products[0]?.sys.id);
    }
  }, [products]);

  useEffect(() => {
    if (rangeId) {
      const product = products.filter((pr) => pr?.sys.id === rangeId);

      if (product && product.length > 0) {
        const items = product[0].productCollection.items;
        setProductList(items);

        if (!product[0].description && !productId && items.length > 0) {
          console.log('1: ' + rangeId + ',' + productId);
          setProductId(items[0].sys.id);
        }
      } else {
        setProductId('');
      }
    }

    console.log(rangeId, productId);
  }, [rangeId]);

  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 300);
  }, [productId, rangeId]);

  return (
    <section className='px-5'>
      <div className='mx-auto px-6 md:px-12 lg:px-8 2xl:px-24 py-20 overflow-x-hidden'>
        <div className='w-full flex'>
          <div className='hidden lg:block w-1/4 pb-8'>
            <SideBar
              products={products}
              rangeId={rangeId}
              setRangeId={setRangeId}
              productId={productId}
              setProductId={setProductId}
              setShowCard={setShowCard}
            />
          </div>
          <div className='w-full lg:w-3/4'>
            <AnimatePresence>
              {showCard && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  {productId ? (
                    <ProductCard productId={productId} />
                  ) : (
                    <RangeCard rangeId={rangeId} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='w-full flex'>
          <div className='hidden lg:block w-1/4'></div>
          <div className='w-full lg:w-3/4'>
            <SectionSeparator width={'3/4'} />
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
              {productList.map((item, key) => {
                return (
                  <ProductTab
                    key={key}
                    product={item}
                    productId={productId}
                    setProductId={setProductId}
                    setShowCard={setShowCard}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
