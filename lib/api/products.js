import { fetchGraphQL } from '.';

const PRODUCT_RANGE_GRAPHQL_FIELDS = `
  id
  title
  image {
    url
  }
`;

const PRODUCTS_GRAPHQL_FIELDS = `
  id
  title
  image {
    url
  }
  productCollection {
    items {
      id
      title
      sys {
        id
      }
    }
  }
`;

export async function getProductRange() {
  const productRange = await fetchGraphQL(
    `query {
      productRangeCollection {
        items {
          ${PRODUCT_RANGE_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractProductRange(productRange);
}

export async function getProducts() {
  const products = await fetchGraphQL(
    `query {
      productRangeCollection {
        items {
          ${PRODUCTS_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractProductRange(products);
}

function extractProductRange(fetchResponse) {
  return fetchResponse?.data?.productRangeCollection?.items;
}

export async function getProduct(id) {
  const product = await fetchGraphQL(
    `query {
      product(id: "${id}") {
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
      }
    }`
  );

  return extractProduct(product);
}

export async function getProductImage(id) {
  const product = await fetchGraphQL(
    `query {
      product(id: "${id}") {
        image {
          url
        }
      }
    }`
  );

  return extractProduct(product);
}

function extractProduct(fetchResponse) {
  return fetchResponse?.data?.product;
}
