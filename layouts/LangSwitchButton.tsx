'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LocaleProps from '@/types/LocaleProps';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';

interface LangSwitchButtonProps extends LocaleProps {
  onClose?: () => void;
}

export default function LangSwitchButton({ locale, onClose }: LangSwitchButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleLanguageSwitch = async () => {
    try {
      setIsLoading(true);
      const newLocale = locale === 'en' ? 'ar' : 'en';
      
      // Set cookie with proper expiration
      setCookie('locale', newLocale, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        sameSite: 'lax',
      });
      
      // Close mobile menu if callback is provided
      onClose?.();
      
      // Smooth transition without page reload
      router.refresh();
    } catch (error) {
      console.error('Language switch failed:', error);
      // Fallback to page reload if smooth transition fails
      window.location.reload();
    } finally {
      setIsLoading(false);
    }
  };

  const t = useTranslations('NavBar');

  return (
    <button 
      onClick={handleLanguageSwitch}
      disabled={isLoading}
      className={`font-medium leading-6 transition-all duration-200 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 ${
        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
      }`}
      aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'} language`}
      aria-pressed={false}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {t('lang')}
        </span>
      ) : (
        t('lang')
      )}
    </button>
  );
}
