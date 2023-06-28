import { fetchGraphQL } from '.';

const PAGE_GRAPHQL_FIELDS = `
  header {
    text
    subtext
    link
    image {
      url
    }
  }
  summary {
    title
    summary
    link
    image {
      url
    }
  }
`;

const FACILITIES_GRAPHQL_FIELDS = `
  id
  title
  description
  image {
    url
  }
`;

const CLIENTS_GRAPHQL_FIELDS = `
  title
  order
  image {
    url
  }
`;

const HISTORY_GRAPHQL_FIELDS = `
  year
  month
  description 
  order
`;

export async function getPageAndRange(name) {
  const page = await fetchGraphQL(
    `query {
      pageCollection(where: {name: "${name}"}) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  const range = await fetchGraphQL(
    `query {
      productRangeCollection {
        items {
          title
        }
      }
    }`
  );

  return {
    page: extractPage(page),
    range: extractProductRange(range),
  };
}

function extractPage(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}

function extractProductRange(fetchResponse) {
  return fetchResponse?.data?.productRangeCollection?.items;
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

export async function getClients() {
  const clients = await fetchGraphQL(
    `query {
      clientsCollection {
        items {
          ${CLIENTS_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractClients(clients);
}

function extractClients(fetchResponse) {
  return fetchResponse?.data?.clientsCollection?.items;
}

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
