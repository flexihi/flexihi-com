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
    <li>
      <a
        href={method.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-2 items-center"
        aria-label={method.ariaLabel}
      >
        <div className="w-16 h-16 flex justify-center items-center bg-[#0288D1] bg-opacity-50 rounded-full p-5 group-hover:bg-opacity-70 transition-colors duration-200">
          <Image
            src={method.icon}
            alt={method.alt}
            width={24}
            height={24}
            className="mx-1"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-1 font-medium leading-6">
          <h5 className="text-text-primary">{t(method.label)}</h5>
          <p className="text-primary-light">
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
    <address className="bg-[#0288d10a] rounded-xl px-16 py-11 flex flex-col items-center w-fit not-italic">
      <p className="text-text-primary leading-6">{t('title')}</p>
      <ul 
        className="flex gap-16 mt-14" 
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
  );
}

// Export memoized component for performance
export default memo(Contact);