import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

const ctaTones = {
  // the one filled action per view, in the logo blue
  solid: "bg-brand text-ivory hover:bg-brand-deep",
  // secondary action on paper
  ghost: "border border-ash text-ink hover:bg-halo",
  // secondary action on the deep blue panel
  "ghost-light": "border border-ivory/40 text-ivory hover:bg-ivory/10",
  // primary action on the deep blue panel
  inverse: "bg-ivory text-ink hover:bg-brand-light",
};

/**
 * Text button with a 10px corner. Renders a router <Link> for `to`,
 * an <a> for `href`, or a <button> otherwise.
 */
export function CtaLink({
  to,
  href,
  children,
  tone = "solid",
  external = false,
  arrow = true,
  className,
  ...props
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-sm leading-none transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
    ctaTones[tone],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          size={15}
          strokeWidth={1.75}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

export function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Centered serif heading with a small grey sans subhead beneath. */
export function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      <h2 className="heading text-ink">{title}</h2>
      {subtitle && <p className="subhead mx-auto mt-4 max-w-xl">{subtitle}</p>}
    </div>
  );
}

/**
 * Page opener: doodles in the margins, a centered serif headline with one
 * highlighted word, an optional grey subhead, actions, and an optional photo.
 */
export function PageHeader({
  title,
  mark,
  after,
  subtitle,
  image,
  imageAlt,
  doodles = ["eye", "sparkle"],
  children,
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-4 md:pt-24">
      <Container className="relative">
        {doodles[0] && (
          <Doodle
            name={doodles[0]}
            className="absolute top-2 left-6 hidden w-20 -rotate-12 md:block lg:left-20"
          />
        )}
        {doodles[1] && (
          <Doodle
            name={doodles[1]}
            className="absolute top-6 right-8 hidden w-14 rotate-12 md:block lg:right-28"
          />
        )}
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="display text-ink">
            {title}
            {mark && (
              <>
                {" "}
                <span className="mark">{mark}</span>
              </>
            )}
            {after && <> {after}</>}
          </h1>
          {subtitle && (
            <p className="subhead mx-auto mt-5 max-w-xl text-[17px]">{subtitle}</p>
          )}
          {children && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          )}
        </div>
        {image && (
          <figure className="mt-12 overflow-hidden rounded-[10px] border border-rule md:mt-16">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="h-[38vh] min-h-[260px] w-full object-cover md:h-[58vh]"
            />
          </figure>
        )}
      </Container>
    </section>
  );
}

/** Full-bleed deep blue band — at most one per page. */
export function InkPanel({ className, children }) {
  return (
    <section className={cn("bg-panel text-ivory", className)}>
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marginalia doodles — hand-drawn black strokes, one light-blue wash  */
/* ------------------------------------------------------------------ */

const doodlePaths = {
  eye: (
    <>
      <path
        d="M6 34c9-13 22-20 34-20s25 7 34 20c-9 12-21 19-34 19S15 46 6 34z"
        fill="var(--color-brand-light)"
        fillOpacity="0.55"
      />
      <path d="M6 34c9-13 22-20 34-20s25 7 34 20c-9 12-21 19-34 19S15 46 6 34z" />
      <circle cx="40" cy="33.5" r="10.5" />
      <circle cx="40" cy="33.5" r="4" fill="currentColor" />
      <path d="M43 30.5l2-1.5" />
      <path d="M18 18l-4-6M30 13l-1-7M43 12l1-7M55 15l4-6M64 21l6-4" />
    </>
  ),
  glasses: (
    <>
      <circle cx="20" cy="34" r="13" fill="var(--color-brand-light)" fillOpacity="0.5" />
      <circle cx="20" cy="34" r="13" />
      <circle cx="58" cy="34" r="13" />
      <path d="M33 32c3-3 9-3 12 0" />
      <path d="M7 31L2 22M71 31l6-9" />
      <path d="M14 29c2-3 5-4 8-4M52 29c2-3 5-4 8-4" />
    </>
  ),
  heart: (
    <>
      <path
        d="M40 60C22 49 10 38 12 25c1-9 12-14 20-8 4 3 6 7 8 11 2-5 5-9 10-11 9-4 18 3 17 12-1 13-12 22-27 31z"
        fill="var(--color-brand-light)"
        fillOpacity="0.55"
      />
      <path d="M40 60C22 49 10 38 12 25c1-9 12-14 20-8 4 3 6 7 8 11 2-5 5-9 10-11 9-4 18 3 17 12-1 13-12 22-27 31z" />
      <path d="M22 26c1-3 3-5 6-5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M40 8c2 14 6 22 26 26-20 4-24 12-26 28-3-16-7-24-27-28 20-4 24-12 27-26z" />
      <path d="M66 10c1 4 2 6 7 7-5 1-6 3-7 7-1-4-2-6-7-7 5-1 6-3 7-7z" />
    </>
  ),
  envelope: (
    <>
      <rect x="8" y="18" width="64" height="42" rx="3" fill="var(--color-brand-light)" fillOpacity="0.5" />
      <path d="M9 19h62c1 0 2 1 2 2v37c0 1-1 2-2 2H9c-1 0-2-1-2-2V21c0-1 1-2 2-2z" />
      <path d="M8 21l32 22 32-22" />
      <path d="M58 9c3 2 5 5 5 9M64 7c4 3 7 8 7 13" />
    </>
  ),
  globe: (
    <>
      <circle cx="40" cy="38" r="26" fill="var(--color-brand-light)" fillOpacity="0.45" />
      <circle cx="40" cy="38" r="26" />
      <ellipse cx="40" cy="38" rx="11" ry="26" />
      <path d="M14.5 32h51M15 46h50" />
      <path d="M40 12v52" />
    </>
  ),
};

export function Doodle({ name, className }) {
  return (
    <svg
      viewBox="0 0 80 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("pointer-events-none text-ink", className)}
    >
      {doodlePaths[name]}
    </svg>
  );
}
