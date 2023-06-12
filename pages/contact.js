import Container from '../components/container';
import Layout from '../components/layout';
import { getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact-form';
import Map from '../components/map';

export default function Contact({ preview, page }) {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC | Contact Us</title>
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
            <PageHeader text={'Contact Us'} />
          </section>
        )}
        <ContactForm />
        <Map />
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
