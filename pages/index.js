import Container from '../components/container';
import Layout from '../components/layout';
import { getPageAndFacilities, getPageProductsAndFacilities } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Summary from '../components/summary';
import Facility from '../components/facility';
import ProductRange from '../components/product-range';

export default function Index({ preview, page, productRange, facilities }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC</title>
        </Head>
        {page && (
          <>
            <section
              className='min-h-screen px-5'
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                center/cover 
                url("${page.header.image.url}")`,
              }}>
              <Navbar />
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
            <ProductRange productRange={productRange} />
            <Facility facilities={facilities} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'Home';
  const { page, productRange, facilities } =
    (await getPageProductsAndFacilities(name, preview)) ?? [];

  return {
    props: { preview, page, productRange, facilities },
  };
}
