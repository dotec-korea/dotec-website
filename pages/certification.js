import Container from '../components/container';
import Layout from '../components/layout';
import { getCertificates, getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Quote from '../components/quote';
import Certificates from '../components/certificates';

export default function Certification({ preview, page, certificates }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC | Certification</title>
        </Head>
        {page && (
          <>
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
            <Quote />
            <Certificates certificates={certificates} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'Certification';
  const page = (await getPage(name, preview)) ?? [];
  const certificates = (await getCertificates(preview)) ?? [];

  return {
    props: { preview, page, certificates },
  };
}
