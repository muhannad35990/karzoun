"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const partners = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
  "/images/partners/11.png",
  "/images/partners/12.png",
  "/images/partners/13.png",
  "/images/partners/14.png",
  "/images/partners/15.png",
  "/images/partners/16.png",
  "/images/partners/17.png",
  "/images/partners/18.png",
  "/images/partners/19.png",
  "/images/partners/20.png",
  "/images/partners/21.png",
  "/images/partners/22.png",
  "/images/partners/23.png",
  "/images/partners/24.png",
  "/images/partners/25.png",
  "/images/partners/26.png",
  "/images/partners/27.png",
  "/images/partners/28.png",
  "/images/partners/29.png",
  "/images/partners/30.png"
]
export function HomePartners() {
  return (
    <div className="p-16 flex flex-col items-center w-full my-8">
      <h1 className="text-3xl font-semibold mb-8">
        يثق في كرزون اكثر من 12000 مؤسسة حول الوطن العربي
      </h1>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}
        className="w-full"
      >
        <CarouselContent>
          {partners.map((item: string, index: number) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3  md:basis-1/4 lg:basis-1/6"
            >
              <div className="p-1 w-[150px] h-[50px]">
                <Image
                  width={150}
                  height={50}
                  alt={item}
                  src={item}
                  className="contain w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
