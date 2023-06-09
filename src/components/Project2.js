import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

const Project2 = () => {
  return (
    <div className="project-container">
      <div className="img-container">
        <img src="./assets/img/soundspectrum.jpg" alt="soundspectrum" />
      </div>
      <div className="project-title">
        <h2>Sound Spectrum</h2>
        <h3>Application de lecture de radio en ligne, avec filtre</h3>
      </div>
      <div className="project-description">
        <p>
          Ce projet consiste à créer une plateforme conviviale où les
          utilisateurs peuvent s'inscrire,filtrer les radios par genre musical,
          les ajouter en favoris, le tout grâce à une API Rails et l'API
          radio-browser, avec une interface React/Redux.
        </p>
      </div>
      <div className="project-technos">
        <h4>Technologie utilisées</h4>
        <ul>
          <li>HTML</li>
          <li>SCSS</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li></li>
        </ul>
      </div>
      <div className="project-Api">
        <h4 className="techno-title">API et Gems rails</h4>
        <ul className="gems-api">
          <li>Radio-Browser-API</li>
          <li>Rails-API </li>
          <li>Devise-jwt</li>
        </ul>
      </div>
      <div className="project-link">
        <h4>Liens du projet</h4>
        <a href="https://github.com/Pakibenji/soundspectrum">
          <IconBrandGithub size={64} />
        </a>
      </div>
    </div>
  );
};

export default Project2;
