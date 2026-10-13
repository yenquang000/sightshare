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

/** Small uppercase label that sits above a heading. */
export function Eyebrow({ children, className, light = false }) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.14em] uppercase",
        light ? "text-brand-light" : "text-brand",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Page opener: a small label, a centered serif headline, an optional grey
 * subhead, actions, and an optional photo.
 */
export function PageHeader({
  title,
  mark,
  after,
  subtitle,
  image,
  imageAlt,
  eyebrow,
  children,
}) {
  return (
    <section className="relative overflow-hidden pt-16 pb-4 md:pt-24">
      <Container className="relative">
        <div className="relative mx-auto max-w-3xl text-center">
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="display text-ink">
            {title}
            {mark && (
              <>
                {" "}
                {mark}
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
