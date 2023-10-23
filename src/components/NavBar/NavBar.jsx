import React from "react";
import logo from "../../img/logonetflix.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import BotonHambur from "../BotonHambur/BotonHambur";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`${styles.nav} ${
          isScrolled ? styles.scroll : styles.notScroll
        }`}
      >
        <div className={styles.div1}>
          <img className={styles.logo} src={logo} alt="Netflix Logo" />

          <div className={`${styles.ul} ${nav ? styles.active : ""}`}>
            <div className={styles.links}>
              <a>Inicio</a>
              <a>Series</a>
              <a>Peliculas</a>
              <a>Novedades</a>
              <a>Mi Lista</a>
            </div>
          </div>
        </div>

        <div className={styles.div2}>
          <button className={styles.btn}>
            <FaMagnifyingGlass />
          </button>
          <button>Adultos</button>
          <button className={styles.btn}>
            <IoMdNotificationsOutline />
          </button>
        </div>
        <div className={styles.btnHambur}>
          <BotonHambur handleNav={handleNav} nav={nav} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
