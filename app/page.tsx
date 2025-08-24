import Apps from "@/components/Apps";
import Demos from "@/components/Demos";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import { LocaleType } from "@/types/LocaleProps";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const currentLocale = await getLocale();
  const locale: LocaleType = currentLocale === "en" ? "en" : "ar";

  return (
    <>
      <Hero locale={locale} />
      <Features locale={locale} />
      <Services />
      <Demos locale={locale} />
      <Pricing />
      <FAQs />
      <Apps />
    </>
  );
}
