import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import Head from 'next/head';

import Transition from '@/components/common/transition/Transition';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tulza-Dev',
  description: "Tulza's personal web portfolio",
  icons: {
    icon: [
      {
        url: '/images/icon.svg',
        href: '/svgs/favicon.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:site_name" content="Tulza-dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tulza-dev" />
        <meta
          property="og:description"
          content="Tulza's personal web portfolio"
        />
        <meta property="og:image" content="assets/image/og-image.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Transition>
          <div className="min-h-dvh overflow-hidden w-dvw">{children}</div>
        </Transition>
      </body>
    </html>
  );
}
