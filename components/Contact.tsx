'use client';

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CONTACT_INFO } from '@/layouts/constants';
import callIcon from '@/public/call-icon.svg';
import whatsappIcon from '@/public/whatsapp-icon.svg';
import emailIcon from '@/public/email-icon.svg';

// TypeScript interfaces
interface ContactMethod {
  id: string;
  label: string;
  href: string;
  icon: string | import('next/image').StaticImageData;
  alt: string;
  ariaLabel: string;
}

interface ContactMethodProps {
  method: ContactMethod;
  t: (key: string) => string;
}

// Static icon mapping
const CONTACT_ICONS = {
  call: { icon: callIcon, alt: 'Phone call icon' },
  whatsapp: { icon: whatsappIcon, alt: 'WhatsApp messenger icon' },
  email: { icon: emailIcon, alt: 'Email icon' }
} as const;

// Utility function to format phone numbers
const formatPhoneNumber = (phoneNumber: string): string => {
  // Remove any existing spaces and format as: +968 9674 7611
  const cleaned = phoneNumber.replace(/\s/g, '');
  if (cleaned.startsWith('+968') && cleaned.length === 12) {
    return `+968 ${cleaned.slice(4, 8)} ${cleaned.slice(8)}`;
  }
  return phoneNumber; // Return original if format doesn't match
};

// Memoized ContactMethod component
const ContactMethodItem = memo<ContactMethodProps>(function ContactMethodItem({ method, t }) {
  return (
    <li className="w-full sm:w-auto">
      <a
        href={method.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-2 sm:gap-2.5 items-center justify-center sm:justify-start"
        aria-label={method.ariaLabel}
      >
        <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[68px] lg:h-[68px] flex justify-center items-center bg-[#0288D1] bg-opacity-50 rounded-full p-2 sm:p-3 lg:p-5 group-hover:bg-[#0288D1] group-hover:bg-opacity-70 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
          <Image
            src={method.icon}
            alt={method.alt}
            width={18}
            height={18}
            className="mx-1 sm:w-5 sm:h-5 lg:w-7 lg:h-7 group-hover:brightness-110 transition-all duration-300"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-[3px] font-medium leading-6">
          <h5 className="text-text-primary text-sm sm:text-base lg:text-base group-hover:text-[#0288D1] transition-colors duration-300">{t(method.label)}</h5>
          <p className="text-[#0288D1] text-sm sm:text-base lg:text-base group-hover:brightness-110 transition-all duration-300">
            {method.id === 'call' || method.id === 'whatsapp' 
              ? formatPhoneNumber(CONTACT_INFO.phone)
              : CONTACT_INFO.email
            }
          </p>
        </div>
      </a>
    </li>
  );
});

function Contact() {
  const t = useTranslations('Contact');

  // Memoized contact methods data
  const contactMethods = useMemo<ContactMethod[]>(() => {
    return [
      {
        id: 'call',
        label: 'call',
        href: `tel:${CONTACT_INFO.phone}`,
        icon: CONTACT_ICONS.call.icon,
        alt: CONTACT_ICONS.call.alt,
        ariaLabel: `Call us at ${CONTACT_INFO.phone}`
      },
      {
        id: 'whatsapp',
        label: 'whatsapp',
        href: `https://wa.me/${CONTACT_INFO.whatsapp}`,
        icon: CONTACT_ICONS.whatsapp.icon,
        alt: CONTACT_ICONS.whatsapp.alt,
        ariaLabel: `Contact us on WhatsApp at ${CONTACT_INFO.whatsapp}`
      },
      {
        id: 'email',
        label: 'email',
        href: `mailto:${CONTACT_INFO.email}`,
        icon: CONTACT_ICONS.email.icon,
        alt: CONTACT_ICONS.email.alt,
        ariaLabel: `Send us an email at ${CONTACT_INFO.email}`
      }
    ];
  }, []);

  return (
    <section 
      className="w-full flex justify-center bg-white py-12 sm:py-16 lg:py-20"
      aria-label="Contact us section"
    >
      <div className="max-w-content w-full px-5 sm:px-8 lg:px-20 flex justify-center">
        <address className="bg-[rgba(2,136,209,0.04)] rounded-xl px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-11 flex flex-col items-center w-full sm:w-fit not-italic max-w-4xl">
          <p className="text-text-primary leading-6 text-sm sm:text-base lg:text-base">{t('title')}</p>
          <ul 
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-[60px] mt-6 sm:mt-10 lg:mt-[30px] w-full sm:w-auto" 
            role="list" 
            aria-label="Contact methods"
          >
        {contactMethods.map((method) => (
          <ContactMethodItem
            key={method.id}
            method={method}
            t={t}
          />
        ))}
          </ul>
        </address>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Contact);