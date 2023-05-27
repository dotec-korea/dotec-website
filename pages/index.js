import Container from '../components/container';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import HomeHero from '../components/home-hero';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>DoTEC</title>
        </Head>
        <Container>
          <HomeHero />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
