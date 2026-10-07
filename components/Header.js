import Link from 'next/link';

const WHATSAPP = '917668789504';

export default function Header() {
  return (
<header><div className="w"><nav>
<Link className="logo" href="/">Gyani<i>.</i>Tutorials</Link>
<ul><li><Link href="/#how">How it works</Link></li><li><Link href="/#courses">Courses</Link></li><li><Link href="/#tutors">Tutors</Link></li><li><Link href="/#why">Why us</Link></li><li><Link href="/blog">Blog</Link></li><li><Link href="/#tutor">Join as tutor</Link></li></ul>
<a className="btn sm" href={'https://wa.me/' + WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat with Gyani Tutorials on WhatsApp">WhatsApp Us</a>
</nav></div></header>
  );
}
