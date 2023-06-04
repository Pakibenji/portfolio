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
            Je suis Benjamin Alcade, développeur web junior. <br />
            Menuisier de formation, j'ai ensuite travaillé pendant plusieurs
            années dans le domaine du commerce de détail.
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
        <h3>Technos préfèrées</h3>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SCSS</li>
        </ul>
      </div>
      <div className="softskills">
        <h3>SoftSkills</h3>
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
        <h3>Langues</h3>
        <ul>
          <li>
            <h4>Français</h4>langue maternelle
          </li>
          <li>
            <h4>Anglais</h4> niveau B1
          </li>
        </ul>
      </div>
      <div className="loisirs">
        <h3>Loisirs</h3>
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
