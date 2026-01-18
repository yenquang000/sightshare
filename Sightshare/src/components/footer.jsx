import Logo from "@/assets/ss-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="py-4 md:py-4 bg-background">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-[#59769d] mb-6">
          <img src={Logo} alt=" Logo" className="h-20 w-auto" />
          <h1 className="text-lg pt-2 font-bold font-serif">Sightshare</h1>
        </div>
        <div className="mt-4 flex justify-center items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#59769d]" />

          <a
            href="mailto:sightshare.org@gmail.com"
            className="text-[#59769d] hover:underline hover:text-black transition"
          >
            sightshare.org@gmail.com
          </a>
        </div>
        <div className="my-8 flex justify-center gap-6 text-sm">
          <a
            href="https://www.linkedin.com/company/sightshare/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://www.instagram.com/sightshare_official?igsh=MTZwYnczd2x1cjZ5OQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>

          <a
            href="https://www.tiktok.com/@sightshare?_r=1&_t=ZP-9359gdXkL8Q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground hover:text-primary block"
          >
            <FontAwesomeIcon icon={faTiktok} size="xl" />
          </a>
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Sightshare, All rights reserved
        </span>
      </div>
    </footer>
  );
}
