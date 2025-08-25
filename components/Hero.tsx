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
const HeroButtons = memo(function HeroButtons({ t }: { t: (key: string) => string }) {
  return (
    <div className='flex gap-4 mt-1'>
      <a
        href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Start using FlexiHi platform'
      >
        <button
          className='btn-primary focus-ring'
          type='button'
        >
          {t('buttons.start')}
        </button>
      </a>
      <Link href='/#demos' aria-label='View product demos'>
        <button
          className='btn-secondary focus-ring'
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
      'absolute start-0 end-0 top-0 bottom-0 bg-no-repeat bg-bottom bg-contain': true,
      'bg-[url(/home-hero-bg-ltr.svg)]': locale === 'en',
      'bg-[url(/home-hero-bg-rtl.svg)]': locale === 'ar',
    });
  }, [locale]);
  
  // Memoize subtitle class calculation
  const subtitleClass = useMemo(() => {
    return clsx({
      'text-primary-light text-xl uppercase font-semibold leading-10': true,
      'tracking-widest': locale === 'en',
    });
  }, [locale]);

  return (
    <section 
      className='relative w-full flex flex-col items-center min-h-[600px] lg:min-h-[866px] overflow-x-hidden'
      aria-label='Hero section showcasing FlexiHi business management platform'
    >
      {/* Decorative background elements */}
      <div className='relative w-full flex justify-center'>
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
      <div className='relative w-full max-w-content h-full mt-40'>
        <div className='relative flex gap-4 justify-between items-center'>
          <div className='flex flex-col gap-4 flex-1 ps-10'>
            <h2 className={subtitleClass}>
              {t('subtitle')}
            </h2>
            <h1 className='text-primary text-5xl font-bold leading-snug'>
              {t('title')}
            </h1>
            <p className='text-text-secondary text-lg mt-2 leading-8'>
              {t('description')}
            </p>
            <HeroButtons t={t} />
          </div>
          
          {/* Optimized chart image */}
          <div className='flex flex-col gap-4'>
            <Image
              src={chartImage}
              alt='FlexiHi analytics chart showing business performance metrics'
              priority
              width={400}
              height={300}
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 400px'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Hero);
