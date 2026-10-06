import ChaptersCarousel from "../components/chapters-carousel";
import c from "@/assets/c.JPG";
import sg from "@/assets/starterguide.jpg";
import {
  PageHeader,
  Container,
  SectionHeader,
  CtaLink,
  InkPanel,
  Doodle,
} from "@/components/ui/paper";

import { MyMap } from "../components/chapters-map";

export default function Chapters() {
  return (
    <section id="chapters">
      <PageHeader
        title="A Network of"
        mark="Vision"
        image={c}
        imageAlt="Sightshare chapter members"
        doodles={["glasses", "sparkle"]}
      />

      {/* what is a chapter */}
      <div className="lined-paper mt-24 border-y border-rule py-20 md:mt-32 md:py-28">
        <Container>
          <SectionHeader title="Sightshare Chapters" />
          <p className="prose-body mx-auto mt-6 text-center">
            A Sightshare Chapter is a club you can start at your school that
            brings our mission to life through service, advocacy, and awareness.
            Chapters organize initiatives such as fundraisers for eye care
            programs, eye health awareness campaigns, and participation in
            Sightshare-wide projects like the Voice Letters Project, while
            collaborating with other chapters through our Discord community. Each
            chapter designs its activities to best serve its local community while
            staying aligned with Sightshare’s mission.
          </p>

          <div className="mt-14 lg:px-4">
            <ChaptersCarousel />
          </div>
        </Container>
      </div>

      {/* map */}
      <Container className="mt-28 md:mt-36">
        <SectionHeader
          title="Schools that participated in Sightshare"
          subtitle="High schools and colleges that have participated in activities of Sightshare, such as the voice letters activities, glasses drive, and presentations about visual impairment"
        />
        <div className="mt-12">
          <MyMap />
        </div>
      </Container>

      {/* get involved */}
      <InkPanel className="mt-28 md:mt-36">
        <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <Doodle
              name="sparkle"
              className="absolute -top-12 left-56 hidden w-12 text-ivory md:block"
            />
            <p className="mb-4 text-sm text-brand-light">Start a chapter</p>
            <h2 className="heading">Ready to get involved?</h2>

            <p className="mt-6 leading-relaxed text-ivory/80">
              Sightshare is excited to have you join our journey. <br /> View
              our Starter Guide to get started ! <br /> After viewing, please
              fill out the INTEREST FORM
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink
                href="https://docs.google.com/forms/d/e/1FAIpQLScbm2RLzLFGo-SIg_hcDnl7LwI5Zznh4qlec7wONZmBZeyqfg/viewform"
                external
                tone="inverse"
              >
                Interest Form
              </CtaLink>
              <CtaLink href="/sightshare.pdf" external tone="ghost-light">
                Starter Guide
              </CtaLink>
            </div>
          </div>
          <div>
            <a
              href="/sightshare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer overflow-hidden rounded-[10px] border border-ivory/15"
            >
              <img
                src={sg}
                alt="Click here to view the Starter Guide"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          </div>
        </Container>
      </InkPanel>
    </section>
  );
}
