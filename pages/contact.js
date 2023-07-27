import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact/contact-form';
import MapChart from '../components/contact/map-chart';
import { getPageAndRange } from '../lib/api/home';

export default function Contact({ page, range }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC | Contact Us</title>
        </Head>
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
        <ContactForm />
        <MapChart />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Contact';
  const { page, range } = (await getPageAndRange(name)) ?? [];

  return {
    props: { page, range },
  };
}
