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
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
// Import only the CSS modules we actually need
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { memo, useCallback, useMemo, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";

// Constants for better maintainability
const TOTAL_FEATURES = 8;
const FEATURE_IMAGES = [
  featureImage1, featureImage2, featureImage3, featureImage4,
  featureImage5, featureImage6, featureImage7, featureImage8,
];

interface FeatureProps {
  image: StaticImageData;
  title: string;
  desc: string;
  index: number;
}

interface NavigationControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
  locale: string;
}

interface FeatureSlideProps {
  feature: FeatureProps;
  onPrevious: () => void;
  onNext: () => void;
  locale: string;
}

// Memoized navigation controls component
const NavigationControls = memo(function NavigationControls({
  onPrevious,
  onNext,
  currentSlide,
  totalSlides,
  locale,
}: NavigationControlsProps) {
  const arrowClassName = locale === "ar" ? "scale-x-[-1]" : "";
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <button
          onClick={onPrevious}
          type="button"
          className="btn-icon focus-ring"
          aria-label={`Previous feature (${currentSlide}/${totalSlides})`}
        >
          <Image
            src={arrowBack}
            alt="previous slide"
            className={arrowClassName}
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={onNext}
          type="button"
          className="btn-icon focus-ring"
          aria-label={`Next feature (${currentSlide + 2}/${totalSlides})`}
        >
          <Image
            src={arrowForward}
            alt="next slide"
            className={arrowClassName}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div 
        className="text-text-secondary font-medium leading-6"
        aria-live="polite"
      >
        {currentSlide + 1}/{totalSlides}
      </div>
    </div>
  );
});

// Memoized feature slide component
const FeatureSlide = memo(function FeatureSlide({
  feature,
  onPrevious,
  onNext,
  locale,
}: FeatureSlideProps) {
  return (
    <article className="w-full flex gap-8 justify-center items-center">
      <div className="max-w-[540px] flex flex-col gap-6">
        <h4 className="text-text-primary text-2xl font-bold leading-8 whitespace-pre-line">
          {feature.title}
        </h4>
        <p className="text-text-secondary leading-8 text-justify">
          {feature.desc}
        </p>
        <NavigationControls
          onPrevious={onPrevious}
          onNext={onNext}
          currentSlide={feature.index}
          totalSlides={TOTAL_FEATURES}
          locale={locale}
        />
      </div>
      <div className="relative w-1/2 flex justify-center">
        <Image
          src={feature.image}
          alt={`${feature.title} example`}
          className="object-contain"
          width={600}
          height={400}
          priority={feature.index === 0}
          loading={feature.index === 0 ? "eager" : "lazy"}
        />
      </div>
    </article>
  );
});

function Features() {
  const swiperRef = useRef<SwiperType>();
  const t = useTranslations("Features");
  const locale = useLocale();

  // Memoize slides list to prevent recreation on every render
  const slidesList = useMemo<FeatureProps[]>(() => {
    return Array.from({ length: TOTAL_FEATURES }, (_, index) => ({
      title: t(`feature${index + 1}.title`),
      desc: t(`feature${index + 1}.description`),
      image: FEATURE_IMAGES[index],
      index,
    }));
  }, [t]);

  // Optimized navigation handlers with useCallback
  const handlePrevious = useCallback((currentIndex: number) => {
    if (!swiperRef.current) return;
    const targetIndex = currentIndex === 0 ? TOTAL_FEATURES - 1 : currentIndex - 1;
    swiperRef.current.slideTo(targetIndex);
  }, []);

  const handleNext = useCallback((currentIndex: number) => {
    if (!swiperRef.current) return;
    const targetIndex = (currentIndex + 1) % TOTAL_FEATURES;
    swiperRef.current.slideTo(targetIndex);
  }, []);

  return (
    <section
      className="w-full flex justify-center mb-20 section-anchor"
      id="features"
      aria-label="FlexiHi product features showcase"
    >
      <div className="max-w-content w-full">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>

        <div role="region" aria-label="Features carousel">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Keyboard, Pagination, A11y]}
            pagination={{
              enabled: true,
              clickable: true,
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            a11y={{
              prevSlideMessage: 'Previous feature',
              nextSlideMessage: 'Next feature',
              slideLabelMessage: 'Feature {{index}} of {{slidesLength}}',
            }}
            loop={true}
            lazy={true}
          >
            {slidesList.map((slide) => (
              <SwiperSlide key={slide.index} className="pt-10 pb-20">
                <FeatureSlide
                  feature={slide}
                  onPrevious={() => handlePrevious(slide.index)}
                  onNext={() => handleNext(slide.index)}
                  locale={locale}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Features);
