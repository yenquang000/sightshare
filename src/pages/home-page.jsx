import Carousel, { CarouselItem } from "@/components/auto-carousel";
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
import {
  CtaLink,
  Container,
  Doodle,
  InkPanel,
} from "@/components/ui/paper";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";

const partnerLogos = [p1, p2, p3, p4, p5, p6, p7];

const Homepage = () => {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pt-16 md:pt-24">
        <Container className="relative">
          <Doodle
            name="eye"
            className="absolute top-0 left-4 hidden w-24 -rotate-12 md:block lg:left-16"
          />
          <Doodle
            name="heart"
            className="absolute top-28 right-6 hidden w-16 rotate-12 md:block lg:right-24"
          />
          <Doodle
            name="sparkle"
            className="absolute top-2 right-40 hidden w-10 lg:block"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="kicker mb-6">
              <span className="size-1.5 rounded-full bg-brand" />
              Youth-led nonprofit for eye health
            </p>
            <h1 className="display text-ink">
              Our Vision <br className="hidden sm:block" />
              Comes <span className="mark">True</span>
            </h1>
            <p className="subhead mx-auto mt-6 max-w-lg text-[17px]">
              Improving eye health and visually impaired awareness,
              accessibility, and education around the world.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CtaLink to="/chapters">Start a chapter</CtaLink>
              <CtaLink to="/donate" tone="ghost" arrow={false}>
                Donate
              </CtaLink>
            </div>
          </div>

          {/* carousel */}
          <div className="relative mt-14 h-[52vh] min-h-[300px] overflow-hidden rounded-[10px] border border-rule bg-halo md:mt-20 md:h-[70vh]">
            <Carousel>
              {[h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12].map(
                (img, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={img}
                      alt={`Homepage slide ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </CarouselItem>
                ),
              )}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* partner strip */}
      <section className="pt-16 md:pt-20">
        <Container>
          <p className="text-center text-sm text-smoke">
            Working alongside partners and sponsors
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {partnerLogos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner logo"
                className="h-12 w-auto object-contain opacity-80 mix-blend-multiply grayscale transition hover:opacity-100 hover:grayscale-0 md:h-14"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* about us */}
      <section id="about" className="scroll-mt-24 pt-24 md:pt-32">
        <Container>
          <div className="grid overflow-hidden rounded-[10px] border border-rule lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <p className="kicker mb-4">Who we are</p>
              <h2 className="heading text-ink">About Us</h2>
              <p className="prose-body mt-6">
                Sightshare is a youth-led nonprofit that works to improve eye
                health and visually impaired awareness, accessibility, and
                education around the world. We bridge the gap between the sighted
                youth community and the visually impaired, run eye health
                campaigns, and fund eye camps.
              </p>
              <div className="mt-8">
                <CtaLink to="/team" tone="ghost">
                  Meet Our Team
                </CtaLink>
              </div>
            </div>
            <div className="border-t border-rule lg:border-t-0 lg:border-l">
              <img
                src={abus1}
                alt="About Us"
                className="h-full min-h-[300px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* mission statement */}
      <InkPanel className="mt-24 md:mt-32">
        <section id="mission" className="scroll-mt-24">
          <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm text-brand-light">What drives us</p>
              <h2 className="heading">Our Mission</h2>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-ivory/80">
                Our mission is all about collaboration. We bring together youth
                from different schools, cities, and even countries to share the
                same vision. Every chapter is part of a bigger movement that is
                working toward a future where everyone has access to quality eye
                care.
              </p>
              <div className="mt-8">
                <CtaLink to="/impacts" tone="ghost-light">
                  Learn about what we do
                </CtaLink>
              </div>
            </div>
            <div className="relative">
              <Doodle
                name="globe"
                className="absolute -top-10 -right-2 z-10 hidden w-20 rotate-12 text-ivory md:block"
              />
              <img
                src={abus2}
                alt="Mission statement"
                className="max-h-[520px] w-full rounded-[10px] border border-ivory/15 object-cover"
              />
            </div>
          </Container>
        </section>
      </InkPanel>
    </>
  );
};

export default Homepage;
