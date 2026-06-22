import Head from 'next/head';
import PropTypes from 'prop-types';

const SITE_NAME = 'DoTEC Co. Ltd.';
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dotecvalves.kr';
const DEFAULT_DESCRIPTION =
  'Leading Valve Manufacturer: DOTEC Co. Ltd. – Excellence in Valve Design, Production, and Customer Service for Diverse Industries';

export default function Seo({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | DoTEC` : 'DoTEC';
  const desc = description ?? DEFAULT_DESCRIPTION;
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/DoTEC.png`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name='description' content={desc} />
      <link rel='canonical' href={canonical} />

      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={desc} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={ogImage} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={desc} />
      <meta name='twitter:image' content={ogImage} />
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
};
