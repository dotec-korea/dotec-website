import { fetchGraphQL } from '.';

const HISTORY_GRAPHQL_FIELDS = `
  year
  month
  description 
  order
`;

const FACILITIES_GRAPHQL_FIELDS = `
  id
  title
  description
  image {
    url
  }
`;

const PROCESS_GRAPHQL_FIELDS = `
  title
  imagesCollection {
    items {
      url
    }
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

export async function getProcess(title) {
  const process = await fetchGraphQL(
    `query {
      processCollection(where: {title: "${title}"}) {
        items {
          ${PROCESS_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractProcess(process);
}

function extractProcess(fetchResponse) {
  return fetchResponse?.data?.processCollection?.items;
}
