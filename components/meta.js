import Head from 'next/head';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DoTEC Co. Ltd.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dotecvalves.kr',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.dotecvalves.kr'}/DoTEC.png`,
  description:
    'Leading valve manufacturer specializing in valve design, production and service for diverse industries.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '189, techno-valley gil, Jillye-myun',
    addressLocality: 'Gimhae',
    addressRegion: 'Gyeongnam',
    addressCountry: 'KR',
  },
  telephone: '+82-55-346-5771',
};

export default function Meta() {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link
        rel='mask-icon'
        href='/favicon/safari-pinned-tab.svg'
        color='#BB1B1B'
      />
      <link rel='shortcut icon' href='/favicon/favicon.ico' />
      <meta name='msapplication-TileColor' content='#BB1B1B' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#BB1B1B' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </Head>
  );
}
