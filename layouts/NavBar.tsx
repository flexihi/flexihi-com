'use client';

import { useState } from 'react';
import Image from "next/image";
import logo from "@/public/navbar-logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { HiMenu } from 'react-icons/hi';
import LangSwitchButton from "./LangSwitchButton";
import MobileMenu from "./components/MobileMenu";
import ContactIcons from "./components/ContactIcons";
import ErrorBoundary from "./components/ErrorBoundary";
import { NAVIGATION_SECTIONS, EXTERNAL_LINKS } from './constants';
import LocaleProps from "@/types/LocaleProps";

export default function NavBar({ locale }: LocaleProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("NavBar");

  return (
    <>
      <div className="fixed top-0 z-50 flex w-full justify-center px-4 sm:px-8 lg:px-20 backdrop-blur-md">
        <nav className="w-full max-w-content flex items-center justify-between">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-4 items-center py-6 text-text-primary">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image 
                src={logo} 
                alt="flexihi logo" 
                className="me-14" 
                priority 
                sizes="(max-width: 768px) 120px, 140px"
              />
            </Link>
            <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
              <Link href={NAVIGATION_SECTIONS.features}>{t("features")}</Link>
            </li>
            <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
              <Link href={NAVIGATION_SECTIONS.pricing}>{t("pricing")}</Link>
            </li>
            <li className="font-medium leading-6 mx-1 hover:text-secondary transition-colors duration-200">
              <Link href={NAVIGATION_SECTIONS.faqs}>{t("faqs")}</Link>
            </li>
            <div className="px-3">|</div>
            <ErrorBoundary fallback={<div className="text-xs text-red-500">Contact icons unavailable</div>}>
              <ContactIcons />
            </ErrorBoundary>
          </ul>

          {/* Mobile Logo */}
          <div className="flex md:hidden items-center py-6">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image 
                src={logo} 
                alt="flexihi logo" 
                className="h-8 w-auto" 
                priority 
                sizes="120px"
              />
            </Link>
          </div>

          {/* Desktop Right Section */}
          <ul className="hidden md:flex gap-8 items-center py-6 text-text-primary">
            <a
              href={EXTERNAL_LINKS.backOffice}
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
              href={EXTERNAL_LINKS.backOffice}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-text-primary hover:text-secondary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        locale={locale} 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
}
