import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Summary from '../components/home/summary';
import ProductRange from '../components/home/product-range';
import { getClients, getPageAndRange } from '../lib/api/home';
import { getProductRanges } from '../lib/api/products';
import Clients from '../components/home/clients';

export default function Index({ page, range, productRange, clients }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC</title>
        </Head>
        {page && (
          <>
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
                link={page.header.link}
              />
            </section>
            <Summary
              title={page.summary.title}
              summary={page.summary.summary}
              link={page.summary.link}
              image={page.summary.image.url}
            />
            <Clients clients={clients} />
            <ProductRange productRange={productRange} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Home';
  const { page, range } = (await getPageAndRange(name)) ?? [];
  const productRange = (await getProductRanges()) ?? [];
  const clients = (await getClients()) ?? [];

  return {
    props: { page, range, productRange, clients },
  };
}
