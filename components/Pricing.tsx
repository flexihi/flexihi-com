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
}

interface PlanCardProps {
  plan: PlanData;
  isAnnual: boolean;
}

// Configuration constant
const PRICING_DATA: PricingConfig = {
  monthly: {
    basic: {
      label: "Basic",
      price: "7.700",
      features: [
        { label: "Products manager", available: true },
        { label: "Invoices", available: true },
        { label: "Dashboard & Reporting", available: true },
        { label: "Unlimited users", available: true },
        { label: "Cashier Devices (1 Free)", available: true },
        { label: "Inventory & Purchases (Add-On)", available: false },
        { label: "Promotions", available: true },
        { label: "Loyalty (Add-On)", available: false },
        { label: "Attendance management", available: true },
        { label: "Warehouse/branch (Add-On)", available: true },
        { label: "Installments management", available: true },
      ],
    },
    advance: {
      label: "Advance",
      price: "11.900",
      features: [
        { label: "Products manager", available: true },
        { label: "Invoices", available: true },
        { label: "Dashboard & Reporting", available: true },
        { label: "Unlimited users", available: true },
        { label: "Cashier Devices (1 Free)", available: true },
        { label: "Inventory & Purchases", available: true },
        { label: "Promotions", available: true },
        { label: "Loyalty", available: true },
        { label: "Attendance management", available: true },
        { label: "Warehouse/branch (Add-On)", available: true },
        { label: "Installments management", available: true },
      ],
    },
  },
  yearly: {
    basic: {
      label: "Basic",
      price: "6.400",
      description: "Billed annually at OMR 77",
      features: [
        { label: "Products manager", available: true },
        { label: "Invoices", available: true },
        { label: "Dashboard & Reporting", available: true },
        { label: "Unlimited users", available: true },
        { label: "Cashier Devices (1 Free)", available: true },
        { label: "Inventory & Purchases (Add-On)", available: false },
        { label: "Promotions", available: true },
        { label: "Loyalty (Add-On)", available: false },
        { label: "Attendance management", available: true },
        { label: "Warehouse/branch (Add-On)", available: true },
        { label: "Installments management", available: true },
      ],
    },
    advance: {
      label: "Advance",
      price: "9.900",
      description: "Billed annually at OMR 119",
      features: [
        { label: "Products manager", available: true },
        { label: "Invoices", available: true },
        { label: "Dashboard & Reporting", available: true },
        { label: "Unlimited users", available: true },
        { label: "Cashier Devices (1 Free)", available: true },
        { label: "Inventory & Purchases", available: true },
        { label: "Promotions", available: true },
        { label: "Loyalty", available: true },
        { label: "Attendance management", available: true },
        { label: "Warehouse/branch (Add-On)", available: true },
        { label: "Installments management", available: true },
      ],
    },
  },
} as const;

// Memoized SimpleToggle component
const SimpleToggle = memo(function SimpleToggle({ isMonthly, onToggle }: SimpleToggleProps) {
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
    <div className="flex gap-4 items-center my-20 text-text-heading text-lg leading-5">
      <button
        onClick={handleMonthlyClick}
        type="button"
        aria-pressed={isMonthly}
        aria-label="Select monthly billing"
      >
        Monthly
      </button>
      <button
        onClick={handleToggleClick}
        type="button"
        className={clsx({
          "w-[72px] h-[33px] bg-primary-light hover:bg-primary rounded-2xl flex items-center transition-all duration-300":
            true,
          "flex-row-reverse": !isMonthly,
        })}
        aria-label={`Switch to ${isMonthly ? 'yearly' : 'monthly'} billing`}
      >
        <div className="h-6 w-6 bg-white rounded-full mx-1" />
      </button>
      <button
        onClick={handleYearlyClick}
        type="button"
        aria-pressed={!isMonthly}
        aria-label="Select yearly billing"
      >
        Yearly
      </button>
    </div>
  );
});

// Memoized PlanCard component
const PlanCard = memo(function PlanCard({ plan, isAnnual }: PlanCardProps) {
  return (
    <article className="card-elevated flex-1 gap-6">
      <div>
        <h4 className="text-secondary text-sm font-semibold leading-6 tracking-wide uppercase">
          {plan.label}
        </h4>
      </div>
      <div>
        <div className="text-text-heading text-xl font-bold mb-2">OMR</div>
        <span className="text-text-heading text-5xl font-bold">{plan.price}</span>
        <span className="text-text-heading text-base">
          / {isAnnual ? "year" : "month"}
        </span>
      </div>
      <p
        className={clsx({
          "text-text-muted leading-5 opacity-70": true,
          "text-transparent": !plan.description,
        })}
      >
        {plan.description || "-"}
      </p>
      <ul className="flex flex-col gap-2" role="list" aria-label={`${plan.label} plan features`}>
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className={clsx({
              "flex gap-3 leading-6": true,
              "text-text-heading": feature.available,
              "text-text-disabled": !feature.available,
            })}
          >
            <Image
              src={feature.available ? enabledIcon : disabledIcon}
              alt={feature.available ? "Included feature" : "Not included feature"}
              width={24}
              height={24}
              className="object-contain"
            />
            {feature.label}
          </li>
        ))}
      </ul>
      <div className="flex-1" />
      <div>
        <button className="btn-primary" type="button" aria-label={`Get started with ${plan.label} plan`}>
          Get started
        </button>
      </div>
    </article>
  );
});

// Memoized CustomPlan component
const CustomPlan = memo(function CustomPlan() {
  return (
    <article className="card-elevated flex-1 gap-12">
      <div>
        <h4 className="text-primary text-sm font-semibold leading-6 tracking-wide uppercase">
          Custom
        </h4>
        <p className="text-text-muted leading-5 mt-2 opacity-70">
          Looking for more? Contact Us.
        </p>
      </div>
      <div className="flex-1" />
      <div>
        <button className="btn-outline" type="button">
          Contact us
        </button>
      </div>
    </article>
  );
});

function Pricing() {
  const t = useTranslations("Pricing");
  const [isMonthly, setMonthly] = useState(false);

  // Memoize current pricing data based on toggle state
  const currentPricing = useMemo(() => {
    return isMonthly ? PRICING_DATA.monthly : PRICING_DATA.yearly;
  }, [isMonthly]);

  const handleToggle = useCallback((monthly: boolean) => {
    setMonthly(monthly);
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center py-20 section-anchor"
      id="pricing"
      aria-label="FlexiHi pricing plans and subscription options"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description mb-0">{t("description")}</p>
      </div>

      <SimpleToggle isMonthly={isMonthly} onToggle={handleToggle} />

      <div className="flex justify-between gap-9" role="list" aria-label="Available pricing plans">
        <PlanCard 
          plan={currentPricing.basic} 
          isAnnual={false}
        />
        <PlanCard 
          plan={currentPricing.advance} 
          isAnnual={false}
        />
        <CustomPlan />
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Pricing);
