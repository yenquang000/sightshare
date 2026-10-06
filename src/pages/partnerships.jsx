import p from "@/assets/p.jpg";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";
import gi from "@/assets/gi.PNG";
import {
  PageHeader,
  Container,
  SectionHeader,
  CtaLink,
  InkPanel,
} from "@/components/ui/paper";

const partners = [
  { avatar: p1 },
  { avatar: p2 },
  { avatar: p3 },
  { avatar: p4 },
  { avatar: p5 },
  { avatar: p6 },
];

const sponsors = [{ avatar: p7 }];

function LogoGrid({ items, alt }) {
  return (
    <div className={`grid overflow-hidden rounded-[10px] border border-rule ${items.length > 1 ? "grid-cols-2 lg:grid-cols-3" : ""}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="-mt-px -ml-px flex aspect-[3/2] items-center justify-center border-t border-l border-rule bg-ivory p-5 sm:p-10"
        >
          <img
            src={item.avatar}
            alt={alt}
            className="max-h-24 w-auto object-contain mix-blend-multiply sm:max-h-32"
          />
        </div>
      ))}
    </div>
  );
}

export default function Partnerships() {
  return (
    <>
      <PageHeader
        title="Sponsors &"
        mark="Partners"
        subtitle="Our sponsors and partners play a crucial role in our journey"
        image={p}
        imageAlt="Sightshare with partners"
        doodles={["globe", "heart"]}
      />

      <Container>
        {/* partners */}
        <SectionHeader className="mt-28 md:mt-36" title="Our Partners" />
        <div className="mt-12">
          <LogoGrid items={partners} alt="Partner logo" />
        </div>

        {/* sponsors */}
        <SectionHeader className="mt-24 md:mt-28" title="Our Sponsors" />
        <div className="mx-auto mt-12 max-w-sm">
          <LogoGrid items={sponsors} alt="Sponsor logo" />
        </div>
      </Container>

      <InkPanel className="mt-28 md:mt-36">
        <section id="about">
          <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="heading">Get involved</h2>

              <p className="mt-6 leading-relaxed text-ivory/80">
                If you have any interest in learning more about our team's
                initiatives and objectives, we warmly welcome you to contact us at{" "}
                <a
                  href="mailto:sightshare.org@gmail.com"
                  className="text-ivory underline decoration-brand-light underline-offset-4"
                >
                  sightshare.org@gmail.com
                </a>{" "}
                for any questions you may have.
              </p>
              <div className="mt-8">
                <CtaLink to="/chapters" tone="inverse">
                  Start A Chapter
                </CtaLink>
              </div>
            </div>
            <img
              src={gi}
              alt="Get involved"
              className="h-auto w-full rounded-[10px] border border-ivory/15 object-cover"
            />
          </Container>
        </section>
      </InkPanel>
    </>
  );
}
