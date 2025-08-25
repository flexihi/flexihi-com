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

// Constants for better maintainability
const DEMOS_CONFIG = [
  {
    id: 'retail',
    icon: DemoImage1,
    title: "Retail Stores",
    list: ["Clothing store", "Electronic store", "Cold store", "Grocery store"],
  },
  {
    id: 'boutique',
    icon: DemoImage2,
    title: "Boutique Shops",
    list: ["Clothing store", "Electronic store", "Cold store", "Grocery store"],
  },
  {
    id: 'flower',
    icon: DemoImage3,
    title: "Flower shops",
    list: ["Clothing store", "Electronic store", "Cold store", "Grocery store"],
  },
  {
    id: 'cafe',
    icon: DemoImage4,
    title: "Cafe & Restaurants",
    list: ["Clothing store", "Electronic store", "Cold store", "Grocery store"],
  },
  {
    id: 'service',
    icon: DemoImage5,
    title: "Service Business",
    list: ["Saloon", "Repair service"],
  },
  {
    id: 'wholesale',
    icon: DemoImage6,
    title: "Wholesale & Warehouse",
    list: ["Clothing store", "Electronic store", "Cold store", "Grocery store"],
  },
] as const;

// Type definitions
interface DemoItemData {
  id: string;
  icon: StaticImageData;
  title: string;
  list: readonly string[];
}

interface DemoCardProps {
  demo: DemoItemData;
  locale: string;
}

// Memoized demo card component
const DemoCard = memo(function DemoCard({ demo, locale }: DemoCardProps) {
  return (
    <article className="group border border-gray-200 rounded-xl px-11 py-6 hover:border-primary-light hover:bg-primary-lightest hover:shadow-sm interactive-hover">
      <Image 
        src={demo.icon} 
        alt={`${demo.title} icon`}
        width={64}
        height={64}
        className="object-contain"
      />
      <h3 className="text-text-heading group-hover:text-primary text-2xl font-medium leading-7 mt-6 interactive-hover">
        {demo.title}
      </h3>
      <ul className="mt-3">
        {demo.list.map((item, index) => (
          <li key={index} className="text-text-body leading-6">
            {item}
          </li>
        ))}
      </ul>

      <button
        className="mt-8 text-secondary border border-secondary border-opacity-50 hover:shadow-md rounded-xl px-6 py-3 flex gap-2 items-center interactive-hover"
        type="button"
        aria-label={`Open demo for ${demo.title}`}
      >
        Open demo
        <Image
          src={arrowIcon}
          alt="arrow"
          width={16}
          height={16}
          className={clsx({
            "scale-x-[-1]": locale === "ar",
          })}
        />
      </button>
    </article>
  );
});

function Demos() {
  const t = useTranslations("Demos");
  const currentLocale = useLocale();
  const locale = currentLocale === "en" ? "en" : "ar";

  // Memoize demos data to prevent recreation on every render
  const demosData = useMemo(() => DEMOS_CONFIG, []);

  return (
    <section
      className="w-full flex justify-center bg-white py-20 section-anchor overflow-x-hidden"
      id="demos"
      aria-label="FlexiHi demo showcase for different business types"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        <div className="flex justify-between mt-12">
          <div 
            className="grid grid-cols-2 gap-8"
            role="list"
            aria-label="Demo categories list"
          >
            {demosData.map((demo) => (
              <DemoCard
                key={demo.id}
                demo={demo}
                locale={locale}
              />
            ))}
          </div>
          <div className="w-[480px] h-[960px]">
            <Image 
              src={iphone} 
              alt="FlexiHi mobile application interface on iPhone"
              width={480} 
              height={960}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Demos);
