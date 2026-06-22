import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import Facility from '../components/about/facility';
import History from '../components/about/history';
import CeoGreetings from '../components/about/ceo-greetings';
import { useEffect } from 'react';
import { getPageAndRange } from '../lib/api/home';
import { getFacilities, getHistory } from '../lib/api/about';
import { useRouter } from 'next/router';
import QualityPolicy from '../components/about/quality-policy';

export default function About({ page, range, facilities, history }) {
  const router = useRouter();
  const q = router.query.q;

  // Scroll to the requested section. Depends on the query (not just `page`) so
  // it also works when navigating between About sub-sections while already on
  // this page.
  useEffect(() => {
    if (!router.isReady || !q) return;
    const element = document.getElementById(String(q));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    router.replace(router.pathname, undefined, { shallow: true });
  }, [router.isReady, q]);

  return (
    <>
      <Layout>
        <Seo
          title='About Us'
          path='/about'
          description='DOTEC Co. Ltd. — a specialist valve manufacturer with a proven track record in design, production, quality control and worldwide service.'
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
            <CeoGreetings />
            <History history={history} />
            <Facility facilities={facilities} />
            <QualityPolicy />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'About';
  const { page = null, range = [] } = (await getPageAndRange(name)) ?? {};
  const facilities = (await getFacilities()) ?? [];
  const history = (await getHistory()) ?? [];

  return {
    props: { page, range, facilities, history },
    revalidate: 60,
  };
}
