import React from "react";

const Nav = () => {
  const toggleFormation = () => {
    const formationPopup = document.querySelector(".formation-popup");
    const formation = document.querySelector(".formation");
    formationPopup.classList.toggle("active");
    formation.classList.toggle("active");
  };
  const toggleSoftSkill = () => {
    const softskillPopup = document.querySelector(".softskill-popup");
    const apropos = document.querySelector(".apropos");
    softskillPopup.classList.toggle("active");
    apropos.classList.toggle("active");
  };
  return (
    <div className="nav-container">
      <p className="formation" onClick={toggleFormation}>
        Formation
      </p>
      <p className="apropos" onClick={toggleSoftSkill}>
        A propos
      </p>
    </div>
  );
};

export default Nav;
