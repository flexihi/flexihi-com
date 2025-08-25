import type { Metadata } from "next";
import "@/styles/globals.css";
import localFont from "next/font/local";
import NavBar from "@/layouts/NavBar";
import Footer from "@/layouts/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "FlexiHi",
  description:
    "From the small stuff to the big picture, organizes the work so teams know what to do, why it matters, and how to get it done.",
};

const Bukra = localFont({
  variable: "--font-bukra",
  src: [
    // Commented out unused font weights for better performance
    // Uncomment as needed when designing new components
    // {
    //   path: "../public/fonts/29LT-Bukra-Thin.otf",
    //   weight: "100",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Extra-Light.otf",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Light.otf",
    //   weight: "300",
    //   style: "normal",
    // },
    {
      path: "../public/fonts/29LT-Bukra-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/29LT-Bukra-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/29LT-Bukra-Semi-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/29LT-Bukra-Bold.otf",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/29LT-Bukra-Extra-Bold.otf",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/29LT-Bukra-Black.otf",
    //   weight: "900",
    //   style: "normal",
    // },
  ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentLocale = await getLocale();
  const locale: "en" | "ar" = currentLocale === "en" ? "en" : "ar";

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className={Bukra.variable}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex h-screen min-h-screen flex-col">
            <NavBar locale={locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
