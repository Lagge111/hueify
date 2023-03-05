import React from "react";

const Hero = () => {
  return (
    <div className="mt-40 mb-28 font-mona text-white text-center">
      <p className="font-extrabold text-7xl">
        Extracting{" "}
        <span className="bg-gradient-to-r from-[#93f5ec] to-[#a77bf3] text-transparent bg-clip-text text-center py-4">
          colors
        </span>{" "}
        made easy
      </p>
      <p className="mt-10 text-2xl text-white/80">
        Transform any image into a beautiful color palette with ease.
      </p>
    </div>
  );
};

export default Hero;
