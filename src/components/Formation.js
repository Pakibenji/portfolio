import React from "react";

const Formation = () => {
  return (
    <div className="formation-container">
      <img
        src="./assets/img/thp-logo.png"
        alt="logo the hacking project"
        className="thp-logo"
      />
      <div className="titles">
        <h1>Développeur web</h1>
        <h2>Titre RNCP niveau 5 (BAC +2) de janvier à août 2023</h2>
        <h3>Bootcamp The Hacking Project </h3>
        <h4>1200h intensives sur 6 mois</h4>
      </div>
      <h5 className="title">
        Formation en deux parties de trois mois comprenants chacune un projet
        final.{" "}
      </h5>
      <br />
      <div className="fullstack-container">
        <div className="fullstack-title">
          <h5>Fullstack - Janvier à Mars 2023</h5>
        </div>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>RUBY</li>
          <li>RUBY ON RAILS</li>
          <li>mySQL</li>
          <li>POSTGRESQL</li>
          <li>HEROKU</li>
          <li>GITHUB</li>
          <li>AGILE</li>
        </ul>
        <h3 className="trox-title">TROX</h3>
        <p className="trox-infos">
          Projet de fin de formation en groupe de 4 personnes. Création d'une
          application web de prêts d'outils entre particuliers.{" "}
        </p>
      </div>
      <div className="developpeur-container">
        <div className="developpeur-title">
          <h5>Développeur - Avril à Juin 2023</h5>
        </div>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JAVASCRIPT</li>
          <li>REACTJS</li>
          <li>REDUX</li>
          <li>NODEJS</li>
          <li>RAILS API</li>
          <li>POSTGRESQL</li>
          <li>VERCEL</li>
          <li>NETLIFY</li>
        </ul>
        <h3 className="soundspectrum-title">SOUND SPECTRUM</h3>
        <p className="soundspectrum-infos">
          Projet de fin de formation en binome. Création d'une application web
          de streaming de radio en fonction des genres musicaux préferés de
          l'utilisateur.{" "}
        </p>
      </div>
      <div className="stage-container">
        <div className="stage-title">
          <h5>Stage de fin de formation </h5>
          <h5>Juillet et Aout 2023</h5>
        </div>
      </div>
    </div>
  );
};

export default Formation;
