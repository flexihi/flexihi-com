import Link from 'next/link';
import Image from 'next/image';
import chartImage from '@/public/home-hero-chart.svg';
import { useTranslations } from 'next-intl';
import { memo, useMemo } from 'react';
import LocaleProps from '@/types/LocaleProps';
import clsx from 'clsx';

// Performance optimizations applied:
// - Memoized components to prevent unnecessary re-renders
// - Optimized Next.js Image with proper sizing and priority loading
// - Semantic HTML structure with accessibility improvements

// Memoized button group component for better performance
const HeroButtons = memo(function HeroButtons({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <div className='flex flex-wrap gap-3 mt-4 sm:mt-2 md:mt-1 justify-center lg:justify-start'>
      <a
        href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Start using FlexiHi platform'
      >
        <button
          className='btn-primary focus-ring min-w-[140px] px-6'
          type='button'
        >
          {t('buttons.start')}
        </button>
      </a>
      <Link
        href='/#demos'
        aria-label='View product demos'
      >
        <button
          className='btn-secondary focus-ring min-w-[140px] px-6'
          type='button'
        >
          {t('buttons.demos')}
        </button>
      </Link>
    </div>
  );
});

function Hero({ locale }: LocaleProps) {
  const t = useTranslations('Hero');

  // Memoize background class calculation
  const backgroundImageClass = useMemo(() => {
    return clsx({
      'absolute start-0 end-0 top-0 bottom-0 bg-no-repeat bg-bottom bg-contain':
        true,
      // TODO:
      // 'bg-[url(/home-hero-bg-ltr.svg)]': locale === 'en',
      // 'bg-[url(/home-hero-bg-rtl.svg)]': locale === 'ar',
    });
  }, []);

  // Memoize subtitle class calculation
  const subtitleClass = useMemo(() => {
    return clsx({
      'text-primary-light text-lg md:text-xl uppercase font-semibold leading-8 md:leading-10':
        true,
      'tracking-widest': locale === 'en',
    });
  }, [locale]);

  return (
    <section
      className='relative w-full flex flex-col items-center min-h-[600px] md:min-h-[700px] lg:min-h-[866px] overflow-x-hidden bg-primary-lightest'
      aria-label='Hero section showcasing FlexiHi business management platform'
    >
      {/* Decorative background elements - hidden on mobile/tablet */}
      <div className='relative w-full hidden lg:flex justify-center'>
        <div className='relative max-w-content w-full'>
          <div
            className='absolute end-[-50px] top-[-50px] w-[406px] h-[406px] bg-accent rounded-full bg-opacity-60'
            aria-hidden='true'
          />
          <div
            className='absolute end-[443px] top-[464px] w-[168px] h-[168px] bg-primary-light rounded-full bg-opacity-60'
            aria-hidden='true'
          />
        </div>
      </div>

      {/* Background blur layer */}
      <div
        className='absolute start-0 end-0 top-0 bottom-0 bg-[url(/hero-bg-blur.svg)] fill-[#f2f7ffb3] backdrop-blur-[50px]'
        aria-hidden='true'
      />

      {/* Locale-specific background */}
      <div className='absolute w-full flex justify-center h-full'>
        <div className='relative max-w-content w-full h-full'>
          <div
            className={backgroundImageClass}
            aria-hidden='true'
          />
        </div>
      </div>

      {/* Main content */}
      <div className='relative w-full max-w-content h-full mt-20 md:mt-32 lg:mt-40'>
        <div className='relative flex flex-col lg:flex-row gap-8 lg:gap-4 justify-between items-center px-4 md:px-6 lg:px-10'>
          <div className='flex flex-col gap-4 flex-1 w-full lg:w-auto text-center lg:text-start'>
            <h2 className={subtitleClass}>{t('subtitle')}</h2>
            <h1 className='text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-snug'>
              {t('title')}
            </h1>
            <p className='text-text-secondary text-base md:text-lg mt-2 leading-7 md:leading-8'>
              {t('description')}
            </p>
            <HeroButtons t={t} />
          </div>

          {/* Responsive chart image */}
          <div className='flex flex-col gap-4 w-full lg:w-auto lg:flex-shrink-0 items-center'>
            <Image
              src={chartImage}
              alt='FlexiHi analytics chart showing business performance metrics'
              priority
              width={700}
              height={525}
              className='object-contain w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0'
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 700px'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Hero);
