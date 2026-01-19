import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import p from "@/assets/p.jpg";
import Elro from "@/assets/elro.JPG";
import Emory from "@/assets/emory.JPG";
import Cresenta from "@/assets/cresenta.JPG";
import Riverside from "@/assets/riverside.JPG";
import Leadership from "@/assets/leadership.jpg";
import Stuy from "@/assets/StuyHS.JPG";
import Aviation from "@/assets/aviation.JPG";
import Herricks from "@/assets/herricks.JPG";
import GreatNeck from "@/assets/greatneck.JPG";
import James from "@/assets/james.JPG";

const chapters = [
  {
    title: "Eleanor Roosevelt HS",
    location: "New York",
    image: Elro,
  },
  {
    title: "Emory Univeristy",
    location: "Georgia",
    image: Emory,
  },
  {
    title: "La Crescenta Valley School",
    location: "California",
    image: Cresenta,
  },
  {
    title: "Riverside HS",
    location: "South Carolina",
    image: Riverside,
  },
  {
    title: "International Leadership of Texas, Garland HS",
    location: "Texas",
    image: Leadership,
  },
  {
    title: "Stuyvesant HS",
    location: "New York",
    image: Stuy,
  },
  {
    title: "Aviation HS",
    location: "New York",
    image: Aviation,
  },
  {
    title: "Herricks HS",
    location: "New York",
    image: Herricks,
  },
  {
    title: "Greatneck South HS",
    location: "New York",
    image: GreatNeck,
  },
  {
    title: "James E. Taylor HS",
    location: "Texas",
    image: James,
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
