'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NAVIGATION_SECTIONS, EXTERNAL_LINKS, CONTACT_INFO } from '../constants';
import LangSwitchButton from '../LangSwitchButton';
import LocaleProps from '@/types/LocaleProps';

interface MobileMenuProps extends LocaleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ locale, isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('NavBar');
  const menuRef = useRef<HTMLDivElement>(null);

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        onClose();
        break;
      case 'Tab':
        // Keep focus within menu
        if (menuRef.current) {
          const focusableElements = menuRef.current.querySelectorAll(
            'a[href], button, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
          
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
          }
        }
        break;
      default:
        break;
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus first focusable element
      setTimeout(() => {
        const firstFocusable = menuRef.current?.querySelector(
          'a[href], button'
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 100);
    } else {
      // Unlock body scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <div
      ref={menuRef}
      className={`
        md:hidden w-full bg-white shadow-lg border-t border-gray-200 overflow-hidden transition-all duration-300 ease-out
        ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
      `}
      role="menu"
      aria-hidden={!isOpen}
      aria-label="Mobile navigation menu"
    >
      <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
        {/* Navigation Links */}
        <div className="flex flex-col gap-2 sm:gap-3 mb-6">
          <Link
            href={NAVIGATION_SECTIONS.features}
            className="flex items-center px-3 py-3 sm:py-4 text-[#111927] text-responsive-lg font-medium hover:text-[#EF6C00] hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg touch-target"
            onClick={onClose}
            role="menuitem"
          >
            {t('features')}
          </Link>
          <Link
            href={NAVIGATION_SECTIONS.pricing}
            className="flex items-center px-3 py-3 sm:py-4 text-[#111927] text-responsive-lg font-medium hover:text-[#EF6C00] hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg touch-target"
            onClick={onClose}
            role="menuitem"
          >
            {t('pricing')}
          </Link>
          <Link
            href={NAVIGATION_SECTIONS.faqs}
            className="flex items-center px-3 py-3 sm:py-4 text-[#111927] text-responsive-lg font-medium hover:text-[#EF6C00] hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg touch-target"
            onClick={onClose}
            role="menuitem"
          >
            {t('faqs')}
          </Link>
          
          {/* Contact Icons Row */}
          <div className="flex gap-3 sm:gap-4 items-center justify-center sm:justify-start mt-4 p-3 bg-gray-50 rounded-lg">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center p-3 bg-white hover:bg-[#005394] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg shadow-sm touch-target"
              aria-label="Call us"
              role="menuitem"
            >
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-white hover:bg-[#25D366] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg shadow-sm touch-target"
              aria-label="WhatsApp us"
              role="menuitem"
            >
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center justify-center p-3 bg-white hover:bg-[#EF6C00] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg shadow-sm touch-target"
              aria-label="Email us"
              role="menuitem"
            >
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-4 sm:mb-6" />
        
        {/* Login and Language Section */}
        <div className="flex flex-col gap-3">
          <a
            href={EXTERNAL_LINKS.backOffice}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 sm:py-4 text-[#EF6C00] text-responsive-lg font-medium hover:text-white hover:bg-[#EF6C00] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#005394] focus:ring-offset-2 rounded-lg border-2 border-[#EF6C00] touch-target"
            onClick={onClose}
            role="menuitem"
          >
            {t('login')}
          </a>
          <div className="flex items-center justify-center px-3 py-2">
            <LangSwitchButton locale={locale} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}