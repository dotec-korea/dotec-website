import Container from '../components/container';
import Layout from '../components/layout';
import { getPageAndFacilities } from '../lib/api';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Summary from '../components/summary';
import Facility from '../components/facility';
import CeoGreetings from '../components/ceo-greetings';

export default function About({ preview, page, facilities }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>DoTEC | About Us</title>
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
            <Summary
              title={page.summary.title}
              summary={page.summary.summary}
              link={page.summary.link}
              image={page.summary.image.url}
            />
            <CeoGreetings />
            <Facility facilities={facilities} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const name = 'About';
  const { page, facilities } =
    (await getPageAndFacilities(name, preview)) ?? [];

  return {
    props: { preview, page, facilities },
  };
}
