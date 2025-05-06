import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import log from "../public/portrait.jpg";
import log2 from "../public/surgery.jpg";
import log3 from "../public/logo.png";
import Image from "next/image";

const PicsCarousel = () => {
  return (
    <Carousel
    opts={{
        align: "start",
      }}
      className="w-full max-w-sm">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={log} width={300} alt="" />
        </CarouselItem >
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={log2} width={300} alt="" />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Image src={log3} width={300} alt="" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default PicsCarousel;
