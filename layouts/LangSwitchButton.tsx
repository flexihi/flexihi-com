"use client";

import LocaleProps from "@/types/LocaleProps";
import { setCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function LangSwitchButton({ locale }: LocaleProps) {
  const router = useRouter();

  const cb = () => {
    setCookie("lang", locale === "en" ? "ar" : "en");
    router.refresh();
  };

  const t = useTranslations("NavBar");

  return (
    <li className="font-medium leading-6 ps-6 hover:text-primary transition-colors duration-200">
      <button onClick={cb}>{t("lang")}</button>
    </li>
  );
}
