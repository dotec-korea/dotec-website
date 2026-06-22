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
import { cfImage } from '../../utils/image';

export default function Product({ products = [] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [rangeId, setRangeId] = useState('');
  const [productId, setProductId] = useState('');

  // All data is fetched at build time, so selection is pure lookup — no
  // client-side requests.
  const selectedRange = useMemo(
    () => products.find((pr) => pr?.sys?.id === rangeId),
    [products, rangeId]
  );
  const productList = selectedRange?.productCollection?.items ?? [];
  const selectedProduct = productList.find((p) => p?.sys?.id === productId);

  useEffect(() => {
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

  // Warm the browser + Contentful image caches for the current range so that
  // clicking a product swaps the card image instantly instead of waiting a
  // few seconds for the full-size transform to download on click.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    productList.forEach((p) => {
      const url = p?.image?.url;
      if (url) {
        const img = new window.Image();
        img.src = cfImage(url, { width: 800 });
      }
    });
  }, [productList]);

  const selectionKey = productId || rangeId;

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
            />
          </div>
          <div className='w-full lg:w-3/4 min-h-[200px]'>
            <AnimatePresence mode='wait'>
              {selectionKey && (
                <motion.div
                  key={selectionKey}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
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
