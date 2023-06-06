import React from "react";
import { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import { IconInnerShadowLeft, IconInnerShadowRight } from "@tabler/icons-react";

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
    <>
      {window.innerWidth > 768 && (
        <div className="carousel-container">
          <IconInnerShadowLeft
            size={96}
            onClick={handlePrevious}
            className="arrow left"
          />
          {index === 0 && <Project1 />}
          {index === 1 && <Project2 />}
          <IconInnerShadowRight
            size={96}
            onClick={handleNext}
            className="arrow right"
          />
        </div>
      )}
      {window.innerWidth <= 768 && (
        <>
          <div className="projects-container">
            <Project1 />
          </div>
          <div className="projects-container">
            <Project2 />
          </div>
        </>
      )}
    </>
  );
};
export default Project;
