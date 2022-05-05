import React from "react";
import styles from "./Navbar.module.sass";
import logoImg from "./LogoImg.png";
import Link from "next/link";
import { nav, secondNav } from "../../../data/nav.js";

function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <nav className={styles.nav}>
            {nav.map(({ name, href }) => {
              return (
                <Link key={href} href={href}>
                  <a className={styles.nav__Link}>{name}</a>
                </Link>
              );
            })}
          </nav>
          <div className={styles.logo}>
            <img src={logoImg.src} alt="LogoImg" />
          </div>
          <nav className={styles.nav}>
            {secondNav.map(({ name, href }) => {
              return (
                <Link key={href} href={href}>
                  <a className={styles.nav__Link}>{name}</a>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
}

export default Navbar;
