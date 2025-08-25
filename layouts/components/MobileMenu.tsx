'use client';

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { HiX } from 'react-icons/hi';
import logo from '@/public/navbar-logo.svg';
import { NAVIGATION_SECTIONS, EXTERNAL_LINKS } from '../constants';
import LangSwitchButton from '../LangSwitchButton';
import LocaleProps from '@/types/LocaleProps';

interface MobileMenuProps extends LocaleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ locale, isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('NavBar');

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Link href="/" onClick={onClose}>
                          <Image src={logo} alt="flexihi logo" className="h-8 w-auto" />
                        </Link>
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                          onClick={onClose}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <HiX className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="flex flex-col space-y-8">
                        <div className="flex flex-col space-y-6">
                          <Link
                            href={NAVIGATION_SECTIONS.features}
                            className="text-text-primary hover:text-secondary transition-colors duration-200 font-medium text-lg"
                            onClick={onClose}
                          >
                            {t('features')}
                          </Link>
                          <Link
                            href={NAVIGATION_SECTIONS.pricing}
                            className="text-text-primary hover:text-secondary transition-colors duration-200 font-medium text-lg"
                            onClick={onClose}
                          >
                            {t('pricing')}
                          </Link>
                          <Link
                            href={NAVIGATION_SECTIONS.faqs}
                            className="text-text-primary hover:text-secondary transition-colors duration-200 font-medium text-lg"
                            onClick={onClose}
                          >
                            {t('faqs')}
                          </Link>
                        </div>
                        
                        <div className="border-t border-gray-200 pt-6">
                          <div className="flex flex-col space-y-4">
                            <a
                              href={EXTERNAL_LINKS.backOffice}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-secondary hover:text-primary transition-colors duration-200 font-medium text-lg"
                              onClick={onClose}
                            >
                              {t('login')}
                            </a>
                            <a
                              href={EXTERNAL_LINKS.backOffice}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary text-center"
                              onClick={onClose}
                            >
                              {t('signUp')}
                            </a>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                          <LangSwitchButton locale={locale} />
                        </div>
                      </nav>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}