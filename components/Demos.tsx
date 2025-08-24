import Image, { StaticImageData } from "next/image";
import DemoImage1 from "@/public/demo-retail.svg";
import DemoImage2 from "@/public/demo-boutique.svg";
import DemoImage3 from "@/public/demo-flowers.svg";
import DemoImage4 from "@/public/demo-cafe.svg";
import DemoImage5 from "@/public/demo-service.svg";
import DemoImage6 from "@/public/demo-wholesale.svg";
import iphone from "@/public/iphone.png";

import arrowIcon from "@/public/demo-open-button-arrow.svg";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import LocaleProps from "@/types/LocaleProps";

export default function Demos({ locale }: LocaleProps) {
  const t = useTranslations("Demos");

  const DemoItem = ({
    icon,
    title,
    list,
  }: {
    icon: StaticImageData;
    title: string;
    list: string[];
  }) => {
    return (
      <div className="group border border-[#E5E7EB] rounded-xl px-11 py-6 hover:border-primary-light hover:bg-primary-lightest hover:shadow-sm transition-all duration-200">
        <Image src={icon} alt={`${title} icon`} />
        <h3 className="text-[#111927] group-hover:text-primary text-2xl font-medium leading-7 mt-6 transition-all duration-200">
          {title}
        </h3>
        <ul className="mt-3">
          {list.map((child, index) => {
            return (
              <li key={index} className="text-[#6C737F] leading-6">
                {child}
              </li>
            );
          })}
        </ul>

        <button
          className="mt-8 text-secondary border border-[#ef6c0080] hover:shadow-md rounded-xl px-6 py-3 flex gap-2 items-center transition-shadow duration-200"
          type="button"
        >
          Open demo
          <Image
            src={arrowIcon}
            alt="arrow"
            className={clsx({
              "scale-x-[-1]": locale === "ar",
            })}
          />
        </button>
      </div>
    );
  };

  return (
    <div
      className="w-full flex justify-center bg-white py-20"
      id="demos"
      style={{
        scrollMarginTop: "80px",
      }}
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        <div className="flex justify-between mt-12">
          <div className="grid grid-cols-2 gap-8">
            <DemoItem
              icon={DemoImage1}
              title="Retail Stores"
              list={[
                "Clothing store",
                "Electronic store",
                "Cold store",
                "Grocery store",
              ]}
            />
            <DemoItem
              icon={DemoImage2}
              title="Boutique Shops"
              list={[
                "Clothing store",
                "Electronic store",
                "Cold store",
                "Grocery store",
              ]}
            />
            <DemoItem
              icon={DemoImage3}
              title="Flower shops"
              list={[
                "Clothing store",
                "Electronic store",
                "Cold store",
                "Grocery store",
              ]}
            />
            <DemoItem
              icon={DemoImage4}
              title="Cafe & Restaurants"
              list={[
                "Clothing store",
                "Electronic store",
                "Cold store",
                "Grocery store",
              ]}
            />
            <DemoItem
              icon={DemoImage5}
              title="Service Business"
              list={["Saloon", "Repair service"]}
            />
            <DemoItem
              icon={DemoImage6}
              title="Wholesale & Warehouse"
              list={[
                "Clothing store",
                "Electronic store",
                "Cold store",
                "Grocery store",
              ]}
            />
          </div>
          <div className="w-[480px] h-[960px]">
            <Image src={iphone} alt="iphone" width={480} height={960} />
          </div>
        </div>
      </div>
    </div>
  );
}
