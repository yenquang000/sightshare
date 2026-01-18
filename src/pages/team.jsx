import { Link } from "react-router-dom";
import m1 from "@/assets/m1.JPG";
import m2 from "@/assets/m2.JPG";
import m3 from "@/assets/m3.JPG";
import m4 from "@/assets/m4.JPG";
import m5 from "@/assets/m5.JPEG";
import m6 from "@/assets/m6.JPEG";
import m7 from "@/assets/m7.JPG";
import a1 from "@/assets/a1.JPEG";
import a2 from "@/assets/a2.JPG";
import a3 from "@/assets/a3.JPG";
const members = [
  {
    name: "Jiwon (Izzie) Lee",
    role: "Co-Founder & Chief Executive Officer",
    avatar: m1,
  },
  {
    name: "Junseo Lee",
    role: "Co-Founder & Chief Operating Officer",
    avatar: m2,
  },
  {
    name: "Joshua Liz",
    role: "Sponsorship Director",
    avatar: m3,
  },
  {
    name: "Leen Darwisha",
    role: "Network Director",
    avatar: m4,
  },
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
];

export default function Team() {
  return (
    <section id="team" className="bg-gray-50 py-3 px-6  dark:bg-transparent">
      <div className="mx-auto max-w-5xl">
        {/* current team members */}
        <div className="mt-12 gap-4">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold sm:text-4xl font-serif  text-[#59769d]">
              Our Team
            </h2>
          </div>
          <div className="w-full text-center">
            <p className="text-lg leading-relaxed text-black font-bold mb-6">
              Our team is comprised of high school and college students who are
              passionate about making a difference. We provide a variety of
              services aimed at amplifying the voices of the visually impaired
              and promoting inclusive eye health for all. We believe that
              everyone deserves access to quality eye care. Our team works
              tirelessly to promote awareness of eye health and to provide
              resources for those in need. Together, we can make a difference in
              the lives of those facing eye health challenges.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-12">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top "
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-4">
                  <h3 className="text-base text-2xl font-serif font-bold text-[#59769d]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* alumna */}
        <div>
          <div className="w-full text-center mt-12">
            <h2 className="mt-12 text-3xl  sm:text-4xl font-serif font-bold text-[#59769d]">
              Our Alumna
            </h2>
          </div>
        </div>
        <div className="mt-6 md:mt-12">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {alumna.map((alumni, index) => (
              <div key={index} className="group overflow-hidden">
                <img
                  className="h-96 w-full rounded-md object-cover object-top "
                  src={alumni.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                <div className="px-2 pt-4">
                  <h3 className="text-base text-2xl font-serif font-bold text-[#59769d]">
                    {alumni.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">{alumni.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
