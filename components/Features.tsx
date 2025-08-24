"use client";

import Image, { StaticImageData } from "next/image";
import featureImage1 from "@/public/features-1.svg";
import featureImage2 from "@/public/features-2.svg";
import featureImage3 from "@/public/features-3.svg";
import featureImage4 from "@/public/features-4.svg";
import featureImage5 from "@/public/features-5.svg";
import featureImage6 from "@/public/features-6.svg";
import featureImage7 from "@/public/features-7.svg";
import featureImage8 from "@/public/features-8.svg";
import arrowForward from "@/public/features-arrow-forward.svg";
import arrowBack from "@/public/features-arrow-back.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import {
  A11y,
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
// Import only the CSS modules we need instead of the full bundle
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/keyboard";
import { useState } from "react";
import LocaleProps from "@/types/LocaleProps";
import { useTranslations } from "next-intl";

interface FeatureProps {
  image: StaticImageData;
  title: string;
  desc: string;
}

export default function Features({ locale }: LocaleProps) {
  const [swiper, setSwiper] = useState<SwiperType>();
  const t = useTranslations("Features");

  const slidesList: FeatureProps[] = [
    {
      title: t("feature1.title"),
      desc: t("feature1.description"),
      image: featureImage1,
    },
    {
      title: t("feature2.title"),
      desc: t("feature2.description"),
      image: featureImage2,
    },
    {
      title: t("feature3.title"),
      desc: t("feature3.description"),
      image: featureImage3,
    },
    {
      title: t("feature4.title"),
      desc: t("feature4.description"),
      image: featureImage4,
    },
    {
      title: t("feature5.title"),
      desc: t("feature5.description"),
      image: featureImage5,
    },
    {
      title: t("feature6.title"),
      desc: t("feature6.description"),
      image: featureImage6,
    },
    {
      title: t("feature7.title"),
      desc: t("feature7.description"),
      image: featureImage7,
    },
    {
      title: t("feature8.title"),
      desc: t("feature8.description"),
      image: featureImage8,
    },
  ];

  return (
    <div
      className="w-full flex justify-center mb-20 section-anchor"
      id="features"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>

        <div>
          <Swiper
            onSwiper={(swiper) => setSwiper(swiper)}
            modules={[Navigation, Autoplay, Keyboard, Pagination, A11y, Thumbs]}
            pagination={{
              enabled: true,
            }}
            loop={true}
          >
            {slidesList.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="pt-10 pb-20">
                  <div className="w-full flex gap-8 justify-center items-center">
                    <div className="max-w-[540px] flex flex-col gap-6">
                      <h4 className="text-text-primary text-2xl font-bold leading-8 whitespace-pre-line">
                        {slide.title}
                      </h4>
                      <p className="text-text-secondary leading-8 text-justify">
                        {slide.desc}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          {/* 
                        className={clsx({
                            "flex gap-4": true,
                            "flex-row": locale === "en",
                            "flex-row-reverse": locale === "ar",
                          })} */}
                          <button
                            onClick={() => {
                              if (!swiper) return;
                              if (index !== 0) {
                                swiper.slideTo(index - 1);
                              } else {
                                swiper.slideTo(slidesList.length - 1);
                              }
                            }}
                            type="button"
                            className="btn-icon"
                          >
                            <Image
                              src={locale === "en" ? arrowBack : arrowForward}
                              alt="back arrow"
                            />
                          </button>
                          <button
                            onClick={() => {
                              if (!swiper) return;
                              if (index < slidesList.length - 1) {
                                swiper.slideTo(index + 1);
                              } else {
                                swiper.slideTo(0);
                              }
                            }}
                            type="button"
                            className="btn-icon"
                          >
                            <Image
                              src={locale === "en" ? arrowForward : arrowBack}
                              alt="forward arrow"
                            />
                          </button>
                        </div>
                        <div className="text-text-secondary font-medium leading-6">
                          {index + 1}/8
                        </div>
                      </div>
                    </div>
                    <div className="relative w-1/2 flex justify-center">
                      <Image
                        src={slide.image}
                        alt={`${slide.title} example`}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
