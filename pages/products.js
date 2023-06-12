import Container from '../components/container';
import Layout from '../components/layout';
import { getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';

export default function Products({ preview, page }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC | Products</title>
        </Head>
        {page && (
          <section
            className='px-5'
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                center/cover 
                url("${page.header.image.url}")`,
            }}>
            <Navbar />
            <PageHeader
              text={page.header.text}
              subtext={page.header.subtext}
              image={page.header.image}
            />
          </section>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'Products';
  const page = (await getPage(name, preview)) ?? [];

  return {
    props: { preview, page },
  };
}
