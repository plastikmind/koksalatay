import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center py-52 px-4 overflow-hidden">
      <img
        src="./hero.jpeg"
        className="hidden sm:block h-[396px] lg:h-[600px] xl:h-[768px]"
      />
      <img src="./hero-mobil.jpeg" className="sm:hidden" />
    </div>
  );
};

export default Hero;
