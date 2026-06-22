import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PropTypes from 'prop-types';
import SectionSeparator from '../section-separator';
import ProductTab from './product-tab';
import ProductCard from './product-card';
import SideBar from './side-bar';
import { AnimatePresence, motion } from 'framer-motion';
import RangeCard from './range-card';
import { useRouter } from 'next/router';

export default function Product({ products = [] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [rangeId, setRangeId] = useState('');
  const [productId, setProductId] = useState('');
  const [showCard, setShowCard] = useState(false);

  // All data is fetched at build time, so selection is pure lookup — no
  // client-side requests.
  const selectedRange = useMemo(
    () => products.find((pr) => pr?.sys?.id === rangeId),
    [products, rangeId]
  );
  const productList = selectedRange?.productCollection?.items ?? [];
  const selectedProduct = productList.find((p) => p?.sys?.id === productId);

  useEffect(() => {
    setShowCard(false);
    setProductId('');

    const query = searchParams.get('q');
    if (query) {
      setRangeId(query);

      const { pathname } = router;
      router.push({ pathname }, undefined, { shallow: true });
    } else {
      setRangeId(products[0]?.sys?.id ?? '');
    }
  }, [products]);

  useEffect(() => {
    if (!rangeId) return;

    const range = products.find((pr) => pr?.sys?.id === rangeId);
    const items = range?.productCollection?.items ?? [];

    // For ranges without their own description, jump straight to the first
    // product so the panel isn't empty.
    if (range && !range.description && !productId && items.length > 0) {
      setProductId(items[0].sys.id);
    }
  }, [rangeId]);

  useEffect(() => {
    if (rangeId || productId) {
      const timer = setTimeout(() => setShowCard(true), 300);
      return () => clearTimeout(timer);
    }
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
                    <ProductCard product={selectedProduct} />
                  ) : (
                    <RangeCard productRange={selectedRange} />
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
              {productList.map((item) => {
                return (
                  <ProductTab
                    key={item?.sys?.id ?? item?.id}
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

Product.propTypes = {
  products: PropTypes.array,
};
