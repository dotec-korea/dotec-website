import Layout from '../components/layout';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import Navbar from '../components/navbar';
import { getPageAndRange } from '../lib/api/home';
import Catalogues from '../components/resources/catalogues';
import { getCatalogues, getInstallation } from '../lib/api/resources';
import Installations from '../components/resources/installations';

export default function Resources({ page, range, catalogues, installations }) {
  return (
    <>
      <Layout>
        <Seo
          title='Resources'
          path='/resources'
          description='Download DOTEC product catalogues and installation references for our full range of industrial valves.'
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
            <Catalogues catalogues={catalogues} />
            <Installations installations={installations} />
          </>
        )}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const name = 'Resources';
  const { page = null, range = [] } = (await getPageAndRange(name)) ?? {};
  const catalogues = (await getCatalogues()) ?? [];
  const installations = (await getInstallation()) ?? [];

  return {
    props: { page, range, catalogues, installations },
    revalidate: 60,
  };
}
