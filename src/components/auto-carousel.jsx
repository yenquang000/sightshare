import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CarouselItem = ({ children }) => {
  return <div className="h-full w-full flex-shrink-0">{children}</div>;
};

/**
 * Auto-advancing slideshow that fills its parent container.
 * Shows pill-style progress dots so visitors can jump between slides.
 */
const Carousel = ({ children, interval = 3500, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = React.Children.count(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval, activeIndex]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-[10px] border border-rule bg-ivory/90 px-3 py-2 backdrop-blur">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === activeIndex ? "w-6 bg-brand" : "w-1.5 bg-ink/25 hover:bg-ink/50",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
