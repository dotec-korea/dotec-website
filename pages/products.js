import Layout from '../components/layout';
import { getPageAndRange } from '../lib/api/home';
import { getProducts } from '../lib/api/products';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Product from '../components/product';

export default function Products({ page, range, products }) {
  return (
    <>
      <Layout>
        <Seo
          title='Products'
          path='/products'
          description='Explore DOTEC&apos;s range of industrial valves — engineered for chemical, petrochemical, thermal, oil-field and refinery applications, onshore and offshore.'
        />
        {page && (
          <section
            className='relative px-5'
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
  const { page = null, range = [] } = (await getPageAndRange(name)) ?? {};
  const products = (await getProducts()) ?? [];

  return {
    props: { page, range, products },
    revalidate: 60,
  };
}
