'use client';

import { memo, useMemo } from 'react';
import Contact from './Contact';
import { useTranslations } from 'next-intl';
import { NUMBER_OF_FAQS } from '@/config';
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

function FAQs() {
  const t = useTranslations('FAQs');

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
      className='w-full flex justify-center bg-white py-20 section-anchor'
      id='faqs'
      aria-label='Frequently asked questions about FlexiHi'
    >
      <div className='max-w-content w-full px-20'>
        <h1 className='section-header'>{t('title')}</h1>
        <p className='section-description'>{t('description')}</p>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.key} value={item.key} className="border-b border-gray-200 py-8">
              <AccordionTrigger className="flex justify-between items-center p-4 text-text-primary text-lg font-medium leading-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-10 pt-6 pb-8">
                <p className="text-text-secondary leading-8 text-justify">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className='mt-16 flex justify-center'>
          <Contact />
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(FAQs);