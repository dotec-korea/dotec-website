import { fetchGraphQL } from '.';

const CATALOGUES_GRAPHQL_FIELDS = `
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
          ${CATALOGUES_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractCatalogues(catalogues);
}

function extractCatalogues(fetchResponse) {
  return fetchResponse?.data?.catalogueCollection?.items;
}
