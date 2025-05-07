"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import images from "@/public/images";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay';

const arrayImg = Object.values(images);

function CarouselSlider() {
  return (
    <div className=" justify-center items-center hidden lg:flex ">
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
            <CarouselItem key={index} className="flex items-center justify-center">
              <div >
                
                  <Image
                    src={imag}
                    alt=""
                    className="w-[70vw] h-[70vh] rounded-xl"
                  />
               
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
