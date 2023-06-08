import React from "react";

const SoftSkill = () => {
  return (
    <div className="softskill-container">
      <img
        src="../assets/img/benjamin.jpg"
        alt="benjamin alcade"
        className="photo-benjamin"
      />
      <div className="titles">
        <h1>A propos de moi</h1>
        <h2>19/11/1991</h2>
        <h3>Lyon, France</h3>
        <div className="perso">
          <p>
            Je m'appelle Benjamin Alcade, développeur web junior. <br />
            Menuisier de formation, j'ai ensuite travaillé en tant que vendeur
            polyvalent et résponsable de rayon dans un magasin bio.
            <br />
            J'ai suivi une formation de développeur web à l'école The Hacking
            Project.
          </p>
          <p>
            Mes différentes expériences professionnelles m'ont permis de
            développer des compétences en gestion de projet, en communication et
            en organisation.
          </p>
        </div>
      </div>
      <div className="hardskills">
        <div className="hardskills-title">
          <h5>Technos préfèrées</h5>
        </div>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SCSS</li>
        </ul>
      </div>
      <div className="softskills">
        <div className="sofskills-title">
          <h5>SoftSkills</h5>
        </div>
        <ul>
          <li>Capactié d'adaptation</li>
          <li>Autonomie</li>
          <li>Curiosité</li>
          <li>Esprit d'équipe</li>
          <li>Organisation</li>
          <li>Rigueur</li>
        </ul>
      </div>
      <div className="langue">
        <div className="langue-title">
          <h5>Langues</h5>
        </div>
        <ul>
          <li>
            <h4>Français</h4>
            <p>langue maternelle</p>
          </li>
          <li>
            <h4>Anglais</h4> <p>niveau B1</p>
          </li>
        </ul>
      </div>
      <div className="loisirs">
        <div className="loisirs-title">
          <h5>Loisirs</h5>
        </div>
        <ul>
          <li>Musique</li>
          <li>Philosophie</li>
          <li>Politique</li>
          <li>Gastronomie</li>
          <li>Oenologie</li>
        </ul>
      </div>
    </div>
  );
};

export default SoftSkill;
