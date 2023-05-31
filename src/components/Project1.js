import React from "react";

const Project1 = () => {
  return (
    <div className="project">
      <img src="./assets/img/thp-logo.png" alt="" />
      <div className="project-title">
        <h2>TROX</h2>
        <h3>HTML / CSS / BOOTSTRAP</h3>
        <h3>Ruby On Rails / PostgreSQL</h3>
      </div>
      <div className="project-infos">
        <ul>
          <li>Application de prêt d'outils entre particuliers.</li>
          <li>
            Base de données en PostgreSQL, trois models, user, tool et loan.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Project1;
