import Link from 'next/link';

export default function Footer() {
  return (
    <>
<footer><div className="w"><p style={{margin:'0 0 8px'}}><Link href="/">Home</Link> · <Link href="/blog">Blog</Link> · <Link href="/#student">Join as student</Link> · <Link href="/#tutor">Join as tutor</Link></p>© 2026 Gyani Tutorials · Home tuition in Dehradun · Online tuition in India · +91 76687 89504</div></footer>
<a className="wa" href="https://wa.me/917668789504" aria-label="Chat on WhatsApp">WhatsApp us</a>
    </>
  );
}
