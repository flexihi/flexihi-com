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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { memo, useCallback, useMemo, useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import type { CarouselApi } from "@/components/ui/carousel";

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

// Custom navigation controls with fixed positioning
const NavigationControls = memo(function NavigationControls({
  onPrevious,
  onNext,
  currentSlide,
  totalSlides,
  locale,
}: NavigationControlsProps) {
  const arrowClassName = locale === "ar" ? "scale-x-[-1]" : "";
  
  return (
    <div className="flex justify-between items-center mt-6">
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


function Features() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section
      className="w-full flex justify-center mb-20 section-anchor overflow-x-hidden"
      id="features"
      aria-label="FlexiHi product features showcase"
    >
      <div className="max-w-content w-full overflow-x-hidden">
        <h1 className="section-header">{t("title")}</h1>
        <p className="section-description">{t("description")}</p>

        <div role="region" aria-label="Features carousel" className="relative w-full">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-4">
              {slidesList.map((slide) => (
                <CarouselItem key={slide.index} className="pt-10 pb-20 pl-4 basis-full">
                  <article className="w-full">
                    {/* Mobile Layout - Stacked */}
                    <div className="lg:hidden flex flex-col gap-8 items-center">
                      <div className="w-full max-w-md">
                        <Image
                          src={slide.image}
                          alt={`${slide.title} example`}
                          className="object-contain w-full h-auto"
                          width={400}
                          height={300}
                          priority={slide.index === 0}
                          loading={slide.index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <div className="w-full max-w-lg text-center">
                        <h4 className="text-text-primary text-2xl font-bold leading-8 whitespace-pre-line mb-4">
                          {slide.title}
                        </h4>
                        <p className="text-text-secondary leading-8 mb-6">
                          {slide.desc}
                        </p>
                        <NavigationControls
                          onPrevious={handlePrevious}
                          onNext={handleNext}
                          currentSlide={current}
                          totalSlides={TOTAL_FEATURES}
                          locale={locale}
                        />
                      </div>
                    </div>

                    {/* Desktop Layout - Side by Side */}
                    <div className="hidden lg:flex gap-8 justify-center items-start max-w-full">
                      <div className="max-w-[540px] flex flex-col min-h-[400px]">
                        <h4 className="text-text-primary text-2xl font-bold leading-8 whitespace-pre-line mb-6">
                          {slide.title}
                        </h4>
                        <p className="text-text-secondary leading-8 text-justify mb-auto">
                          {slide.desc}
                        </p>
                        <NavigationControls
                          onPrevious={handlePrevious}
                          onNext={handleNext}
                          currentSlide={current}
                          totalSlides={TOTAL_FEATURES}
                          locale={locale}
                        />
                      </div>
                      <div className="relative w-1/2 flex justify-center">
                        <Image
                          src={slide.image}
                          alt={`${slide.title} example`}
                          className="object-contain"
                          width={600}
                          height={400}
                          priority={slide.index === 0}
                          loading={slide.index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// Export memoized component for performance
export default memo(Features);
