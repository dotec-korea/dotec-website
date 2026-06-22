import { fetchGraphQL } from '.';

const HISTORY_GRAPHQL_FIELDS = `
  year
  month
  description 
  order
`;

const FACILITIES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  id
  title
  description
  image {
    url
  }
`;

export async function getHistory() {
  const clients = await fetchGraphQL(
    `query {
      historyRecordsCollection {
        items {
          ${HISTORY_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractHistory(clients);
}

function extractHistory(fetchResponse) {
  return fetchResponse?.data?.historyRecordsCollection?.items;
}

export async function getFacilities() {
  const facilities = await fetchGraphQL(
    `query {
      facilityCollection {
        items {
          ${FACILITIES_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractFacilities(facilities);
}

function extractFacilities(fetchResponse) {
  return fetchResponse?.data?.facilityCollection?.items;
}
