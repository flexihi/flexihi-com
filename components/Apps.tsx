import Image from "next/image";
import appStoreButton from "@/public/apps-app-store-button.svg";
import googlePlayButton from "@/public/apps-google-play-button.svg";
import tabletAndPhone from "@/public/tablet-and-phone.png";
import { useTranslations } from "next-intl";

export default function Apps() {
  const t = useTranslations("Apps");

  return (
    <div className="w-full flex justify-center bg-primary-light text-white">
      <div className="max-w-content w-full flex justify-between">
        <div className="flex flex-col gap-8 pl-20 py-20">
          <h5 className="text-3xl font-bold leading-9">{t("title")}</h5>
          <p className="leading-8">{t("description")}</p>

          <div className="flex items-center gap-4">
            <a
              href={`${process.env.NEXT_PUBLIC_APP_STORE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-16 w-48">
                <Image
                  src={appStoreButton}
                  alt="app store"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_GOOGLE_PLAY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-16 w-48">
                <Image
                  src={googlePlayButton}
                  alt="google play"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="relative w-4/5 h-full">
          <Image
            src={tabletAndPhone}
            alt="flexihi on tablets and phones"
            className="object-contain absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
