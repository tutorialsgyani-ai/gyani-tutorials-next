import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://gyanitutorialshometuition.com'),
  alternates: { canonical: '/' },
  keywords: [
    'home tuition in Dehradun', 'best home tuition in Dehradun', 'home tuition teacher in Dehradun',
    'home tutors in Dehradun', 'home tuition near me', 'home tuitions near me',
    'home tuition for Class 1 to 5', 'private tutor in Dehradun', 'private tutoring',
    'female home tutor near me', 'home tuition teacher', 'home tuition jobs in Dehradun',
    'guitar tuition in Dehradun', 'online tuition in India', 'home tutor site'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Gyani Tutorials',
    title: 'Gyani Tutorials | Home Tuition in Dehradun & Online Tuition in India',
    description: 'Find personalised home tuition in Dehradun and live online tutoring across India for school subjects, exams and creative classes.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gyani Tutorials | Home Tuition in Dehradun',
    description: 'Personalised home tuition in Dehradun and online tuition across India.'
  },
  robots: { index: true, follow: true },
  title: {
    default: 'Gyani Tutorials | Home Tuition in Dehradun & Online Tuition in India',
    template: '%s | Gyani Tutorials',
  },
  description:
    'Find personalised home tuition in Dehradun and online classes across India. Enquire for school subjects, exam preparation and creative lessons with Gyani Tutorials.',
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Nunito+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
