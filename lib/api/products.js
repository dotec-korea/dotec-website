import { fetchGraphQL } from '.';

// Lightweight fields for navigation / home product-range grid.
const PRODUCT_RANGE_GRAPHQL_FIELDS = `
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

// Full detail for a single product (consumed by <ProductCard />).
const PRODUCT_DETAIL_GRAPHQL_FIELDS = `
  sys {
    id
  }
  id
  title
  modelNumber
  description
  class
  size
  bodyMaterial
  design
  specification
  wallThickness
  boreSize
  faceToFace
  endFlange
  testing
  image {
    url
  }
`;

export async function getProductRanges() {
  const productRange = await fetchGraphQL(
    `query {
      productRangeCollection {
        items {
          ${PRODUCT_RANGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractProductRanges(productRange);
}

// Fetches everything the /products page needs at build time via TWO bounded
// queries instead of dozens of client-side requests:
//   1. ranges + their (light) product list — for the sidebar, tabs, range cards
//   2. all product detail, flat — merged in so each product carries full detail
// Splitting avoids Contentful's query-complexity limit, which charges for the
// declared `limit` of every nested collection (so deep nesting is expensive).
export async function getProducts() {
  const [rangesResponse, detailResponse] = await Promise.all([
    fetchGraphQL(
      `query {
        productRangeCollection(limit: 50) {
          items {
            sys {
              id
            }
            id
            title
            description
            tableHeader
            image {
              url
            }
            tablesCollection(limit: 20) {
              items {
                url
              }
            }
            productCollection(limit: 50) {
              items {
                sys {
                  id
                }
                id
                title
                image {
                  url
                }
              }
            }
          }
        }
      }`
    ),
    fetchGraphQL(
      `query {
        productCollection(limit: 200) {
          items {
            ${PRODUCT_DETAIL_GRAPHQL_FIELDS}
          }
        }
      }`
    ),
  ]);

  const ranges = extractProductRanges(rangesResponse) ?? [];
  const details = detailResponse?.data?.productCollection?.items ?? [];
  const detailById = new Map(
    details.filter((d) => d?.sys?.id).map((d) => [d.sys.id, d])
  );

  // Merge full detail into each range's product list so selecting a product is
  // a pure lookup on the client (no fetch).
  return ranges.map((range) => ({
    ...range,
    productCollection: {
      ...range.productCollection,
      items: (range.productCollection?.items ?? []).map((item) => ({
        ...item,
        ...(detailById.get(item?.sys?.id) ?? {}),
      })),
    },
  }));
}

function extractProductRanges(fetchResponse) {
  return fetchResponse?.data?.productRangeCollection?.items;
}
