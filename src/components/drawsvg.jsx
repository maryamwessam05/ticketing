import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DrawSVG = ({ children, delay = 0 }) => {
  const pathRef = useRef([]);

  useEffect(() => {
    pathRef.current.forEach((path, i) => {
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        delay: delay + i * 0.2,
        ease: "power2.out",
      });
    });
  }, [delay]);

  return React.cloneElement(children, {
    children: React.Children.map(children.props.children, (child, i) =>
      React.cloneElement(child, {
        ref: (el) => (pathRef.current[i] = el),
      })
    ),
  });
};

export default DrawSVG;