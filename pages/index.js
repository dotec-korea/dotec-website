import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Summary from '../components/home/summary';
import ProductRange from '../components/home/product-range';
import { getFacilities, getPageAndRange } from '../lib/api/page';
import { getProductRange } from '../lib/api/products';
import ScrollDown from '../components/home/scroll-down';
import Clients from '../components/home/clients';

export default function Index({ page, range, productRange, clientLogos }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC</title>
        </Head>
        {page && (
          <>
            <section
              className='relative min-h-screen px-5'
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
              <ScrollDown />
            </section>
            <Summary
              title={page.summary.title}
              summary={page.summary.summary}
              link={page.summary.link}
              image={page.summary.image.url}
            />
            <Clients clientLogos={clientLogos} />
            <ProductRange productRange={productRange} />
            {/* <Facility facilities={facilities} /> */}
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Home';
  const { page, range } = (await getPageAndRange(name)) ?? [];
  const productRange = (await getProductRange()) ?? [];
  const facilities = (await getFacilities()) ?? [];

  return {
    props: { page, range, productRange, facilities },
  };
}
