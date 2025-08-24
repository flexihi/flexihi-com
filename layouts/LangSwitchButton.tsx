'use client';

import LocaleProps from '@/types/LocaleProps';
import { setCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';

export default function LangSwitchButton({ locale }: LocaleProps) {
  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    // Set cookie with proper expiration
    setCookie('locale', newLocale, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      sameSite: 'lax',
    });
    
    // Force a full page reload to ensure all components re-render with new locale
    window.location.reload();
  };

  const t = useTranslations('NavBar');

  return (
    <li className='font-medium leading-6 ps-6'>
      <button onClick={handleLanguageSwitch}>
        {t('lang')}
      </button>
    </li>
  );
}
