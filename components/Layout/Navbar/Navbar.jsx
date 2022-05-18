import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import logoImg from "./LogoImg.png";
import Link from "next/link";
import { nav, secondNav } from "../../../data/nav.js";
import cn from "classnames";

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [logoMarginLeft, setlogoMarginLeft] = useState();
  const handleScroll = () => {
    let scrollY = window.scrollY;
    if (scrollY > 20) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
    if (scrollY > 1250) {
      setNavbarShow(true);
    } else {
      setNavbarShow(false);
    }
  };
  const screenWidth = () => {
    const firstNavWidth = document.getElementById("first__nav").offsetWidth;
    const secondNavWidth = document.getElementById("second__nav").offsetWidth;
    const calcMargin = secondNavWidth - firstNavWidth;
    setlogoMarginLeft(calcMargin);
    // document.getElementById("logo").style.marginLeft = `${calcMargin}px`;
  };
  useEffect(() => {
    handleScroll();
    screenWidth();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {}, [logoMarginLeft]);
  return (
    <>
      <div
        className={cn(
          styles.navbar,
          { [styles.navbarFixed]: navbarFixed },
          { [styles.navbarShow]: navbarShow }
        )}
      >
        <div className={styles.container}>
          <nav className={styles.nav} id="first__nav">
            {nav.map(({ name, href, doughter }) => {
              return (
                <span className={styles.nav__item} key={href}>
                  <Link href={href}>
                    <a className={styles.nav__Link}> {name} </a>
                  </Link>
                  <ul className={styles.sub__linkList}>
                    {doughter.map(({ name, href }) => {
                      return (
                        <li key={href}>
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
          <div className={styles.logo} id="logo">
            <Link href={"/"}>
              <a>
                <img src={logoImg.src} alt="LogoImg" />
              </a>
            </Link>
          </div>
          <nav className={styles.nav} id="second__nav">
            {secondNav.map(({ name, href, doughter }) => {
              return (
                <span className={styles.nav__item} key={href}>
                  <Link href={href}>
                    <a className={styles.nav__Link}> {name} </a>
                  </Link>
                  <ul className={styles.sub__linkList}>
                    {doughter.map(({ name, href }) => {
                      if (name !== "ВАКАНСИИ") {
                        return (
                          <li key={href}>
                            <Link href={href}>
                              <a className={styles.subNav__link}>{name}</a>
                            </Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </span>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
