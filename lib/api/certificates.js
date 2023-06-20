import { fetchGraphQL } from '.';

const CERTIFICATE_GRAPHQL_FIELDS = `
  title
  main
  id
  image {
    url
  }
`;

export async function getCertificates() {
  const certificates = await fetchGraphQL(
    `query {
      certificateCollection {
        items {
          ${CERTIFICATE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractCertificates(certificates);
}

function extractCertificates(fetchResponse) {
  return fetchResponse?.data?.certificateCollection?.items;
}
