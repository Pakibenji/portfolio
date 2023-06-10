import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import React from "react";
import Formation from "./Formation";
import SoftSkill from "./SoftSkill";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="sociaux">
          <a
            href="https://www.linkedin.com/in/alcadebenjamin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={48} className="linkedin" />
          </a>
          <a
            href="https://github.com/Pakibenji"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={48} className="github" />
          </a>
          <a href="mailto:alcade.benjamin@gmail.com">
            <IconBrandGmail size={48} className="mail" />
          </a>
        </div>
        <div className="title">
          <h1>Benjamin ALCADE</h1>
          <h2>Développeur web</h2>
        </div>
      </div>
      <div className="formation-popup">
        <Formation />
      </div>
      <div className="softskill-popup">
        <SoftSkill />
      </div>
    </>
  );
};

export default Main;
