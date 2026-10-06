import Logo from "@/assets/ss-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Doodle } from "@/components/ui/paper";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sightshare/",
    icon: faLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sightshare_official?igsh=MTZwYnczd2x1cjZ5OQ==",
    icon: faInstagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sightshare?_r=1&_t=ZP-9359gdXkL8Q",
    icon: faTiktok,
  },
];

const linkGroups = [
  {
    title: "Organization",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Our Team", href: "/team" },
      { name: "Impacts", href: "/impacts" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { name: "Chapters", href: "/chapters" },
      { name: "Gallery", href: "/gallery" },
      { name: "Partnerships", href: "/partnerships" },
      { name: "Donate", href: "/donate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden border-t border-rule bg-halo md:mt-36">
      <div className="relative mx-auto max-w-[1200px] px-5 pt-14 pb-8 sm:px-8 md:pt-20">
        <Doodle
          name="glasses"
          className="absolute right-8 bottom-24 hidden w-28 -rotate-6 lg:block"
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={Logo} alt=" Logo" className="h-12 w-auto" />
              <h1 className="font-serif text-2xl leading-none">Sightshare</h1>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-slate">
              A youth-led nonprofit improving eye health and visually impaired
              awareness, accessibility, and education around the world.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-4 text-sm text-smoke">{group.title}</p>
              <ul className="space-y-2.5 text-[15px]">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-ink underline-offset-4 hover:underline hover:decoration-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="mb-4 text-sm text-smoke">Contact</p>
            <a
              href="mailto:sightshare.org@gmail.com"
              className="inline-flex items-center gap-2 text-[15px] text-ink underline-offset-4 hover:underline hover:decoration-brand"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-brand" />
              sightshare.org@gmail.com
            </a>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-[10px] border border-ash bg-ivory text-ink transition-colors hover:border-brand hover:bg-brand hover:text-ivory"
                >
                  <FontAwesomeIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-rule pt-6 text-sm text-smoke">
          © {new Date().getFullYear()} Sightshare, All rights reserved
        </div>
      </div>
    </footer>
  );
}
