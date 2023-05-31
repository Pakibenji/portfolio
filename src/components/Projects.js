import React from "react";
import { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";

const Project = () => {
  const [index, setIndex] = useState(0);
  const length = 2;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrevious}>Previous</button>
      {index === 0 && <Project1 />}
      {index === 1 && <Project2 />}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Project;
