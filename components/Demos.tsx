"use client";

import Image, { StaticImageData } from "next/image";
import DemoImage1 from "@/public/demo-retail.svg";
import DemoImage2 from "@/public/demo-boutique.svg";
import DemoImage3 from "@/public/demo-flowers.svg";
import DemoImage4 from "@/public/demo-cafe.svg";
import DemoImage5 from "@/public/demo-service.svg";
import DemoImage6 from "@/public/demo-wholesale.svg";
import iphone from "@/public/iphone.png";
import arrowIcon from "@/public/demo-open-button-arrow.svg";
import { useTranslations, useLocale } from "next-intl";
import { memo, useMemo } from "react";
import clsx from "clsx";

// Constants for demo icons mapping
const DEMO_ICONS = {
  retail: DemoImage1,
  boutique: DemoImage2,
  flower: DemoImage3,
  cafe: DemoImage4,
  service: DemoImage5,
  wholesale: DemoImage6,
} as const;

// Type definitions
interface DemoItemData {
  id: keyof typeof DEMO_ICONS;
  icon: StaticImageData;
  title: string;
  list: string[];
}

interface DemoCardProps {
  demo: DemoItemData;
  locale: string;
  t: (key: string) => string;
}

// Memoized demo card component
const DemoCard = memo(function DemoCard({ demo, locale, t }: DemoCardProps) {
  return (
    <article className="group border border-gray-200 rounded-xl px-4 py-4 sm:px-6 sm:py-5 lg:px-11 lg:py-6 hover:border-primary-light hover:bg-primary-lightest hover:shadow-sm interactive-hover">
      <Image 
        src={demo.icon} 
        alt={`${demo.title} icon`}
        width={48}
        height={48}
        className="object-contain sm:w-14 sm:h-14 lg:w-16 lg:h-16 transition-all duration-300 group-hover:[filter:invert(16%)_sepia(99%)_saturate(1580%)_hue-rotate(200deg)_brightness(95%)_contrast(99%)]"
      />
      <h3 className="text-text-heading group-hover:text-primary text-lg sm:text-xl lg:text-2xl font-medium leading-tight mt-4 sm:mt-5 lg:mt-6 interactive-hover">
        {demo.title}
      </h3>
      <ul className="mt-2 sm:mt-3">
        {demo.list.map((item, index) => (
          <li key={index} className="text-text-body text-sm sm:text-base leading-5 sm:leading-6">
            {item}
          </li>
        ))}
      </ul>

      <button
        className="mt-6 sm:mt-7 lg:mt-8 w-full sm:w-auto text-secondary border border-secondary border-opacity-50 hover:shadow-md rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 flex gap-2 items-center justify-center sm:justify-start interactive-hover touch-target text-sm sm:text-base"
        type="button"
        aria-label={`Open demo for ${demo.title}`}
      >
        {t("button.openDemo")}
        <Image
          src={arrowIcon}
          alt="arrow"
          width={14}
          height={14}
          className={clsx(
            "sm:w-4 sm:h-4",
            {
              "scale-x-[-1]": locale === "ar",
            }
          )}
        />
      </button>
    </article>
  );
});

function Demos() {
  const t = useTranslations("Demos");
  const currentLocale = useLocale();
  const locale = currentLocale === "en" ? "en" : "ar";

  // Build demos data with translations
  const demosData = useMemo(() => {
    const categories = ['retail', 'boutique', 'flower', 'cafe', 'service', 'wholesale'] as const;
    return categories.map((categoryId) => ({
      id: categoryId,
      icon: DEMO_ICONS[categoryId],
      title: t(`categories.${categoryId}.title`),
      list: [
        t(`categories.${categoryId}.items.0`),
        t(`categories.${categoryId}.items.1`),
        ...(categoryId === 'service' ? [] : [
          t(`categories.${categoryId}.items.2`),
          t(`categories.${categoryId}.items.3`)
        ])
      ]
    }));
  }, [t]);

  return (
    <section
      className="w-full flex justify-center bg-white py-20 section-anchor overflow-x-hidden"
      id="demos"
      aria-label="FlexiHi demo showcase for different business types"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        <div className="mt-8 sm:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto"
            role="list"
            aria-label="Demo categories list"
          >
            {demosData.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                locale={locale}
                t={t}
              />
            ))}
          </div>
          {/* iPhone image preserved for future use - currently hidden */}
          {/* <div className="w-[480px] h-[960px] hidden">
            <Image 
              src={iphone} 
              alt="FlexiHi mobile application interface on iPhone"
              width={480} 
              height={960}
              priority
              className="object-contain"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Demos);
