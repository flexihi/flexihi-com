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
      <div className="flex gap-4 items-center my-20 text-[#111927] text-lg leading-5">
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
      className="w-full flex flex-col items-center py-20"
      id="pricing"
      style={{
        scrollMarginTop: "100px",
      }}
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
        <div className="flex-1 rounded-xl bg-white shadow-lg p-8 flex flex-col gap-12">
          <div>
            <h4 className="text-primary text-sm font-semibold leading-6 tracking-wide uppercase">
              Custom
            </h4>
            <p className="text-[#161C2D] leading-5 mt-2 opacity-70">
              Looking for more? Contact Us.
            </p>
          </div>
          <div className="flex-1" />
          <div>
            <button className="hover:shadow-md border border-[#3375a980] rounded-xl py-2 px-6 text-primary font-medium leading-7">
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
    <div className="flex-1 rounded-xl bg-white shadow-lg p-8 flex flex-col gap-6">
      <div>
        <h4 className="text-secondary text-sm font-semibold leading-6 tracking-wide uppercase">
          {label}
        </h4>
      </div>
      <div>
        <div className="text-[#111927] text-xl font-bold mb-2">OMR</div>
        <span className="text-[#111927] text-5xl font-bold">{price}</span>
        <span className="text-[#111927] text-base">
          / {isAnnual ? "year" : "month"}
        </span>
      </div>
      <p
        className={clsx({
          "text-[#161C2D] leading-5 opacity-70": true,
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
                "text-[#111927]": item.available,
                "text-[#11192761]": !item.available,
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
        <button className="bg-secondary hover:bg-opacity-90 shadow-md hover:shadow-lg rounded-xl py-2 px-6 text-white font-medium leading-7">
          Get started
        </button>
      </div>
    </div>
  );
};
