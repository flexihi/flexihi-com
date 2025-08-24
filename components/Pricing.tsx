"use client";

import Image from "next/image";
import enabledIcon from "@/public/pricing-enabled.svg";
import disabledIcon from "@/public/pricing-disabled.svg";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useState } from "react";

export default function Pricing() {
  const t = useTranslations("Pricing");
  const [isMonthly, setMonthly] = useState(false);

  const SimpleToggle = () => {
    return (
      <div className="flex gap-4 items-center my-20 text-text-heading text-lg leading-5">
        <button
          onClick={() => {
            if (!isMonthly) {
              setMonthly(true);
            }
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => {
            setMonthly(!isMonthly);
          }}
          className={clsx({
            "w-[72px] h-[33px] bg-primary-light hover:bg-primary rounded-2xl flex items-center transition-all duration-300":
              true,
            "flex-row-reverse": !isMonthly,
          })}
        >
          <div className="h-6 w-6 bg-white rounded-full mx-1" />
        </button>
        <button
          onClick={() => {
            if (isMonthly) {
              setMonthly(false);
            }
          }}
        >
          Yearly
        </button>
      </div>
    );
  };

  return (
    <div
      className="w-full flex flex-col items-center py-20 section-anchor"
      id="pricing"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description mb-0">{t("description")}</p>
      </div>

      <SimpleToggle />

      <div className="flex justify-between gap-9">
        {isMonthly && (
          <>
            <Plan
              label="Basic"
              price="7.700"
              isAnnual={false}
              items={[
                {
                  label: "Products manager",
                  available: true,
                },
                {
                  label: "Invoices",
                  available: true,
                },
                {
                  label: "Dashboard & Reporting",
                  available: true,
                },
                {
                  label: "Unlimited users",
                  available: true,
                },
                {
                  label: "Cashier Devices (1 Free)",
                  available: true,
                },
                {
                  label: "Inventory & Purchases (Add-On)",
                  available: false,
                },
                {
                  label: "Promotions",
                  available: true,
                },
                {
                  label: "Loyalty (Add-On)",
                  available: false,
                },
                {
                  label: "Attendance management",
                  available: true,
                },
                {
                  label: "Warehouse/branch (Add-On)",
                  available: true,
                },
                {
                  label: "Installments management",
                  available: true,
                },
              ]}
            />
            <Plan
              label="Advance"
              price="11.900"
              isAnnual={false}
              items={[
                {
                  label: "Products manager",
                  available: true,
                },
                {
                  label: "Invoices",
                  available: true,
                },
                {
                  label: "Dashboard & Reporting",
                  available: true,
                },
                {
                  label: "Unlimited users",
                  available: true,
                },
                {
                  label: "Cashier Devices (1 Free)",
                  available: true,
                },
                {
                  label: "Inventory & Purchases",
                  available: true,
                },
                {
                  label: "Promotions",
                  available: true,
                },
                {
                  label: "Loyalty",
                  available: true,
                },
                {
                  label: "Attendance management",
                  available: true,
                },
                {
                  label: "Warehouse/branch (Add-On)",
                  available: true,
                },
                {
                  label: "Installments management",
                  available: true,
                },
              ]}
            />
          </>
        )}
        {!isMonthly && (
          <>
            <Plan
              label="Basic"
              price="6.400"
              isAnnual={false}
              description="Billed annually at OMR 77"
              items={[
                {
                  label: "Products manager",
                  available: true,
                },
                {
                  label: "Invoices",
                  available: true,
                },
                {
                  label: "Dashboard & Reporting",
                  available: true,
                },
                {
                  label: "Unlimited users",
                  available: true,
                },
                {
                  label: "Cashier Devices (1 Free)",
                  available: true,
                },
                {
                  label: "Inventory & Purchases (Add-On)",
                  available: false,
                },
                {
                  label: "Promotions",
                  available: true,
                },
                {
                  label: "Loyalty (Add-On)",
                  available: false,
                },
                {
                  label: "Attendance management",
                  available: true,
                },
                {
                  label: "Warehouse/branch (Add-On)",
                  available: true,
                },
                {
                  label: "Installments management",
                  available: true,
                },
              ]}
            />
            <Plan
              label="Advance"
              price="9.900"
              description="Billed annually at OMR 119"
              isAnnual={false}
              items={[
                {
                  label: "Products manager",
                  available: true,
                },
                {
                  label: "Invoices",
                  available: true,
                },
                {
                  label: "Dashboard & Reporting",
                  available: true,
                },
                {
                  label: "Unlimited users",
                  available: true,
                },
                {
                  label: "Cashier Devices (1 Free)",
                  available: true,
                },
                {
                  label: "Inventory & Purchases",
                  available: true,
                },
                {
                  label: "Promotions",
                  available: true,
                },
                {
                  label: "Loyalty",
                  available: true,
                },
                {
                  label: "Attendance management",
                  available: true,
                },
                {
                  label: "Warehouse/branch (Add-On)",
                  available: true,
                },
                {
                  label: "Installments management",
                  available: true,
                },
              ]}
            />
          </>
        )}
        <div className="card-elevated flex-1 gap-12">
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
            <button className="btn-outline">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PlanItem {
  label: string;
  available: boolean;
}

const Plan = ({
  label,
  price,
  isAnnual,
  items,
  description,
}: {
  label: string;
  price: string;
  isAnnual: boolean;
  description?: string;
  items: PlanItem[];
}) => {
  return (
    <div className="card-elevated flex-1 gap-6">
      <div>
        <h4 className="text-secondary text-sm font-semibold leading-6 tracking-wide uppercase">
          {label}
        </h4>
      </div>
      <div>
        <div className="text-text-heading text-xl font-bold mb-2">OMR</div>
        <span className="text-text-heading text-5xl font-bold">{price}</span>
        <span className="text-text-heading text-base">
          / {isAnnual ? "year" : "month"}
        </span>
      </div>
      <p
        className={clsx({
          "text-text-muted leading-5 opacity-70": true,
          "text-transparent": !description,
        })}
      >
        {description || "-"}
      </p>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx({
                "flex gap-3 leading-6": true,
                "text-text-heading": item.available,
                "text-text-disabled": !item.available,
              })}
            >
              <Image
                src={item.available ? enabledIcon : disabledIcon}
                alt={item.available ? "enabled" : "disabled"}
              />
              {item.label}
            </div>
          );
        })}
      </div>
      <div className="flex-1" />
      <div>
        <button className="btn-primary">
          Get started
        </button>
      </div>
    </div>
  );
};
