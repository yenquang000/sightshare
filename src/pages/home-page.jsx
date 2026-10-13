import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
import ghana from "@/assets/ghana.JPG";
import voiceletters from "@/assets/voiceletters.JPG";
import interviewing from "@/assets/interviewing.JPG";
import { CtaLink, Container, InkPanel } from "@/components/ui/paper";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";

const partnerLogos = [p1, p2, p3, p4, p5, p6, p7];
const heroSlides = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12];

// Same figures shown on the Impacts page.
const stats = [
  { value: "38+", label: "High schools and colleges involved" },
  { value: "$5,000+", label: "Raised for eye care programs" },
  { value: "150+", label: "Patients supported" },
  { value: "800+", label: "Voice letters delivered" },
];

const pillars = [
  {
    title: "Awareness",
    img: interviewing,
    text: "We interview visually impaired individuals and share their stories, helping sighted youth understand life with vision loss.",
  },
  {
    title: "Accessibility",
    img: ghana,
    text: "We fund eye camps and free screenings abroad, and collect donated eyeglasses for people who need them.",
  },
  {
    title: "Education",
    img: voiceletters,
    text: "Our chapters run eye health campaigns, voice-letter drives and classes that connect students with the visually impaired community.",
  },
];

const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`text-xs font-medium tracking-[0.14em] text-brand uppercase ${className}`}
  >
    {children}
  </p>
);

const Homepage = () => {
  return (
    <>
      {/* hero */}
      <section className="pt-14 md:pt-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Eyebrow className="mb-5">Youth-led nonprofit for eye health</Eyebrow>
            <h1 className="display text-ink">Our vision comes true.</h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-slate">
              Sightshare improves eye health and visually impaired awareness,
              accessibility, and education around the world, led by students.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink to="/chapters">Start a chapter</CtaLink>
              <CtaLink to="/donate" tone="ghost" arrow={false}>
                Donate
              </CtaLink>
            </div>
          </div>

          <div className="relative h-[46vh] min-h-[300px] overflow-hidden rounded-[10px] bg-halo md:h-[60vh]">
            <Carousel>
              {heroSlides.map((img, index) => (
                <CarouselItem key={index}>
                  <img
                    src={img}
                    alt={`Sightshare members at work, photo ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* impact numbers */}
      <section className="pt-16 md:pt-24">
        <Container>
          <dl className="grid grid-cols-2 border-y border-rule lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-8 text-center md:py-10 ${
                  i % 2 === 1 ? "border-l border-rule" : ""
                } ${i >= 2 ? "border-t border-rule lg:border-t-0" : ""} ${
                  i === 2 ? "lg:border-l" : ""
                }`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-serif text-4xl text-brand-deep md:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-sm text-smoke">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* about us */}
      <section id="about" className="scroll-mt-24 pt-24 md:pt-32">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src={abus1}
            alt="Sightshare members volunteering"
            className="aspect-[4/3] w-full rounded-[10px] object-cover"
          />
          <div>
            <Eyebrow className="mb-4">Who we are</Eyebrow>
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
                Meet our team
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* what we do */}
      <section className="pt-24 md:pt-32">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <h2 className="heading text-ink">Three ways we make a difference</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="flex flex-col">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[10px] object-cover"
                />
                <h3 className="title mt-5 text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
          <Link
            to="/impacts"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
          >
            See our impact
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </Container>
      </section>

      {/* mission statement */}
      <InkPanel className="mt-24 md:mt-32">
        <section id="mission" className="scroll-mt-24">
          <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-medium tracking-[0.14em] text-brand-light uppercase">
                What drives us
              </p>
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
            <img
              src={abus2}
              alt="Sightshare chapter event"
              className="max-h-[520px] w-full rounded-[10px] object-cover"
            />
          </Container>
        </section>
      </InkPanel>

      {/* partner strip */}
      <section className="pt-20 md:pt-24">
        <Container>
          <p className="text-center text-xs font-medium tracking-[0.14em] text-smoke uppercase">
            Our partners and sponsors
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
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

      {/* get involved */}
      <section className="pt-24 md:pt-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-[10px] border border-rule bg-rule md:grid-cols-3">
            {[
              {
                title: "Start a chapter",
                text: "Bring Sightshare to your school and lead projects in your community.",
                to: "/chapters",
                cta: "Find out how",
              },
              {
                title: "Partner with us",
                text: "Organizations can work with us on eye camps, drives and campaigns.",
                to: "/partnerships",
                cta: "See partnerships",
              },
              {
                title: "Donate",
                text: "Every contribution funds screenings, eye camps and our programs.",
                to: "/donate",
                cta: "Give today",
              },
            ].map((c) => (
              <div key={c.title} className="flex flex-col bg-ivory p-8 md:p-10">
                <h3 className="title text-ink">{c.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">
                  {c.text}
                </p>
                <Link
                  to={c.to}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-deep"
                >
                  {c.cta}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homepage;
