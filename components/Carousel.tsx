'use client'
// components/ResponsiveCarousel.tsx
import React, { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { ProjectInfo } from "@/app/api/info/route";

interface CarouselProps {
  items: ProjectInfo[];
  autoplayInterval?: number;

}

export default function Carousel({
  items,
  autoplayInterval = 3000,

}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();




  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    autoplayRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, autoplayInterval);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, autoplayInterval]);

  return (
    <div className="relative  w-full">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-1.5 border-2 border-[#037A7F] rounded-full shadow"
      >
        <ChevronLeft className="w-7 h-7 text-gray-200  bg-[#037A7F]/80 hover:bg-[#037A7F] p-1 rounded-full" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-1.5  border-[#037A7F] border-2  rounded-full shadow"
      >
        <div className="bg-[#037A7F]/80 hover:bg-[#037A7F]  p-1 rounded-full">
          <ChevronRight className="w-5 h-5 text-gray-200" />
        </div>

      </button>

      {/* Carousel Track */}
      <div className="overflow-hidden flex items-center justify-center mx-auto md:max-w-3xl xl:max-w-5xl" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-2"
            >
              <Card
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                link={item.link}
                _id={item._id}
                viewUrl={item.viewUrl}
                techs={item.techs}
                properties={item.properties}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={clsx(
              "w-1.5 h-1.5 rounded-full",
              selectedIndex === index ? "bg-black" : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  )
};
