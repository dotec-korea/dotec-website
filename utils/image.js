// Builds an optimized Contentful image URL using their Images API:
// resizes, converts to a modern format, and sets quality — dramatically
// smaller payloads than serving the original asset.
// https://www.contentful.com/developers/docs/references/images-api/
export function cfImage(url, { width, quality = 75, format = 'webp' } = {}) {
  if (!url) return url;
  if (!url.includes('images.ctfassets.net') && !url.includes('ctfassets.net')) {
    return url;
  }

  const params = new URLSearchParams();
  if (width) params.set('w', String(width));
  params.set('q', String(quality));
  params.set('fm', format);

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
}
