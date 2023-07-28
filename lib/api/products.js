import { fetchGraphQL } from '.';

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

const PRODUCTS_GRAPHQL_FIELDS = `
  sys {
    id
  }
  id
  title
  description
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

  return extractProductRanges(products);
}

function extractProductRanges(fetchResponse) {
  return fetchResponse?.data?.productRangeCollection?.items;
}

export async function getProduct(id) {
  const product = await fetchGraphQL(
    `query {
      product(id: "${id}") {
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

export async function getProductRange(id) {
  const productRange = await fetchGraphQL(
    `query {
      productRange(id: "${id}") {
        id
        title
        description
        tableHeader
        tablesCollection {
          items {
            url
          }
        }
        image {
          url
        }
      }
    }`
  );

  return extractProductRange(productRange);
}

function extractProductRange(fetchResponse) {
  return fetchResponse?.data?.productRange;
}
