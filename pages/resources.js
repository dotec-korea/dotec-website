import Container from '../components/container';
import Layout from '../components/layout';
import { getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Quote from '../components/quote';

export default function Resources({ preview, page }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC | Resources</title>
        </Head>
        {page && (
          <Container>
            <section
              className='h-96 px-5'
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
            <Quote />
          </Container>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'Resources';
  const page = (await getPage(name, preview)) ?? [];

  return {
    props: { preview, page },
  };
}