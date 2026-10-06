import D from "@/assets/donate.JPG";
import { PageHeader, Container, CtaLink, Doodle } from "@/components/ui/paper";

function Donate() {
  return (
    <section id="about">
      <PageHeader title="Support Our" mark="Journey" doodles={["heart", "sparkle"]} />
      <Container>
        <div className="mt-10 grid overflow-hidden rounded-[10px] border border-rule md:mt-14 lg:grid-cols-2">
          <div className="lined-paper flex flex-col justify-center p-8 md:p-14">
            <Doodle name="envelope" className="mb-8 w-16 -rotate-6" />
            <p className="heading-sm text-ink">
              At Sightshare, we work hard to deliver support to our patients.
              We think you should join our journey too!
            </p>
            <div className="mt-10">
              <CtaLink href="https://www.gofundme.com/" external>
                GoFundMe
              </CtaLink>
            </div>
          </div>
          <div className="border-t border-rule lg:border-t-0 lg:border-l">
            <img
              src={D}
              alt="Donate"
              className="h-full max-h-[640px] min-h-[320px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Donate;
