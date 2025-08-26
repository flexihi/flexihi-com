"use client";

import Image from "next/image";
import enabledIcon from "@/public/pricing-enabled.svg";
import disabledIcon from "@/public/pricing-disabled.svg";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useState, memo, useMemo, useCallback } from "react";

// TypeScript interfaces
interface PlanFeature {
  label: string;
  available: boolean;
}

interface PlanData {
  label: string;
  price: string;
  description?: string;
  features: PlanFeature[];
}

interface PricingConfig {
  monthly: {
    basic: PlanData;
    advance: PlanData;
  };
  yearly: {
    basic: PlanData;
    advance: PlanData;
  };
}

interface SimpleToggleProps {
  isMonthly: boolean;
  onToggle: (isMonthly: boolean) => void;
  t: (key: string) => string;
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
  t: (key: string) => string;
}

// Helper function to build pricing configuration with translations
const buildPricingData = (t: (key: string) => string): PricingConfig => ({
  monthly: {
    basic: {
      label: t("plans.basic.name"),
      price: t("plans.basic.monthly.price"),
      features: [
        { label: t("features.productsManager"), available: true },
        { label: t("features.invoices"), available: true },
        { label: t("features.dashboardReporting"), available: true },
        { label: t("features.unlimitedUsers"), available: true },
        { label: t("features.cashierDevices"), available: true },
        { label: t("features.inventoryPurchasesAddon"), available: false },
        { label: t("features.promotions"), available: true },
        { label: t("features.loyaltyAddon"), available: false },
        { label: t("features.attendanceManagement"), available: true },
        { label: t("features.warehouseBranch"), available: true },
        { label: t("features.installmentsManagement"), available: true },
      ],
    },
    advance: {
      label: t("plans.advance.name"),
      price: t("plans.advance.monthly.price"),
      features: [
        { label: t("features.productsManager"), available: true },
        { label: t("features.invoices"), available: true },
        { label: t("features.dashboardReporting"), available: true },
        { label: t("features.unlimitedUsers"), available: true },
        { label: t("features.cashierDevices"), available: true },
        { label: t("features.inventoryPurchases"), available: true },
        { label: t("features.promotions"), available: true },
        { label: t("features.loyalty"), available: true },
        { label: t("features.attendanceManagement"), available: true },
        { label: t("features.warehouseBranch"), available: true },
        { label: t("features.installmentsManagement"), available: true },
      ],
    },
  },
  yearly: {
    basic: {
      label: t("plans.basic.name"),
      price: t("plans.basic.yearly.price"),
      description: t("plans.basic.yearly.description"),
      features: [
        { label: t("features.productsManager"), available: true },
        { label: t("features.invoices"), available: true },
        { label: t("features.dashboardReporting"), available: true },
        { label: t("features.unlimitedUsers"), available: true },
        { label: t("features.cashierDevices"), available: true },
        { label: t("features.inventoryPurchasesAddon"), available: false },
        { label: t("features.promotions"), available: true },
        { label: t("features.loyaltyAddon"), available: false },
        { label: t("features.attendanceManagement"), available: true },
        { label: t("features.warehouseBranch"), available: true },
        { label: t("features.installmentsManagement"), available: true },
      ],
    },
    advance: {
      label: t("plans.advance.name"),
      price: t("plans.advance.yearly.price"),
      description: t("plans.advance.yearly.description"),
      features: [
        { label: t("features.productsManager"), available: true },
        { label: t("features.invoices"), available: true },
        { label: t("features.dashboardReporting"), available: true },
        { label: t("features.unlimitedUsers"), available: true },
        { label: t("features.cashierDevices"), available: true },
        { label: t("features.inventoryPurchases"), available: true },
        { label: t("features.promotions"), available: true },
        { label: t("features.loyalty"), available: true },
        { label: t("features.attendanceManagement"), available: true },
        { label: t("features.warehouseBranch"), available: true },
        { label: t("features.installmentsManagement"), available: true },
      ],
    },
  },
});

// Memoized SimpleToggle component
const SimpleToggle = memo(function SimpleToggle({ isMonthly, onToggle, t }: SimpleToggleProps) {
  const handleMonthlyClick = useCallback(() => {
    if (!isMonthly) {
      onToggle(true);
    }
  }, [isMonthly, onToggle]);

  const handleYearlyClick = useCallback(() => {
    if (isMonthly) {
      onToggle(false);
    }
  }, [isMonthly, onToggle]);

  const handleToggleClick = useCallback(() => {
    onToggle(!isMonthly);
  }, [isMonthly, onToggle]);

  return (
    <div className="flex gap-3 sm:gap-4 items-center my-6 sm:my-8 lg:my-10 text-text-heading text-sm sm:text-base lg:text-lg leading-5">
      <button
        onClick={handleMonthlyClick}
        type="button"
        aria-pressed={isMonthly}
        aria-label="Select monthly billing"
        className="touch-target"
      >
        {t("toggle.monthly")}
      </button>
      <button
        onClick={handleToggleClick}
        type="button"
        className={clsx({
          "w-14 h-7 sm:w-16 sm:h-8 lg:w-[72px] lg:h-[33px] bg-primary-light hover:bg-primary rounded-2xl flex items-center transition-all duration-300":
            true,
          "flex-row-reverse": !isMonthly,
        })}
        aria-label={`Switch to ${isMonthly ? 'yearly' : 'monthly'} billing`}
      >
        <div className="h-5 w-5 sm:h-6 sm:w-6 bg-white rounded-full mx-1" />
      </button>
      <button
        onClick={handleYearlyClick}
        type="button"
        aria-pressed={!isMonthly}
        aria-label="Select yearly billing"
        className="touch-target"
      >
        {t("toggle.yearly")}
      </button>
    </div>
  );
});

// Memoized PlanCard component
const PlanCard = memo(function PlanCard({ plan, isAnnual, t }: PlanCardProps) {
  return (
    <article className="card-elevated flex-1 gap-4 sm:gap-5 lg:gap-6 !p-4 sm:!p-6 lg:!p-8">
      <div>
        <h4 className="text-secondary text-xs sm:text-sm font-semibold leading-6 tracking-wide uppercase">
          {plan.label}
        </h4>
      </div>
      <div>
        <div className="text-text-heading text-lg sm:text-xl font-bold mb-2">{t("plans.basic.currency")}</div>
        <div className="flex items-baseline gap-1 whitespace-nowrap">
          <span className="text-text-heading text-3xl sm:text-4xl lg:text-5xl font-bold">{plan.price}</span>
          <span className="text-text-heading text-sm sm:text-base lg:text-xl">
            / {isAnnual ? t("plans.basic.yearly.period") : t("plans.basic.monthly.period")}
          </span>
        </div>
      </div>
      <p
        className={clsx({
          "text-text-muted text-sm sm:text-base leading-5 opacity-70": true,
          "text-transparent": !plan.description,
        })}
      >
        {plan.description || "-"}
      </p>
      <ul className="flex flex-col gap-1.5 sm:gap-2" role="list" aria-label={`${plan.label} plan features`}>
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={clsx({
              "flex gap-2 sm:gap-3 leading-6 text-sm sm:text-base": true,
              "text-text-heading": feature.available,
              "text-text-disabled": !feature.available,
            })}
          >
            <Image
              src={feature.available ? enabledIcon : disabledIcon}
              alt={feature.available ? "Included feature" : "Not included feature"}
              width={20}
              height={20}
              className="object-contain sm:w-6 sm:h-6 flex-shrink-0 mt-0.5"
            />
            {feature.label}
          </li>
        ))}
      </ul>
      <div className="flex-1" />
      <div>
        <button className="btn-primary w-full sm:w-auto" type="button" aria-label={`${t("buttons.getStarted")} with ${plan.label} plan`}>
          {t("buttons.getStarted")}
        </button>
      </div>
    </article>
  );
});

// Memoized CustomPlan component
const CustomPlan = memo(function CustomPlan({ t }: { t: (key: string) => string }) {
  return (
    <article className="card-elevated flex-1 gap-8 sm:gap-10 lg:gap-12 !p-4 sm:!p-6 lg:!p-8">
      <div>
        <h4 className="text-primary text-xs sm:text-sm font-semibold leading-6 tracking-wide uppercase">
          {t("plans.custom.name")}
        </h4>
        <p className="text-text-muted text-sm sm:text-base leading-5 mt-2 opacity-70">
          {t("plans.custom.description")}
        </p>
      </div>
      <div className="flex-1" />
      <div>
        <button className="btn-outline w-full sm:w-auto" type="button">
          {t("buttons.contactUs")}
        </button>
      </div>
    </article>
  );
});

function Pricing() {
  const t = useTranslations("Pricing");
  const [isMonthly, setMonthly] = useState(false);

  // Build pricing data with translations
  const PRICING_DATA = useMemo(() => buildPricingData(t), [t]);

  // Memoize current pricing data based on toggle state
  const currentPricing = useMemo(() => {
    return isMonthly ? PRICING_DATA.monthly : PRICING_DATA.yearly;
  }, [isMonthly, PRICING_DATA]);

  const handleToggle = useCallback((monthly: boolean) => {
    setMonthly(monthly);
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center py-20 section-anchor overflow-x-hidden"
      id="pricing"
      aria-label="FlexiHi pricing plans and subscription options"
    >
      <div className="max-w-content w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description mb-0">{t("description")}</p>
      </div>

      <SimpleToggle isMonthly={isMonthly} onToggle={handleToggle} t={t} />

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-9 max-w-7xl mx-auto" role="list" aria-label="Available pricing plans">
          <PlanCard 
            plan={currentPricing.basic} 
            isAnnual={!isMonthly}
            t={t}
          />
          <PlanCard 
            plan={currentPricing.advance} 
            isAnnual={!isMonthly}
            t={t}
          />
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-3">
            <CustomPlan t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Pricing);
