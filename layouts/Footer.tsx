import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import footerLogo from "@/public/footer-logo.svg";
import appStoreButton from "@/public/footer-app-store-button.svg";
import googlePlayButton from "@/public/footer-google-play-button.svg";
import SocialLinks from "./components/SocialLinks";
import { CONTACT_INFO, APP_LINKS, EXTERNAL_LINKS } from './constants';
import LocaleProps from "@/types/LocaleProps";

export default function Footer({ locale }: LocaleProps) {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _ = locale; // Keeping for future RTL support

  return (
    <div className="flex w-full justify-center py-16 px-28 bg-white text-text-primary leading-7 border-t border-[#E5E7EB]">
      <div className="max-w-content w-full">
        <div className="w-full flex gap-4 items-start justify-between">
          <div className="flex flex-col gap-6 items-start">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image src={footerLogo} alt="logo" />
            </Link>
            <div>
              {t("affiliate")}{" "}
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                {t("contactUs")}
              </a>
            </div>
            <div className="flex gap-6 items-center text-sm">
              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors duration-200"
              >
                {t("termsConditions")}
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-200"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="/refund-policy"
                className="hover:text-primary transition-colors duration-200"
              >
                {t("refundPolicy")}
              </Link>
              <a
                href={EXTERNAL_LINKS.backOffice}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                {t("backOffice")}
              </a>
            </div>
            <div className="text-sm text-text-secondary">
              {t("copyright", { year: currentYear })}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start text-text-secondary">
            <div>{t("getApp")}</div>
            <div className="flex items-center gap-4">
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={appStoreButton} alt="app store" />
              </a>
              <a
                href={APP_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={googlePlayButton} alt="google play" />
              </a>
            </div>
            <SocialLinks className="mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
