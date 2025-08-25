import type { Metadata } from 'next';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import NavBar from '@/layouts/NavBar';
import Footer from '@/layouts/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import getAppLocale from '@/utils/getAppLocale';

export const metadata: Metadata = {
  title: 'FlexiHi - Complete Business Management Solution',
  description:
    'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
  keywords: [
    'business management',
    'productivity',
    'team collaboration',
    'workflow',
    'FlexiHi',
  ],
  authors: [{ name: 'FlexiHi Team' }],
  creator: 'FlexiHi',
  publisher: 'FlexiHi',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
    url: 'https://flexihi.com',
    siteName: 'FlexiHi',
    title: 'FlexiHi - Complete Business Management Solution',
    description:
      'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
    images: [
      {
        url: 'https://flexihi.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlexiHi - Business Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@flexihi',
    creator: '@flexihi',
    title: 'FlexiHi - Complete Business Management Solution',
    description:
      'From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.',
    images: ['https://flexihi.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://flexihi.com',
    languages: {
      en: 'https://flexihi.com',
      ar: 'https://flexihi.com/ar',
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

const Bukra = localFont({
  variable: '--font-bukra',
  src: [
    // Commented out unused font weights for better performance
    // Uncomment as needed when designing new components
    // {
    //   path: "../public/fonts/29LT-Bukra-Thin.otf",
    //   weight: "100",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Extra-Light.otf",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    {
      path: '../public/fonts/29LT-Bukra-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Semi-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/29LT-Bukra-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // {
    //   path: "../public/fonts/29LT-Bukra-Extra-Bold.otf",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Black.otf",
    //   weight: "900",
    //   style: "normal",
    // },
  ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getAppLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={Bukra.variable}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className='flex min-h-screen flex-col'>
            <NavBar locale={locale} />
            <main className='flex-1'>{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
