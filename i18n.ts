// import { getRequestConfig } from 'next-intl/server';
// import { cookies } from 'next/headers';
// import { DEFAULT_LOCALE } from './config';

// export default getRequestConfig(async () => {
//   const cookie = cookies();
//   const storedLocale = cookie.get('lang');

//   const locale =
//     storedLocale?.value === 'en'
//       ? 'en'
//       : storedLocale?.value === 'ar'
//       ? 'ar'
//       : DEFAULT_LOCALE;

//   return {
//     locale,
//     messages: (await import(`./messages/${locale}.json`)).default,
//   };
// });
