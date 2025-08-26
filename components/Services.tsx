import Image, { StaticImageData } from "next/image";
import supportIcon from "@/public/services-support.svg";
import speedIcon from "@/public/services-speed.svg";
import installmentIcon from "@/public/services-installment.svg";
import { useTranslations } from "next-intl";
import { memo, useMemo } from "react";

// Constants for better maintainability
const SERVICES_CONFIG = [
  {
    id: 'support',
    icon: supportIcon,
    altText: 'Technical support and customer service icon',
    translationKey: 'support',
  },
  {
    id: 'speed',
    icon: speedIcon,
    altText: 'Fast processing and quick service icon',
    translationKey: 'speed',
  },
  {
    id: 'installation',
    icon: installmentIcon,
    altText: 'System installation and setup service icon',
    translationKey: 'installation',
  },
] as const;

// Type definitions
interface ServiceItem {
  id: string;
  icon: StaticImageData;
  altText: string;
  translationKey: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  t: (key: string) => string;
  index: number;
}

// Memoized service card component
const ServiceCard = memo(function ServiceCard({ service, t, index }: ServiceCardProps) {
  return (
    <li className="group">
      <article className="flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 hover:transform hover:scale-[1.02] focus-within:transform focus-within:scale-[1.02]">
        <div className="transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={service.icon} 
            alt={service.altText}
            width={64}
            height={64}
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
        <h3 className="mt-6 md:mt-9 text-text-primary text-base md:text-lg font-bold leading-tight transition-colors duration-200 group-hover:text-secondary">
          {t(`${service.translationKey}.title`)}
        </h3>
        <p className="mt-4 text-text-secondary text-sm md:text-base leading-6 md:leading-8 text-center md:text-left transition-colors duration-200 group-hover:text-text-primary">
          {t(`${service.translationKey}.description`)}
        </p>
      </article>
    </li>
  );
});

function Services() {
  const t = useTranslations("Services");

  // Memoize services data to prevent recreation on every render
  const servicesData = useMemo(() => SERVICES_CONFIG, []);

  return (
    <section 
      className="w-full bg-secondary/[0.04] flex justify-center overflow-x-hidden"
      aria-label="FlexiHi services and support offerings"
    >
      <div className="max-w-content w-full py-12 md:py-16 lg:py-24 px-5 sm:px-8 md:px-16 lg:px-28">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        
        <ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          role="list"
          aria-label="Services list"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              t={t}
              index={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Services);
