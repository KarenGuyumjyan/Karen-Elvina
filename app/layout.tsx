import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Great_Vibes, Jost } from 'next/font/google';
import './globals.css';
import { wedding } from '@/lib/data';
import { LanguageProvider } from '@/lib/i18n';
import { siteUrl } from '@/lib/site';
import localFont from 'next/font/local';

const romanuni = localFont({
  src: './fonts/romanuni.ttf',
  display: 'swap',
  variable: '--font-romanuni',
});

const SHK_Dzeragir = localFont({
  src: './fonts/SHK_Dzeragir.otf',
  display: 'swap',
  variable: '--font-SHK_Dzeragir',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

const coupleTitle = 'Կարեն & Էլվինա';
const description = `Միացե՛ք մեզ՝ նշելու Կարենի և Էլվինայի հարսանիքը սեպտեմբերի 5-ին։ Join us in celebrating the wedding of ${wedding.groom.name} and ${wedding.bride.name} on ${wedding.dateLabel}.`;
const ogImage = '/images/couple/heroImage.JPG';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${coupleTitle}`,
    template: `%s — ${coupleTitle}`,
  },
  description,
  applicationName: `${coupleTitle} Wedding`,
  keywords: [
    'wedding',
    'wedding invitation',
    'Karen',
    'Elvina',
    'Կարեն',
    'Էլվինա',
    'հարսանիք',
    'հրավեր',
    'RSVP',
    wedding.dateLabel,
  ],
  authors: [{ name: coupleTitle }],
  creator: coupleTitle,
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: '/',
    languages: { en: '/', hy: '/' },
  },
  openGraph: {
    type: 'website',
    siteName: `${coupleTitle} Wedding`,
    title: `${coupleTitle} — Wedding Invitation`,
    description,
    url: siteUrl,
    locale: 'hy_AM',
    alternateLocale: ['en_US'],
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1500,
        alt: `${coupleTitle} — ${wedding.dateLabel}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${coupleTitle} — Wedding Invitation`,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: '#6f6155',
  colorScheme: 'light',
};

// Structured data so search engines understand this is a wedding event.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: `${coupleTitle} — Wedding`,
  description,
  startDate: wedding.dateISO,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [`${siteUrl}${ogImage}`],
  organizer: { '@type': 'Person', name: coupleTitle },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='hy'
      className={`${cormorant.variable} ${greatVibes.variable} ${jost.variable} ${SHK_Dzeragir.variable} ${romanuni.variable}`}
    >
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
