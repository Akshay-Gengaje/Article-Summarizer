import React from "react";

const Hero = () => {

  return (
    <div className="m-10">
      <h1 className="text-4xl dark:text-white font-bold text-center">
        Summerize Articles with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600">
          OpenAI GPT-4
        </span>
      </h1>
      <p className="text-gray-700 dark:text-gray-400 text-center mt-5">
        Simplify your reading with Summerize, an open source article summerizer
        that transform lengthy articles into clear and concise summeries
      </p>
    </div>
  );
};

export default Hero;
