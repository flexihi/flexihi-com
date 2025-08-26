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

// Memoized AppStoreButton component with responsive sizing
const AppStoreButton = memo<AppStoreButtonProps>(function AppStoreButton({ link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity duration-200 touch-target"
      aria-label={link.ariaLabel}
    >
      <div className="relative h-10 w-32 sm:h-12 sm:w-36 lg:h-14 lg:w-40 xl:h-16 xl:w-48">
        <Image
          src={link.src}
          alt={link.alt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 192px"
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
      className="w-full flex justify-center bg-primary-light text-white overflow-hidden relative"
      role="region"
      aria-label="FlexiHi mobile app download section"
    >
      <div className="max-w-content w-full relative">
        {/* Mobile-first responsive layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 pt-12 sm:pt-16 lg:pt-20 pb-0">
          
          {/* Content section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 text-center lg:text-left lg:flex-1 lg:pr-8 pb-8 lg:pb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
              {t('description')}
            </p>

            {/* App store buttons */}
            <div 
              className="flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-2 sm:mt-4"
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

          {/* Device images section - positioned to touch bottom */}
          <div className="relative lg:flex-1 lg:flex lg:justify-end">
            {/* Mobile: Image touching bottom */}
            <div className="lg:hidden flex justify-center">
              <div className="relative w-64 h-32 sm:w-80 sm:h-40">
                <Image
                  src={tabletAndPhone}
                  alt="FlexiHi mobile application interface displayed on tablet and smartphone devices"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 640px) 256px, 320px"
                />
              </div>
            </div>
            
            {/* Desktop: Large image touching bottom */}
            <div className="hidden lg:block relative w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl h-80 xl:h-80 2xl:h-96">
              <Image
                src={tabletAndPhone}
                alt="FlexiHi mobile application interface displayed on tablet and smartphone devices"
                fill
                className="object-contain object-bottom"
                priority
                sizes="(max-width: 1280px) 500px, (max-width: 1536px) 600px, 700px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Apps);