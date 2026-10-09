// Reusable stock-photo component with descriptive alt text and lazy loading.
export default function Photo({ src, alt }) {
  if (!src) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" decoding="async" />;
}
