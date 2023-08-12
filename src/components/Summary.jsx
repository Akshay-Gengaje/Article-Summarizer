import React, { useEffect } from "react";

const Summary = (props) => {
  const { summary } = props;
  return (
    <div>
      <p className="mx-3 md:mx-10 mt-6 text-2xl font-bold dark:text-gray-100">
        Article{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900">
          Summary
        </span>
      </p>
      <div className="mx-3 md:mx-10 mt-2 p-2 pb-7">
        <p className="dark:text-white text-left text-gray-900 text-lg">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default Summary;
