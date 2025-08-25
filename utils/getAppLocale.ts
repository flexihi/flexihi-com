import { getLocale } from "next-intl/server";
import { LocaleType } from "@/types/LocaleProps";

export default async function getAppLocale(): Promise<LocaleType> {
  const currentLocale = await getLocale();
  return currentLocale === "en" ? "en" : "ar";
}