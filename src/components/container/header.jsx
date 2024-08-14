import React from "react";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <section className="header__nav">
        <a
          href="https://api.nasa.gov/"
          target="__blank"
          className="header__nav-api"
        >
          Api Nasa
        </a>
        <a
          href="https://github.com/BryanGrandon/Nasa"
          className="btn-link"
          target="__blank"
        >
          <FaGithub /> Github
        </a>
      </section>
      <h1 className="header__title">Nasa</h1>
      <p className="header__description">
        National Aeronautics and Space Administration (NASA) is the government
        agency that manages the U.S. space program. This organization was
        founded in 1958 and has been working ever since on the development of
        technologies and missions aimed at increasing our knowledge of space.
      </p>
    </header>
  );
}

export default Header;
