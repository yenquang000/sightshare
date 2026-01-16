import React, { useEffect, useRef, useState } from "react";

export const CarouselItem = ({ children }) => {
  return <div className="flex-shrink-0 h-screen w-screen">{children}</div>;
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === React.Children.count(children) - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [children]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
