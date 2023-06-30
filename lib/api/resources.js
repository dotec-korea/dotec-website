import { fetchGraphQL } from '.';

const GRAPHQL_FIELDS = `
  title
  file {
    url
  }
`;

export async function getCatalogues() {
  const catalogues = await fetchGraphQL(
    `query {
      catalogueCollection {
        items {
          ${GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractCatalogues(catalogues);
}

function extractCatalogues(fetchResponse) {
  return fetchResponse?.data?.catalogueCollection?.items;
}

export async function getInstallation() {
  const installations = await fetchGraphQL(
    `query {
      installationCollection {
        items {
          ${GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractInstallation(installations);
}

function extractInstallation(fetchResponse) {
  return fetchResponse?.data?.installationCollection?.items;
}
