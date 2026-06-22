const SPACE_ID =
  process.env.CONTENTFUL_SPACE_ID ??
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN =
  process.env.CONTENTFUL_ACCESS_TOKEN ??
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const isConfigured = Boolean(SPACE_ID && ACCESS_TOKEN);

let warnedMissingCredentials = false;

/**
 * Executes a Contentful GraphQL query.
 *
 * - If credentials are not configured, returns an empty payload so the site
 *   still builds/renders (with empty content) instead of crashing.
 * - If credentials ARE configured but the request fails, it throws so that a
 *   broken CMS surfaces loudly rather than silently shipping blank pages.
 */
export async function fetchGraphQL(query) {
  if (!isConfigured) {
    if (!warnedMissingCredentials) {
      console.warn(
        '[contentful] CONTENTFUL_SPACE_ID / CONTENTFUL_ACCESS_TOKEN are not set — rendering with empty content.'
      );
      warnedMissingCredentials = true;
    }
    return { data: null };
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Contentful request failed: ${response.status} ${response.statusText}`
    );
  }

  const body = await response.json();

  if (body.errors?.length) {
    throw new Error(
      `Contentful GraphQL error: ${body.errors.map((e) => e.message).join('; ')}`
    );
  }

  return body;
}
