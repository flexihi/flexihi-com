import Link from 'next/link';
import Image from 'next/image';
import chartImage from '@/public/home-hero-chart.svg';
import { useTranslations } from 'next-intl';
import LocaleProps from '@/types/LocaleProps';
import clsx from 'clsx';

export default function Hero({ locale }: LocaleProps) {
  const t = useTranslations('Hero');

  return (
    <div className='relative w-full flex flex-col items-center min-h-[600px] lg:min-h-[866px] overflow-x-hidden'>
      <div className='relative w-full flex justify-center'>
        <div className='relative max-w-content w-full'>
          <div className='absolute end-[-50px] top-[-50px] w-[406px] h-[406px] bg-accent rounded-full bg-opacity-60' />
          <div className='absolute end-[443px] top-[464px] w-[168px] h-[168px] bg-primary-light rounded-full bg-opacity-60' />
        </div>
      </div>
      <div className='absolute start-0 end-0 top-0 bottom-0 bg-[url(/hero-bg-blur.svg)] fill-[#f2f7ffb3] backdrop-blur-[50px]' />
      <div className='absolute w-full flex justify-center h-full'>
        <div className='relative max-w-content w-full h-full'>
          <div
            className={clsx({
              'absolute start-0 end-0 top-0 bottom-0 bg-[url(/home-hero-bg.svg)] bg-no-repeat bg-bottom bg-contain':
                true,
              'bg-[url(/home-hero-bg-ltr.svg)]': locale === 'en',
              'bg-[url(/home-hero-bg-rtl.svg)]': locale === 'ar',
            })}
          />
        </div>
      </div>

      <div className='relative w-full max-w-content h-full mt-40'>
        <div className='relative flex gap-4 justify-between items-center'>
          <div className='flex flex-col gap-4 flex-1 ps-10'>
            <h2
              className={clsx({
                'text-primary-light text-xl uppercase font-semibold leading-10':
                  true,
                'tracking-widest': locale === 'en',
              })}
            >
              {t('subtitle')}
            </h2>
            <h1 className='text-primary text-5xl font-bold leading-snug'>
              {t('title')}
            </h1>
            <p className='text-text-secondary text-lg mt-2 leading-8'>
              {t('description')}
            </p>
            <div className='flex gap-4 mt-1'>
              <a
                href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className='btn-primary'
                  type='button'
                >
                  {t('buttons.start')}
                </button>
              </a>
              <Link href='/#demos'>
                <button
                  className='btn-secondary'
                  type='button'
                >
                  {t('buttons.demos')}
                </button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Image
              src={chartImage}
              alt='flexihi chart'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
