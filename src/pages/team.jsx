import { Link } from "react-router-dom";
import { PageHeader, Container, SectionHeader } from "@/components/ui/paper";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.JPG";
import m3 from "@/assets/m3.JPG";
import m4 from "@/assets/m4.JPG";
import m5 from "@/assets/m5.JPEG";
import m6 from "@/assets/m6.jpg";
import m7 from "@/assets/m7.JPG";
import m8 from "@/assets/m8.jpg";
import m9 from "@/assets/m9.JPG";
import m10 from "@/assets/m10.jpg";
import m11 from "@/assets/m11.jpeg";
import m12 from "@/assets/m12.jpg";
import m13 from "@/assets/m13.jpg";
import m14 from "@/assets/m14.jpg";
import m15 from "@/assets/m15.PNG";
import m16 from "@/assets/m16.jpg";
import a1 from "@/assets/a1.jpg";
import a2 from "@/assets/a2.JPG";
import a3 from "@/assets/a3.JPG";
import a4 from "@/assets/a4.jpeg";

const members = [
  {
    name: "Junseo Lee",
    role: "Co-Founder & Chief Executive Officer",
    avatar: m2,
    linkedin: "https://www.linkedin.com/in/junseo-lee66/",
  },
  {
    name: "Jiwon (Izzie) Lee",
    role: "Co-Founder & Chief Financial Officer",
    avatar: m1,
    linkedin: "https://www.linkedin.com/in/izzie-lee/",
  },
  {
    name: "Vancie Ruan",
    role: "Chief Operating Officer",
    avatar: m16,
    linkedin: "https://www.linkedin.com/in/vancie-ruan-68a720358/",
  },
  /*{
    name: "Joshua Liz",
    role: "Sponsorship Director",
    avatar: m3,
  }, */
  /*{
    name: "Leen Darwisha",
    role: "Network Director",
    avatar: m4,
  },*/
  {
    name: "Elaine Kim",
    role: "Marketing Director",
    avatar: m5,
  },
  {
    name: "Hannah Lee",
    role: "Design Director",
    avatar: m6,
  },
  {
    name: "Elizabeth Lin",
    role: "Production Director ",
    avatar: m7,
  },
  {
    name: "Raisha Tayba",
    role: "Production Director ",
    avatar: m13,
  },
  {
    name: "Serena Shi",
    role: "Chapter Director ",
    avatar: m8,
  },
  {
    name: "Emily Harsono",
    role: "Outreach Director ",
    avatar: m9,
  },
  {
    name: "Terryn Tian",
    role: "Grants Director ",
    avatar: m10,
  },
  {
    name: "Nathaniel Lee",
    role: "Grants Director ",
    avatar: m14,
  },
  {
    name: "Sarone Terefe",
    role: "Engagement Director ",
    avatar: m11,
    linkedin: "https://www.linkedin.com/in/sarone-terefe/",
  },
  {
    name: "Mohammad Rashed",
    role: "Sponsorship Director ",
    avatar: m12,
    linkedin: "https://www.linkedin.com/in/mohamrashed/",
  },
  {
    name: "Yen Quang",
    role: "Website Director",
    avatar: m15,
    linkedin: "https://www.linkedin.com/in/yen-quang/",
  },
];
const alumna = [
  {
    name: "Brayden Choi",
    role: "Co-Founder & Chief Financial Officer",
    avatar: a1,
    linkedin: "https://www.linkedin.com/in/brayden-choi317/",
  },
  {
    name: "Lin Kuang",
    role: "Outreach Director",
    avatar: a2,
  },
  {
    name: "Sarah Yan",
    role: "Marketing Director",
    avatar: a3,
  },
  {
    name: "Monica Chen",
    role: "Technology Director",
    avatar: a4,
    linkedin: "https://www.linkedin.com/in/monica-chen-/",
  },
  {
    name: "Leen Darwisha",
    role: "Network Director",
    avatar: m4,
    linkedin: "https://www.linkedin.com/in/leen-darwisha/",
  },
];

function PersonCard({ person, imagePosition = "object-center" }) {
  return (
    <div className="group overflow-hidden rounded-[10px] border border-rule bg-ivory">
      <div className="overflow-hidden border-b border-rule bg-halo">
        <img
          className={`aspect-[4/5] w-full object-cover ${imagePosition} transition-transform duration-500 group-hover:scale-[1.02]`}
          src={person.avatar}
          alt={`${person.name} profile`}
          width="826"
          height="1239"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between px-5 pt-4 pb-5">
        <div>
          <h3 className="title text-ink">{person.name}</h3>
          <p className="mt-1 text-sm text-smoke">{person.role.trim()}</p>
        </div>

        {/* Render LinkedIn icon only if the URL exists */}
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-smoke transition-colors hover:text-ink"
            aria-label={`${person.name}'s LinkedIn`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      {/* current team members */}
      <PageHeader title="Our" mark="Team" eyebrow="Who we are" />

      <Container>
        <p className="prose-body mx-auto mt-2 text-center">
          We are students working to amplify the voices of the visually impaired
          and make quality eye care accessible to everyone.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {members.map((member, index) => (
            <PersonCard key={index} person={member} />
          ))}
        </div>

        {/* alumna */}
        <SectionHeader
          className="mt-28 md:mt-36"
          title="Our Alumna"
          subtitle="Members who helped build Sightshare into what it is today."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alumna.map((alumni, index) => (
            <PersonCard
              key={index}
              person={alumni}
              imagePosition="object-top"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
