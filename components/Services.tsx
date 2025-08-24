import Image from "next/image";
import supportIcon from "@/public/services-support.svg";
import speedIcon from "@/public/services-speed.svg";
import installmentIcon from "@/public/services-installment.svg";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <div className="w-full bg-[#ef6c000a] flex justify-center">
      <div className="max-w-content w-full py-24 px-28">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>
        <ul className="flex gap-12">
          <li className="flex-1">
            <Image src={supportIcon} alt="support icon" />
            <h3 className="mt-9 text-text-primary text-lg font-bold leading-5">
              {t("support.title")}
            </h3>
            <p className="mt-4 text-text-secondary leading-8 text-justify">
              {t("support.description")}
            </p>
          </li>
          <li className="flex-1">
            <Image src={speedIcon} alt="speed icon" />
            <h3 className="mt-9 text-text-primary text-lg font-bold leading-5">
              {t("speed.title")}
            </h3>
            <p className="mt-4 text-text-secondary leading-8 text-justify">
              {t("speed.description")}
            </p>
          </li>
          <li className="flex-1">
            <Image src={installmentIcon} alt="installation icon" />
            <h3 className="mt-9 text-text-primary text-lg font-bold leading-5">
              {t("installation.title")}
            </h3>
            <p className="mt-4 text-text-secondary leading-8 text-justify">
              {t("installation.description")}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
