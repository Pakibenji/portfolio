import React from "react";

const Nav = () => {
  const toggleFormation = () => {
    const formationPopup = document.querySelector(".formation-popup");
    formationPopup.classList.toggle("active");
  };
  const toggleSoftSkill = () => {
    const softskillPopup = document.querySelector(".softskill-popup");
    softskillPopup.classList.toggle("active");
  };
  return (
    <div className="nav-container">
      <p className="formation" onClick={toggleFormation}>
        Formation
      </p>
      <p onClick={toggleSoftSkill}>A propos</p>
    </div>
  );
};

export default Nav;
