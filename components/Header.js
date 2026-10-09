'use client';

import Link from 'next/link';
import { useState } from 'react';

const WHATSAPP = '917668789504';

const links = [
  ['How it works', '/#how'],
  ['Courses', '/#courses'],
  ['Why us', '/#why'],
  ['FAQs', '/#faq'],
  ['Blog', '/blog'],
  ['Join as tutor', '/#tutor'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="w">
        <nav aria-label="Main navigation">
          <Link className="logo" href="/" onClick={closeMenu}>Gyani<i>.</i>Tutorials</Link>
          <ul className="desktopNav">
            {links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}
          </ul>
          <div className="navActions">
            <a className="btn sm navWhatsApp" href={'https://wa.me/' + WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat with Gyani Tutorials on WhatsApp">WhatsApp Us</a>
            <button className="mobileToggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(v => !v)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span></button>
          </div>
        </nav>
        {menuOpen && <div id="mobile-navigation" className="mobileNav">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
          <a href={'https://wa.me/' + WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Chat with us on WhatsApp</a>
        </div>}
      </div>
    </header>
  );
}
