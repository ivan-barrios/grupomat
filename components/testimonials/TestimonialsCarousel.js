"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

import { testimonials } from "./testimonialsData";

import { useLocale } from "next-intl";

const TestimonialsCarousel = () => {
  const locale = useLocale();

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Carousel setApi={setApi} className="w-full max-lg:max-w-[400px]">
        <CarouselContent className="">
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="lg:basis-1/2 xl:basis-1/3">
              <TestimonialCard
                name={testimonial.name}
                testimonial={
                  locale === "es" ? testimonial.palabras : testimonial.words
                }
                profilePicture={testimonial.profilePicture}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
        <CarouselNext className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
      </Carousel>
      <div className="flex items-center justify-center gap-2 md:hidden z-10 h-[20px]">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 w-2 h-2 rounded-full bg-white ${
              current === i + 1
                ? "p-2 drop-shadow-[0_0px_10px_#FFF]"
                : "bg-opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
