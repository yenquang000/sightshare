import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import p from "@/assets/p.jpg";
const chapters = [
  {
    title: "Eleanor Roosevelt HS",
    location: "New York",
    image: p,
  },
  {
    title: "Emory Univeristy",
    location: "Georgia",
    image: p,
  },
  {
    title: "La Crescenta Valley School",
    location: "California",
    image: p,
  },
  {
    title: "Riverside HS",
    location: "South Carolina",
    image: p,
  },
  {
    title: "International Leadership of Texas, Garland HS",
    location: "Texas",
    image: p,
  },
  {
    title: "Stuyvesant HS",
    location: "New York",
    image: p,
  },
  {
    title: "Aviation HS",
    location: "New York",
    image: p,
  },
  {
    title: "Herricks HS",
    location: "New York",
    image: p,
  },
  {
    title: "Greatneck South HS",
    location: "New York",
    image: p,
  },
  {
    title: "James E. Taylor HS",
    location: "Texas",
    image: p,
  },
];

export default function ChaptersCarousel() {
  return (
    <div className="relative max-w-6xl mx-auto">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {chapters.map((chapter, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/2 lg:basis-1/4"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-xl">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image (fixed ratio) */}
                  <div className="relative w-full aspect-[16/9]">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  {/* Text container */}
                  <div className="flex flex-col justify-center text-center p-3 flex-grow">
                    <h3 className="text-base font-semibold line-clamp-2">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {chapter.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
