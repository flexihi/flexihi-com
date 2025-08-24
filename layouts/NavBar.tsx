import Image from "next/image";
import logo from "@/public/navbar-logo.svg";
import callIcon from "@/public/call-icon.svg";
import whatsappIcon from "@/public/whatsapp-icon.svg";
import emailIcon from "@/public/email-icon.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LangSwitchButton from "./LangSwitchButton";
import LocaleProps from "@/types/LocaleProps";

export default function NavBar({ locale }: LocaleProps) {
  const t = useTranslations("NavBar");

  return (
    <div className="fixed top-0 z-50 flex w-full justify-center px-20 backdrop-blur-md">
      <nav className="w-full max-w-content flex items-center justify-between">
        <ul className="flex gap-4 items-center py-6 text-text-primary">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Image src={logo} alt="flexihi logo" className="me-14" />
          </Link>
          <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
            <Link href="/#features">{t("features")}</Link>
          </li>
          <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
            <Link href="/#pricing">{t("pricing")}</Link>
          </li>
          <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
            <Link href="/#faqs">{t("faqs")}</Link>
          </li>
          <div className="px-3">|</div>
          <a href="tel:+96896747611" target="_blank" rel="noopener noreferrer">
            <Image
              src={callIcon}
              alt="call icon"
              width={24}
              height={24}
              className="mx-1"
            />
          </a>
          <a
            href="https://wa.me/+96896747611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={whatsappIcon}
              alt="whatsapp icon"
              width={24}
              height={24}
              className="mx-1"
            />
          </a>
          <a
            href="mailto:sales@flexihi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={emailIcon}
              alt="email icon"
              width={24}
              height={24}
              className="mx-1"
            />
          </a>
        </ul>
        <ul className="flex gap-8 items-center py-6 text-text-primary">
          <a
            href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-secondary font-medium leading-6 hover:text-primary transition-colors duration-200"
              type="button"
            >
              {t("login")}
            </button>
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="text-white font-medium leading-6 rounded-xl bg-secondary px-6 py-2 hover:bg-primary hover:shadow-md transition-all duration-200"
              type="button"
            >
              {t("signUp")}
            </button>
          </a>
          <LangSwitchButton locale={locale} />
        </ul>
      </nav>
    </div>
  );
}
