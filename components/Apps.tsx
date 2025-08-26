'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { APP_LINKS } from '@/layouts/constants';
import appStoreButton from '@/public/apps-app-store-button.svg';
import googlePlayButton from '@/public/apps-google-play-button.svg';
import tabletAndPhone from '@/public/tablet-and-phone.png';

// TypeScript interfaces
interface AppStoreLink {
  href: string;
  src: string | import('next/image').StaticImageData;
  alt: string;
  ariaLabel: string;
}

interface AppStoreButtonProps {
  link: AppStoreLink;
}

// Static app store links data
const APP_STORE_LINKS = {
  appStore: {
    href: APP_LINKS.appStore,
    src: appStoreButton,
    alt: 'Download on the App Store',
    ariaLabel: 'Download FlexiHi from the App Store'
  },
  googlePlay: {
    href: APP_LINKS.googlePlay,
    src: googlePlayButton,
    alt: 'Get it on Google Play',
    ariaLabel: 'Download FlexiHi from Google Play Store'
  }
} as const;

// Memoized AppStoreButton component
const AppStoreButton = memo<AppStoreButtonProps>(function AppStoreButton({ link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity duration-200"
      aria-label={link.ariaLabel}
    >
      <div className="relative h-16 w-48">
        <Image
          src={link.src}
          alt={link.alt}
          fill
          className="object-contain"
          sizes="192px"
          loading="lazy"
        />
      </div>
    </a>
  );
});

function Apps() {
  const t = useTranslations('Apps');

  // Memoized store links array
  const storeLinks = useMemo<AppStoreLink[]>(() => [
    APP_STORE_LINKS.appStore,
    APP_STORE_LINKS.googlePlay
  ], []);

  return (
    <section 
      className="w-full flex justify-center bg-primary-light text-white overflow-x-hidden"
      role="region"
      aria-label="FlexiHi mobile app download section"
    >
      <div className="max-w-content w-full flex justify-between">
        <div className="flex flex-col gap-8 ps-20 py-20">
          <h5 className="text-3xl font-bold leading-9">{t('title')}</h5>
          <p className="leading-8">{t('description')}</p>

          <div 
            className="flex items-center gap-4"
            role="list"
            aria-label="App store download options"
          >
            {storeLinks.map((link, index) => (
              <div key={index} role="listitem">
                <AppStoreButton link={link} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-4/5 h-full">
          <Image
            src={tabletAndPhone}
            alt="FlexiHi mobile application interface displayed on tablet and smartphone devices"
            className="object-contain absolute bottom-0"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Apps);