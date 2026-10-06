import { PageHeader, Container, SectionHeader } from "@/components/ui/paper";
import m1 from "@/assets/m1.JPG";
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
import a1 from "@/assets/a1.JPEG";
import a2 from "@/assets/a2.JPG";
import a3 from "@/assets/a3.JPG";
import a4 from "@/assets/a4.jpeg";
const members = [
  {
    name: "Junseo Lee",
    role: "Co-Founder & Chief Executive Officer",
    avatar: m2,
  },
  {
    name: "Jiwon (Izzie) Lee",
    role: "Co-Founder & Chief Financial Officer",
    avatar: m1,
  },
  {
    name: "Vancie Ruan",
    role: "Chief Operating Officer",
    avatar: m16,
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
  },
  {
    name: "Mohammad Rashed",
    role: "Sponsorship Director ",
    avatar: m12,
  },
  {
    name: "Yen Quang",
    role: "Website Director",
    avatar: m15,
  },
];
const alumna = [
  {
    name: "Brayden Choi",
    role: "Co-Founder & Chief Financial Officer",
    avatar: a1,
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
  },
  {
    name: "Leen Darwisha",
    role: "Network Director",
    avatar: m4,
  },
];

function PersonCard({ person, imagePosition = "object-center" }) {
  return (
    <div className="group overflow-hidden rounded-[10px] border border-rule bg-ivory">
      <div className="overflow-hidden border-b border-rule bg-halo">
        <img
          className={`aspect-[4/5] w-full object-cover ${imagePosition} transition-transform duration-500 group-hover:scale-[1.02]`}
          src={person.avatar}
          alt="team member"
          width="826"
          height="1239"
          loading="lazy"
        />
      </div>
      <div className="px-5 pt-4 pb-5">
        <h3 className="title text-ink">{person.name}</h3>
        <p className="mt-1 text-sm text-smoke">{person.role.trim()}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team">
      {/* current team members */}
      <PageHeader title="Our" mark="Team" doodles={["glasses", "heart"]} />

      <Container>
        <p className="prose-body mx-auto mt-2 text-center">
          Our team is composed of students who are passionate about making a
          difference. We provide a variety of services aimed at amplifying
          the voices of the visually impaired and promoting inclusive eye
          health for all. We believe that everyone deserves access to
          quality eye care, and our team works tirelessly to support those
          facing eye health challenges. Together, we can make a difference
          in the lives of those facing eye health challenges.
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
            <PersonCard key={index} person={alumni} imagePosition="object-top" />
          ))}
        </div>
      </Container>
    </section>
  );
}
