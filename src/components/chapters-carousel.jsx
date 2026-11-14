import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
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
import francisLewis from "@/assets/flewis.JPG";
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
  {
    title: "Francis Lewis HS",
    location: "New York",
    image: francisLewis,
  },
];

export default function ChaptersCarousel() {
  return (
    <div className="relative">
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {chapters.map((chapter, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] sm:basis-1/2 lg:basis-1/4"
            >
              <Card className="group h-full gap-0 overflow-hidden p-0">
                <CardContent className="flex h-full flex-col p-0">
                  {/* Image (fixed ratio) */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-rule">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Text container */}
                  <div className="flex flex-grow flex-col justify-between gap-3 p-5 text-left">
                    <h3 className="line-clamp-2 font-serif text-lg leading-snug">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-smoke">{chapter.location}</p>
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
