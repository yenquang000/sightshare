import { useState } from "react";
import {
  PageHeader,
  Container,
  SectionHeader,
  InkPanel,
  Doodle,
} from "@/components/ui/paper";
import { cn } from "@/lib/utils";
import Ghana from "@/assets/ghana.JPG";
import Morocco from "@/assets/morocco.JPG";
import Ocarina from "@/assets/ocarina.JPG";
import Glassesdrive from "@/assets/glassesdrive.PNG";
import Voiceletters from "@/assets/voiceletters.JPG";
import Fundraising from "@/assets/fundraising.PNG";
import Volunteering from "@/assets/volunteering.PNG";
import Interviewing from "@/assets/interviewing.JPG";
import Funds from "@/assets/funds.png";
const stats = [
  { value: "38+", label: "high schools/colleges have participated" },
  { value: "$5,000+", label: "Raised with Adopt A Hospital and YVO" },
  { value: "150+", label: "Patients were supported" },
  { value: "800+", label: "Voice letters delivered" },
];

const events = [
  {
    title: "Ghana Eye Screening",
    img: Ghana,
    text: "With the partnership with Adoptahospital and YVO, we raised $2,000, providing free eye check-ups and healthcare services in Ghana.",
  },
  {
    title: "Morocco Eye Camp",
    img: Morocco,
    text: "Raised $1.7k+ to support Two Vision Care’s Eye Camps in Marrakech and Kelaat M’gouna, funding medical supplies for surgeries.",
  },
  {
    title: "Ocarina Class",
    img: Ocarina,
    text: "We taught visually impaired individuals to play the ocarina at VISIONS, bringing joy through music.",
  },
  {
    title: "Glasses Drive",
    img: Glassesdrive,
    text: "Re-View and Sightshare collaborate to install eyeglasses donation bins across NYC’s five boroughs.",
  },
];

const activities = [
  {
    title: "Sending Voice Letters",
    img: Voiceletters,
    text: "We organize campaigns to send messages of encouragement to individuals undergoing eye surgeries and warm messages during Holiday season for the visually impaired.",
  },
  {
    title: "Fundraising",
    img: Fundraising,
    text: "We held numerous fundraisers with YVO and with our chapters that were used in eye camps and programs within Sightshare.",
  },
  {
    title: "Volunteering",
    img: Volunteering,
    text: "Sightshare members dedicate their time to serve the visually impaired community in weekly basis.",
  },
  {
    title: "Interviewing",
    img: Interviewing,
    text: "We conduct interviews with visually impaired individuals to better understand their lives and experiences, which are all shared via Youtube.",
  },
];

function StoryCard({ item }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-rule bg-ivory">
      <div className="overflow-hidden border-b border-rule">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="title">{item.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate">
          {item.text}
        </p>
      </div>
    </div>
  );
}

function ActivitiesPanel() {
  const [active, setActive] = useState(0);
  const item = activities[active];

  return (
    <InkPanel className="mt-28 md:mt-36">
      <Container className="py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading">What we do</h2>
          <p className="mt-4 text-ivory/70">
            Four ways Sightshare members show up for the visually impaired
            community.
          </p>
        </div>

        {/* tabs */}
        <div
          role="tablist"
          aria-label="What we do"
          className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-ivory/15"
        >
          {activities.map((a, i) => (
            <button
              key={a.title}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "-mb-px border-b-[1.5px] pb-3 text-sm transition-colors",
                i === active
                  ? "border-brand-light text-ivory"
                  : "border-transparent text-ivory/55 hover:text-ivory",
              )}
            >
              {a.title}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
        >
          <img
            key={item.title}
            src={item.img}
            alt={item.title}
            className="aspect-[4/3] w-full rounded-[10px] border border-ivory/15 object-cover"
          />
          <div>
            <p className="text-sm text-brand-light">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(activities.length).padStart(2, "0")}
            </p>
            <h3 className="heading-sm mt-3">{item.title}</h3>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ivory/80">
              {item.text}
            </p>
            <div className="mt-8 flex gap-2">
              {activities.map((a, i) => (
                <button
                  key={a.title}
                  aria-label={a.title}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "w-8 bg-brand-light" : "w-3 bg-ivory/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </InkPanel>
  );
}

export default function Impacts() {
  return (
    <div id="impacts">
      <PageHeader
        title="Sightshare in"
        mark="numbers"
        subtitle="Sightshare is working hard to expand our projects"
        doodles={["globe", "sparkle"]}
      />

      <Container>
        {/* numbers */}
        <div className="mt-12 grid overflow-hidden rounded-[10px] border border-rule sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col gap-3 p-8 text-center",
                i > 0 && "border-t border-rule sm:border-t-0",
                i % 2 === 1 && "sm:border-l",
                i >= 2 && "sm:border-t lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
            >
              <div className="font-serif text-[clamp(2.5rem,4vw,3.25rem)] leading-none text-brand">
                {stat.value}
              </div>
              <p className="text-sm text-smoke">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* featured events */}
        <SectionHeader
          className="mt-28 md:mt-36"
          title="Featured Events"
          subtitle="Eye camps, screenings, classes and drives — from Ghana and Morocco to New York City."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((item) => (
            <StoryCard key={item.title} item={item} />
          ))}
        </div>
      </Container>

      {/* what we do */}
      <ActivitiesPanel />

      {/* funds */}
      <Container className="mt-28 md:mt-36">
        <div className="relative grid overflow-hidden rounded-[10px] border border-rule lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <Doodle name="heart" className="mb-6 w-12" />
            <h2 className="heading">Where does our fund go</h2>
            <p className="prose-body mt-6">
              Our funds will go to support many of our initiatives like voice
              letters and eye camps led by VisionCare in Morocco and other
              countries. With Adopt A Hospitals, we will use our funds towards
              the acquisition of crucial health supplies for hospitals in Ghana.
            </p>
          </div>
          <div className="border-t border-rule bg-halo lg:border-t-0 lg:border-l">
            <img
              src={Funds}
              alt="Mission statement"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
