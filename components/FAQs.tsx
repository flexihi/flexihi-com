'use client';

import { memo, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { NUMBER_OF_FAQS } from '@/config';
import { LocaleType } from '@/types/LocaleProps';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

// TypeScript interface
interface FAQItem {
  key: string;
  question: string;
  answer: string;
}

// Pre-compute FAQ keys constant
const FAQ_KEYS = Array.from(Array(NUMBER_OF_FAQS).keys()).map(n => `${n}`);

interface FAQsProps {
  locale: LocaleType;
}

function FAQs({ locale }: FAQsProps) {
  const t = useTranslations('FAQs');
  const isRTL = locale === 'ar';

  // Memoized FAQ data computation
  const faqItems = useMemo<FAQItem[]>(() => {
    return FAQ_KEYS.map((key) => ({
      key,
      question: t(`${key}.question`),
      answer: t(`${key}.answer`),
    }));
  }, [t]);

  return (
    <section
      className='w-full flex justify-center bg-white py-12 sm:py-16 lg:py-20 section-anchor overflow-x-hidden'
      id='faqs'
      aria-label='Frequently asked questions about FlexiHi'
    >
      <div className='max-w-content w-full px-5 sm:px-8 lg:px-20'>
        <h1 className='section-header'>{t('title')}</h1>
        <p className='section-description'>{t('description')}</p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.key} value={item.key} className="border-b border-gray-200 py-4 sm:py-6 lg:py-8">
              <AccordionTrigger className={`flex justify-between items-center p-2 sm:p-3 lg:p-4 text-text-primary text-base sm:text-lg font-medium leading-5 hover:no-underline ${isRTL ? 'text-right' : 'text-left'}`}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 lg:px-10 pt-4 sm:pt-5 lg:pt-6 pb-6 sm:pb-7 lg:pb-8">
                <p className={`text-text-secondary leading-8 ${isRTL ? 'text-right' : 'text-justify'}`}>
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(FAQs);