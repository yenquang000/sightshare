import Carousel, { CarouselItem } from "@/components/auto-carousel";
import { Link } from "react-router-dom";
import h1 from "@/assets/hp1.JPG";
import h2 from "@/assets/h2.PNG";
import h3 from "@/assets/h3.JPEG";
import h4 from "@/assets/h4.JPEG";
import h5 from "@/assets/h5.PNG";
import h6 from "@/assets/h6.JPEG";
import h7 from "@/assets/h7.JPEG";
import h8 from "@/assets/h8.JPEG";
import h9 from "@/assets/h9.JPEG";
import h10 from "@/assets/h10.JPEG";
import h11 from "@/assets/h11.JPEG";
import h12 from "@/assets/h12.JPEG";

import abus1 from "@/assets/abus1.JPG";
import abus2 from "@/assets/abus2.JPG";
import { ArrowRight } from "lucide-react";

const Homepage = () => {
  return (
    <>
      {/* carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Carousel>
            {[h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12].map(
              (img, index) => (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt={`Homepage slide ${index + 1}`}
                    className="h-screen w-screen object-cover"
                  />
                </CarouselItem>
              ),
            )}
          </Carousel>
        </div>

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="max-w-2xl px-6 text-center text-white">
            <h1 className="mb-4 text-7xl font-bold font-serif">
              Our Vision Comes True
            </h1>
          </div>
        </div>
      </section>

      {/* about us */}
      <section id="about" className="w-full py-24 px-6 bg-[#59769d]">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="mb-6 text-4xl text-white font-serif font-bold">
              About Us
            </h2>

            <p className="text-lg leading-relaxed text-black font-bold mb-6">
              Founded in 2023, Sightshare is 501c3 nonprofit organization
              dedicated to providing support for those facing challenges related
              to visual impairment. <br /> <br /> Sightshare is a youth-led
              nonprofit that works to improve eye health awareness,
              accessibility, and education around the world. We run eye health
              campaigns, organize eye camps, and create advocacy initiatives
              that give young people the chance to make a real difference in
              their communities.
            </p>
            <Link to="/team">
              <button
                className="group bg-white hover:underline cursor-pointer text-[#59769d] font-serif font-bold py-2 px-4 rounded inline-flex items-center   /* 🔑 inline-flex forces single line */
    gap-2 "
              >
                Meet Our Team
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={abus1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* mission statement */}
      <section id="mission" className="w-full bg-gray-50 py-24 px-6">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="mb-6 text-4xl font-serif font-bold text-[#59769d]">
              Our Mission
            </h2>

            <p className="text-lg leading-relaxed text-black font-bold mb-6">
              Our mission is all about collaboration. We bring together youth
              from different schools, cities, and even countries to share the
              same vision. Every chapter is part of a bigger movement that is
              working toward a future where everyone has access to quality eye
              care.
            </p>
            <Link to="/impacts">
              <button
                className="group bg-[#59769d] hover:underline cursor-pointer text-white font-serif font-bold py-2 px-4 rounded inline-flex items-center   /* 🔑 inline-flex forces single line */
    gap-2 "
              >
                Learn about what we do
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
          <div class="w-full lg:w-1/2">
            <img
              src={abus2}
              alt="Mission statement"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
