import ChaptersCarousel from "../components/chapters-carousel";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import c from "@/assets/c.JPG";
import sg from "@/assets/starterguide.jpg";

import { MyMap } from "../components/chapters-map";

export default function Chapters() {
  return (
    <section id="chapters">
      <div className="relative h-3/4 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${c})` }}
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex h-full items-center justify-center">
          <div className="max-w-2xl px-6 text-center text-white">
            <h1 className="mb-4 text-7xl font-bold font-serif">
              A Network of Vision
            </h1>
          </div>
        </div>
      </div>
      <div className=" text-center w-full py-6 px-15 bg-[#59769d]">
        <h2 className="text-3xl md:text-4xl mb-6 font-bold font-serif text-white text-center text-white ">
          Sightshare Chapters
        </h2>
        <p className="text-lg leading-relaxed text-black font-bold mb-6">
          A Sightshare chapter is a local branch of our nonprofit dedicated to
          supporting vision impaired patients. <br />
          Chapters range from 6 to 50+ members and can be formed as school
          clubs, community groups, or statewide initiatives.
        </p>
        <ChaptersCarousel />
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white text-center text-white mb-6 mt-6 ">
          Schools that participated in Sightshare
        </h2>
        <p className="text-lg leading-relaxed text-black font-bold mb-6">
          A High schools and colleges that have participated in activities of
          Sightshare, such as the voice letters activities, glasses drive, and
          presentations about visual impairment
        </p>
        <MyMap />
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="mb-6 text-4xl text-white font-serif font-bold">
              Ready to get involved?
            </h2>

            <p className="text-lg leading-relaxed text-black font-bold mb-6">
              Sightshare is excited to have you join our journey. <br /> View
              our Starter Guide to get started ! <br /> After viewing, please
              fill out the INTEREST FORM
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScbm2RLzLFGo-SIg_hcDnl7LwI5Zznh4qlec7wONZmBZeyqfg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:underline text-[#59769d] font-serif font-bold py-2 px-4 rounded inline-flex items-center"
            >
              Interest Form
            </a>
          </div>
          <div className="w-full lg:w-1/2 mt-8">
            <a
              href="/sightshare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <img
                src={sg}
                alt="Click here to view the Starter Guide"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
