const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

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
  image {
    url
  }
`;

const PRODUCT_RANGE_GRAPHQL_FIELDS = `
  title
  image {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

function extractPage(fetchResponse) {
  return fetchResponse?.data?.pageCollection?.items?.[0];
}

function extractFacilities(fetchResponse) {
  return fetchResponse?.data?.facilityCollection?.items;
}

function extractProductRange(fetchResponse) {
  return fetchResponse?.data?.productRangeCollection?.items;
}

export async function getPage(name, preview) {
  const page = await fetchGraphQL(
    `query {
      pageCollection(where: {name: "${name}"}, preview: ${
      preview ? 'true' : 'false'
    }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return extractPage(page);
}

export async function getPageAndFacilities(name, preview) {
  const page = await fetchGraphQL(
    `query {
      pageCollection(where: {name: "${name}"}, preview: ${
      preview ? 'true' : 'false'
    }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const facilities = await fetchGraphQL(
    `query {
      facilityCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${FACILITIES_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    page: extractPage(page),
    facilities: extractFacilities(facilities),
  };
}

export async function getPageProductsAndFacilities(name, preview) {
  const page = await fetchGraphQL(
    `query {
      pageCollection(where: {name: "${name}"}, preview: ${
      preview ? 'true' : 'false'
    }) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const facilities = await fetchGraphQL(
    `query {
      facilityCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${FACILITIES_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  const productRange = await fetchGraphQL(
    `query {
      productRangeCollection(preview: ${preview ? 'true' : 'false'}) {
        items {
          ${PRODUCT_RANGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    page: extractPage(page),
    productRange: extractProductRange(productRange),
    facilities: extractFacilities(facilities),
  };
}
