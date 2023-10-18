import React from "react";
import Typewriter from "typewriter-effect";

function Type_Project() {
  return (
    <Typewriter
      options={{
        strings: [
          "More Projects will be added soon!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 35,
      }}
    />
  );
}

export default Type_Project;
