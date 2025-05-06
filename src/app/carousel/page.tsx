"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import log from "../../public/logo.png";
import log2 from "../../public/surgery.jpg";
import log3 from "../../public/portrait.jpg";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex">
          <div className="">
            <img src={log}  />
          </div>
          <div className="">
            <img src={log2}  />
          </div>
          <div className="">
            <img src={log3}  />
          </div>
          <div className="">
            <img src={log}  />
          </div>
          <div className="">
            <img src={log2} />
          </div>
          <div className="">
            <img src={log3}/>
          </div>
          <div className="">
            <img src={log}  />
          </div>
          <div className="">
            <img src={log2}  />
          </div>
          <div className="">
            <img src={log3}  />
          </div>
        </div>
      </div>
      <Button className="embla__prev" onClick={scrollPrev}>
        Prev
      </Button>
      <Button className="embla__prev" onClick={scrollNext}>
        Next
      </Button>
    </div>
  );
}
