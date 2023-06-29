import Layout from '../components/layout';
import { getPageAndRange } from '../lib/api/home';
import { getProducts } from '../lib/api/products';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Product from '../components/product';

export default function Products({ page, range, products }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC | Products</title>
        </Head>
        {page && (
          <section
            className='relative min-h-[50vh] px-5'
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                center/cover 
                url("${page.header.image.url}")`,
            }}
          >
            <Navbar range={range} />
            <PageHeader
              text={page.header.text}
              subtext={page.header.subtext}
              image={page.header.image}
            />
          </section>
        )}
        <Product products={products} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Products';
  const { page, range } = (await getPageAndRange(name)) ?? [];
  const products = (await getProducts()) ?? [];

  return {
    props: { page, range, products },
  };
}
