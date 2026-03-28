import React, { useEffect, useRef } from "react";

const SquareDraw = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Initial hidden state
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          // slight delay
          setTimeout(() => {
            path.style.transition = "stroke-dashoffset 1.5s ease";
            path.style.strokeDashoffset = "0";
          }, 400);

          observer.unobserve(path);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(path);

    return () => observer.disconnect();
  }, []);

  return (
    <svg viewBox="0 0 496 496" width="100%" height="100%">
      <path
        ref={pathRef}
        d="M466 4H30C15.6406 4 4 15.6406 4 30V466C4 480.359 15.6406 492 30 492H466C480.359 492 492 480.359 492 466V30C492 15.6406 480.359 4 466 4Z"
        stroke="#C8F22B"
        strokeWidth="8"
        fill="none"
      />
    </svg>
  );
};

export default SquareDraw;