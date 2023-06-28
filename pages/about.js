import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Facility from '../components/home/facility';
import CeoGreetings from '../components/about/ceo-greetings';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getFacilities, getPageAndRange } from '../lib/api/page';
import BriefHistory from '../components/about/history';
import Manufacturing from '../components/about/manufacturing';

export default function About({ page, range, facilities }) {
  const searchParams = useSearchParams();
  const { selectedProcess, setProcess } = useState('casting');

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      const element = document.getElementById(query);

      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);

  return (
    <>
      <Layout>
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
              }}
            >
              <Navbar range={range} />
              <PageHeader
                text={page.header.text}
                subtext={page.header.subtext}
                image={page.header.image}
              />
            </section>
            <CeoGreetings />
            <BriefHistory />
            <Facility facilities={facilities} />
            <Manufacturing
              selectedProcess={selectedProcess}
              setProcess={(x) => setProcess(x)}
            />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'About';
  const { page, range } = (await getPageAndRange(name)) ?? [];
  const facilities = (await getFacilities()) ?? [];

  return {
    props: { page, range, facilities },
  };
}
