import React, { useEffect, useRef } from "react";

const DashedLine = () => {
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

          // 👉 slight delay before animation starts
          setTimeout(() => {
            path.style.transition = "stroke-dashoffset 2s ease";
            path.style.strokeDashoffset = "0";

            // 👉 restore dashed style after draw
            setTimeout(() => {
              path.style.strokeDasharray = "9.29 9.29";
            }, 2000);

          }, 400); // delay (you can tweak: 300–800ms)

          observer.unobserve(path);
        }
      },
      {
        threshold: 0.3, // triggers when 30% visible
      }
    );

    observer.observe(path);

    return () => observer.disconnect();
  }, []);

  return (
    <svg viewBox="0 0 1288 335" width="100%" height="100%">
      <path
        ref={pathRef}
        d="M90.9924 273.429C5.1591 167.763 -95.7076 -26.8707 187.492 39.9293C541.492 123.429 348.993 434.929 554.493 301.429C759.993 167.929 752.493 -30.0707 843.493 4.92932C934.493 39.9293 980.493 215.929 1102.99 212.429C1200.99 209.629 1266.49 139.596 1286.99 104.929"
        stroke="#625E67"
        strokeOpacity="0.5"
        strokeWidth="1.7"
        fill="none"
      />
    </svg>
  );
};

export default DashedLine;