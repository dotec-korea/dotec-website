export async function fetchGraphQL(query) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
