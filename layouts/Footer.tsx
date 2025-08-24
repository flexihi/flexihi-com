import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/public/footer-logo.svg";
import appStoreButton from "@/public/footer-app-store-button.svg";
import googlePlayButton from "@/public/footer-google-play-button.svg";
import youtubeIcon from "@/public/youtube.svg";
import facebookIcon from "@/public/facebook.svg";
import twitterIcon from "@/public/twitter.svg";
import instagramIcon from "@/public/instagram.svg";

export default function Footer() {
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
              Want to become an affiliate?{" "}
              <a
                href="tel:+96896747611"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary hover:text-primary transition-colors duration-200"
              >
                Contact us
              </a>
            </div>
            <div className="flex gap-6 items-center text-sm">
              <Link
                href="/terms-and-conditions"
                className="hover:text-primary transition-colors duration-200"
              >
                Terms & conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="hover:text-primary transition-colors duration-200"
              >
                Refund Policy
              </Link>
              <a
                href={`${process.env.NEXT_PUBLIC_BACK_OFFICE_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Back office
              </a>
            </div>
            <div className="text-sm text-text-secondary">
              © 2024 FlexiHi. All rights reserved
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start text-text-secondary">
            <div>Get the App</div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={appStoreButton} alt="app store" />
              </a>
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={googlePlayButton} alt="google play" />
              </a>
            </div>
            <div className="flex gap-4 items-center mt-2">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtubeIcon} alt="youtube" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebookIcon} alt="facebook" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitterIcon} alt="twitter" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagramIcon} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
