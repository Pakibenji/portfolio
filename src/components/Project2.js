import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

const Project2 = () => {
  return (
    <div className="project-container">
      <img src="./assets/img/soundspectrum.png" alt="soundspectrum" />
      <div className="project-infos">
        <div className="project-title">
          <h2>Sound Spectrum</h2>
          <h3>
            Application de lecture de radio en ligne, avec filtre par genre
          </h3>
        </div>
        <p>
          Ce projet consiste à créer une plateforme conviviale où les
          utilisateurs peuvent s'inscrire, se connecter, filtrer les radios par
          genre musical, les ajouter en favoris, le tout grâce à une API Rails
          et l'API radio-browser, avec une interface réactive développée en
          React.
        </p>
        <h3 className="techno-title">Technologie utilisées</h3>
        <ul className="techno-use">
          <li>HTML</li>
          <li>SCSS</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li></li>
        </ul>
        <h3 className="techno-title">API et Gems rails</h3>
        <ul className="gems-api">
          <li>Radio-Browser-API</li>
          <li>Rails-API </li>
          <li>Devise-jwt</li>
        </ul>
        <h3 className="link-title">Liens du projet</h3>
        <a href="https://github.com/Pakibenji/soundspectrum">
          <IconBrandGithub size={48} />
        </a>
      </div>
    </div>
  );
};

export default Project2;
