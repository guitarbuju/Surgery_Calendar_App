"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import images from "@/public/images";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';

const arrayImg = Object.values(images);

function CarouselSlider() {
  return (
    <div className="flex justify-center items-center  w-[50vw] h-[80vh] ">
      <Carousel
        className=" "
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {arrayImg.map((imag, index) => (
            <CarouselItem key={index} >
              <div >
                <div className="flex flex-col aspect-square items-center justify-center p-6 object-fit ">
                  <Image
                    src={imag}
                    alt=""
                    className="w-[50vw] h-[60vh] rounded-xl"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
export default CarouselSlider;
