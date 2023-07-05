import Layout from '../components/layout';
import Head from 'next/head';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Facility from '../components/about/facility';
import History from '../components/about/history';
import CeoGreetings from '../components/about/ceo-greetings';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPageAndRange } from '../lib/api/home';
import { getFacilities, getHistory } from '../lib/api/about';
import Manufacturing from '../components/about/manufacturing';

export default function About({ page, range, facilities, history }) {
  const searchParams = useSearchParams();

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
              className='relative min-h-[50vh] px-5'
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
            <History history={history} />
            <Facility facilities={facilities} />
            <Manufacturing />
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
  const history = (await getHistory()) ?? [];

  return {
    props: { page, range, facilities, history },
  };
}
