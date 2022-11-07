import React from "react";
import { gsap } from "gsap/dist/gsap";

// adds collection image once you hover on
export const handleCollection = (collectionx, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${collectionx}) no-repeat fixed center`,
  });
  gsap.to(target, {
    duration: 0.8,
    backgroundSize: `cover`,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.8,
    transformOrigin: "right top",
  });
};
