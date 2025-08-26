import { Suspense, lazy } from 'react';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import getAppLocale from '@/utils/getAppLocale';

const Services = lazy(() => import('@/components/Services'));
const Demos = lazy(() => import('@/components/Demos'));
const Pricing = lazy(() => import('@/components/Pricing'));
const FAQs = lazy(() => import('@/components/FAQs'));
const Contact = lazy(() => import('@/components/Contact'));
const Apps = lazy(() => import('@/components/Apps'));

export default async function Home() {
  const locale = await getAppLocale();

  return (
    <>
      <Hero locale={locale} />
      <Features />
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Services />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Demos />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Pricing />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <FAQs locale={locale} />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Contact />
      </Suspense>
      <Suspense
        fallback={<div className='w-full h-32 bg-gray-50 animate-pulse' />}
      >
        <Apps />
      </Suspense>
    </>
  );
}
