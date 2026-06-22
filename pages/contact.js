import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/contact-form';
import MapChart from '../components/contact/map-chart';
import { getPageAndRange } from '../lib/api/home';
import { useState } from 'react';

export default function Contact({ page, range }) {
  const [isHead, setIsHead] = useState(true);
  return (
    <>
      <Layout>
        <Seo
          title='Contact Us'
          path='/contact'
          description='Get in touch with DOTEC Co. Ltd. — head office in South Korea and regional contact for South East Asia, Australia and the Middle East.'
        />
        {page && (
          <section
            className='relative px-5'
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                center/cover 
                url("${page.header.image.url}")`,
            }}
          >
            <Navbar range={range} />
            <PageHeader text={'Contact Us'} />
          </section>
        )}
        <ContactForm isHead={isHead} />
        <MapChart setIsHead={setIsHead} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Contact';
  const { page = null, range = [] } = (await getPageAndRange(name)) ?? {};

  return {
    props: { page, range },
    revalidate: 60,
  };
}
