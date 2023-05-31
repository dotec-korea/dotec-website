import Container from '../components/container';
import Layout from '../components/layout';
import { getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';

export default function Index({ preview, page }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC | Products</title>
        </Head>
        {page && (
          <Container>
            <section
              className='h-96 px-5'
              style={{
                backgroundImage: `url("${page.header.image.url}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <Navbar />
              <PageHeader
                text={page.header.text}
                subtext={page.header.subtext}
                image={page.header.image}
              />
            </section>
          </Container>
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
