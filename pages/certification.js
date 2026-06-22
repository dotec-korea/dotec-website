import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Certificates from '../components/certificate/certificates';
import { getPageAndRange } from '../lib/api/home';
import { getCertificates } from '../lib/api/certificates';

export default function Certification({ page, range, certificates }) {
  return (
    <>
      <Layout>
        <Seo
          title='Certification'
          path='/certification'
          description='DOTEC Co. Ltd. quality certifications and approvals demonstrating our commitment to international valve manufacturing standards.'
        />
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
              />
            </section>
            <Certificates certificates={certificates} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Certification';
  const { page = null, range = [] } = (await getPageAndRange(name)) ?? {};
  const certificates = (await getCertificates()) ?? [];

  return {
    props: { page, range, certificates },
    revalidate: 60,
  };
}
