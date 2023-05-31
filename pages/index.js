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
          <title>DoTEC</title>
        </Head>
        {page && (
          <Container>
            <section
              className='min-h-screen px-5'
              style={{
                backgroundImage: `url("${page.header.image.url}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
              <Navbar />
              <PageHeader
                text={page.header.text}
                subtext={page.header.subtext}
                link={page.header.link}
              />
            </section>
          </Container>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'Home';
  const page = (await getPage(name, preview)) ?? [];

  return {
    props: { preview, page },
  };
}
