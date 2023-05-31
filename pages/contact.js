import Container from '../components/container';
import Layout from '../components/layout';
import { getPage } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import ContactForm from '../components/contact-form';

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC | Contact Us</title>
        </Head>
        <Container>
          <section className='bg-gray-200 px-5'>
            <Navbar />
            <ContactForm />
          </section>
        </Container>
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
