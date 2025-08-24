'use client';

import { useState } from 'react';
import Contact from './Contact';
import { FaChevronDown } from 'react-icons/fa6';
import { Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { NUMBER_OF_FAQS } from '@/config';

export default function FAQs() {
  const [selected, setSelected] = useState<number | null>(null);

  const t = useTranslations('FAQs');

  const faqsKeys = Array.from(Array(NUMBER_OF_FAQS).keys()).map(n => `${n}`);

  const AccordionItem = ({
    children,
    index,
    title,
  }: {
    children: React.ReactNode;
    index: number;
    title: string;
  }) => {
    const isOpen = selected === index;
    // const [changed, setChanged] = useState(false);

    // const useList = children?.toString().includes("||li||");
    // let listItems: string[] = [];

    // if (useList) {
    //   listItems = children?.toString().split("||li||") || [];
    // }

    // useEffect(() => {
    //   setTimeout(() => {
    //     setChanged(prev => !prev);
    //   }, 100);
    // }, [isOpen]);

    return (
      <li className='border-b border-[#E2E8F0] py-8'>
        <header
          role='button'
          onClick={() => setSelected(isOpen ? null : index)}
          className='flex justify-between items-center p-4 text-text-primary text-lg font-medium leading-5'
        >
          {title}

          {/* //TODO: Transitions are not working */}
          <FaChevronDown
            size={16}
            className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </header>
        <Transition
          show={isOpen}
          enter='ease-out duration-1000'
          enterFrom='scale-0'
          enterTo='scale-100'
          leave='ease-in duration-1000'
          leaveFrom='scale-100'
          leaveTo='scale-0'
        >
          <div
          // className={clsx({
          //   "overflow-y-hidden transition-all duration-1000": true,
          //   "h-0": !isOpen,
          //   "h-fit": isOpen,
          // })}
          >
            <p className='px-10 pt-6 pb-8 text-text-secondary leading-8 text-justify'>
              {children}
              {/* {useList ? (
                <ol className="list-decimal">
                  {listItems.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ol>
              ) : (
                children
              )} */}
            </p>
          </div>
        </Transition>
      </li>
    );
  };

  return (
    <div
      className='w-full flex justify-center bg-white py-20'
      id='faqs'
      style={{
        scrollMarginTop: '80px',
      }}
    >
      <div className='max-w-content w-full px-20'>
        <h1 className='section-header'>{t('title')}</h1>
        <p className='section-description'>{t('description')}</p>
        <ul>
          {faqsKeys.map((key, index) => {
            return (
              <AccordionItem
                key={index}
                index={index}
                title={t(`${key}.question`)}
              >
                {t(`${key}.answer`)}
              </AccordionItem>
            );
          })}
        </ul>
        <div className='mt-16 flex justify-center'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
