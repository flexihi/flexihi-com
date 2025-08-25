import React from 'react';
import Image from 'next/image';
import callIcon from '@/public/call-icon.svg';
import whatsappIcon from '@/public/whatsapp-icon.svg';
import emailIcon from '@/public/email-icon.svg';
import { CONTACT_INFO } from '../constants';

interface ContactIconsProps {
  className?: string;
  iconClassName?: string;
}

const ContactIcons = React.memo<ContactIconsProps>(function ContactIcons({ 
  className = "flex gap-1", 
  iconClassName = "mx-1" 
}) {
  return (
    <div className={className}>
      <a 
        href={`tel:${CONTACT_INFO.phone}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="Call us"
      >
        <Image
          src={callIcon}
          alt="call icon"
          width={24}
          height={24}
          className={iconClassName}
          loading="lazy"
        />
      </a>
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="WhatsApp us"
      >
        <Image
          src={whatsappIcon}
          alt="whatsapp icon"
          width={24}
          height={24}
          className={iconClassName}
          loading="lazy"
        />
      </a>
      <a
        href={`mailto:${CONTACT_INFO.email}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity duration-200"
        aria-label="Email us"
      >
        <Image
          src={emailIcon}
          alt="email icon"
          width={24}
          height={24}
          className={iconClassName}
          loading="lazy"
        />
      </a>
    </div>
  );
});

export default ContactIcons;