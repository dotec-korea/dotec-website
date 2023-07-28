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

const CLIENTS_GRAPHQL_FIELDS = `
  title
  order
  image {
    url
  }
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
          sys {
            id
          }
          id
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
