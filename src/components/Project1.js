import { IconBrandGithub } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";
import React from "react";

const Project1 = () => {
  return (
    <div className="project-container">
      <div className="img-container">
        <img
          src="./assets/img/trox.webp"
          alt="trox, projet de fin de formation Fullstack, The hacking Project, RAILS, BOOTSTRAP, POSTGRESQL, HEROKU"
        />
      </div>
      <div className="project-title">
        <h2>TROX</h2>
        <h3>Application de prêt d'outils entre particuliers.</h3>
      </div>
      <div className="project-description">
        <p>
          Trox, la plateforme d'échange et de partage d'outils qui favorise la
          solidarité et les rencontres entre voisins, permettant à tous,
          propriétaires ou locataires, de bénéficier gratuitement des machines
          et outils dont ils ont besoin.
        </p>
      </div>
      <div className="project-technos">
        <h4>Technologies utilisées :</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Ruby on Rails</li>
          <li>Bootstrap </li>
          <li>PostgreSQL</li>
          <li>Heroku</li>
        </ul>
      </div>
      <div className="project-Api">
        <h4>API et Gems rails</h4>
        <ul>
          <li>MapBox</li>
          <li>Geocoder </li>
          <li>Devise</li>
          <li>Active Storage</li>
        </ul>
      </div>
      <div className="project-link">
        <h4>Liens du projet</h4>
        <div className="links-container">
          <a href="https://troxx.fly.dev/">
            <IconExternalLink size={64} />
          </a>
          <a href="https://github.com/Pakibenji/trox">
            <IconBrandGithub size={64} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project1;
