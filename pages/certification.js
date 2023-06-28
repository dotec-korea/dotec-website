import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Quote from '../components/certificate/quote';
import Certificates from '../components/certificate/certificates';
import { getPageAndRange } from '../lib/api/page';
import { getCertificates } from '../lib/api/certificates';

export default function Certification({ page, range, certificates }) {
  return (
    <>
      <Layout>
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
              }}
            >
              <Navbar range={range} />
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

export async function getStaticProps() {
  const name = 'Certification';
  const { page, range } = (await getPageAndRange(name)) ?? [];
  const certificates = (await getCertificates()) ?? [];

  return {
    props: { page, range, certificates },
  };
}
