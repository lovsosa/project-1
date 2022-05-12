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
            {nav.map(({ name, href, doughter }) => {
              return (
                <span className={styles.list__item} key={href}>
                  <Link href={href}>
                    <a className={styles.nav__Link}> {name} </a>
                  </Link>
                  <ul className={styles.sub__linkList}>
                    {doughter.map(({ name, href }) => {
                      return (
                        <li key={href} className={styles.sub__linkItem}>
                          <Link href={href}>
                            <a className={styles.subNav__link}>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </span>
              );
            })}
          </nav>
          <div className={styles.logo}>
            <img src={logoImg.src} alt="LogoImg" />
          </div>
          <nav className={styles.nav}>
            {secondNav.map(({ name, href, doughter }) => {
              return (
                <span className={styles.list__item} key={href}>
                  <Link href={href}>
                    <a className={styles.nav__Link}> {name} </a>
                  </Link>
                  <ul className={styles.sub__linkList}>
                    {doughter.map(({ name, href }) => {
                      return (
                        <li key={href} className={styles.sub__linkItem}>
                          <Link href={href}>
                            <a className={styles.subNav__link}>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </span>
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
