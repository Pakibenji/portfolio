import React from "react";

const Nav = () => {
  const toggleBodyScroll = () => {
    const formationPopup = document.querySelector(".formation-popup");
    const softskillPopup = document.querySelector(".softskill-popup");
    if (
      formationPopup.classList.contains("active") ||
      softskillPopup.classList.contains("active")
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const toggleFormation = () => {
    const formationPopup = document.querySelector(".formation-popup");
    const formation = document.querySelector(".formation");
    formationPopup.classList.toggle("active");
    formation.classList.toggle("active");
    if (window.innerWidth <= 1024) {
      removeSoftskillPopup();
      toggleBodyScroll();
    }
  };
  const toggleSoftSkill = () => {
    const softskillPopup = document.querySelector(".softskill-popup");
    const apropos = document.querySelector(".apropos");
    softskillPopup.classList.toggle("active");
    apropos.classList.toggle("active");
    if (window.innerWidth <= 1024) {
      removeFormationPopup();
      toggleBodyScroll();
    }
  };
  const removeFormationPopup = () => {
    const formationPopup = document.querySelector(".formation-popup");
    const formation = document.querySelector(".formation");
    if (formationPopup.classList.contains("active")) {
      formationPopup.classList.remove("active");
      formation.classList.remove("active");
    }
  };
  const removeSoftskillPopup = () => {
    const softskillPopup = document.querySelector(".softskill-popup");
    const apropos = document.querySelector(".apropos");
    if (softskillPopup.classList.contains("active")) {
      softskillPopup.classList.remove("active");
      apropos.classList.remove("active");
    }
  };
  return (
    <nav className="nav-container">
      <p className="formation" onClick={toggleFormation}>
        Formation
      </p>
      <p className="apropos" onClick={toggleSoftSkill}>
        A propos
      </p>
    </nav>
  );
};

export default Nav;
