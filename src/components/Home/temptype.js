import React from "react";
import Typewriter from "typewriter-effect";

function TempType() {
  return (
    <Typewriter
      options={{
        strings: [
          "This website is still in development phase!",
        //   "Freelancer",
        //   // "MERN Stack Developer",
        //   "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
        delay: 40,
      }}
    />
  );
}

export default TempType;
