import p from "@/assets/p.JPG";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import gi from "@/assets/gi.PNG";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partners = [
  { avatar: p1 },
  { avatar: p2 },
  { avatar: p3 },
  { avatar: p4 },
  { avatar: p5 },
  { avatar: p6 },
];

const sponsors = [{ avatar: p7 }];

export default function Partnerships() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative h-3/4 w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${p})` }}
          />

          <div className="absolute inset-0 bg-black/50 z-10" />

          <div className="relative z-20 flex h-full items-center justify-center">
            <div className="max-w-2xl px-6 text-center text-white">
              <h1 className="mb-4 text-7xl font-bold font-serif">
                Sponsors & Partners
              </h1>
              <p className="text-lg">
                Our sponsors and partners play a crucial role in our journey
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 py-6 px-15">
          <div className="mx-auto max-w-6xl">
            {/* partners */}
            <h2 className="text-center mb-12 text-4xl font-serif font-bold text-[#59769d]">
              Our Partners
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md"
                >
                  <img
                    src={partner.avatar}
                    alt="Partner logo"
                    className="max-h-40 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* sponsors */}
            <h2 className="text-center mt-16 mb-12 text-4xl font-serif font-bold text-[#59769d]">
              Our Sponsors
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md"
                >
                  <img
                    src={sponsor.avatar}
                    alt="Sponsor logo"
                    className="max-h-40 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-24 px-6 bg-[#59769d]">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="mb-6 text-4xl text-white font-serif font-bold">
              Get involved
            </h2>

            <p className="text-lg leading-relaxed text-black font-bold mb-6">
              If you have any interest in learning more about our team's
              initiatives and objectives, we warmly welcome you to contact us at
              sightshare.org@gmail.com for any questions you may have.
            </p>
            <Link to="/chapters">
              <button
                className="group bg-white hover:underline cursor-pointer text-[#59769d] font-serif font-bold py-2 px-4 rounded inline-flex items-center   /* 🔑 inline-flex forces single line */
    gap-2 "
              >
                Start A Chapter
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={gi}
              alt="Get involved"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
