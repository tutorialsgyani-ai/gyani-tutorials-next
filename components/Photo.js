// Shows a photo only when `src` is provided, e.g. <Photo src="/images/tutor1.jpg" alt="Tutor name" />
export default function Photo({ src, alt }) {
  if (!src) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} />;
}
