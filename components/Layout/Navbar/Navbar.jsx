import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import logoImg from "./LogoImg.png";
import Link from "next/link";
import { nav, secondNav } from "../../../data/nav.js";
import cn from "classnames";
import { Divide, Divide as Hamburger } from "hamburger-react";

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleScroll = () => {
    let scrollY = window.scrollY;
    if (scrollY >= 20) {
      setNavbarFixed(true);
      setOpen(false);
      closeMenu();
    } else {
      setNavbarFixed(false);
    }
    if (scrollY > 1250) {
      setNavbarShow(true);
      closeMenu();
    } else {
      setNavbarShow(false);
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [navLink, setNavLink] = useState([...nav, ...secondNav]);
  const [navLinkActive, setNavLinkActive] = useState(false);

  const closeMenu = () => {
    let navLinkCopy = navLink.slice();
    let element = navLinkCopy.findIndex((item) => {
      if (item.doughter) {
        console.log(item.active);
        return item.active === true;
      }
    });
    console.log(element);
    if (element >= 0) {
      navLinkCopy[element].active = !navLinkCopy[element].active;
    } else if (element === -1) {
      return;
    }
  };

  const openMenu = (name) => {
    let navLinkCopy = navLink.slice();
    let element = navLinkCopy.findIndex((item) => {
      return item.name.indexOf(name) > -1;
    });
    navLinkCopy.forEach((item, index) => {
      if (item.doughter) {
        if (index !== element) {
          navLinkCopy[index].active = false;
        }
      }
    });
    if (navLinkCopy[element].active === false) {
      navLinkCopy[element].active = true;
      setNavLinkActive(true);
    } else if (navLinkCopy[element].active === true) {
      navLinkCopy[element].active = false;
      setNavLinkActive(false);
    }
    setNavLink([...navLinkCopy]);
  };

  const openSubMenu = (name, mainName) => {
    let navLinkCopy = navLink.slice();
    let elementIndex = navLinkCopy.findIndex((item) => {
      return item.name.indexOf(mainName) > -1;
    });
    let subElementIndex = navLinkCopy[elementIndex].doughter.findIndex(
      (item) => {
        return item.name.indexOf(name) > -1;
      }
    );
    navLinkCopy[elementIndex].doughter.forEach((item, index) => {
      if (item.doughter) {
        if (index !== subElementIndex) {
          item.active = false;
        }
      }
    });
    navLinkCopy[elementIndex].doughter[subElementIndex].active =
      !navLinkCopy[elementIndex].doughter[subElementIndex].active;
    setNavLink([...navLinkCopy]);
  };

  const SubLinkWithDoughter = ({ name, href, active, doughter, mainName }) => {
    return (
      <>
        <li
          className={styles.navList__link}
          onClick={() => openSubMenu(name, mainName)}
        >
          {name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(styles.arrowSvg, {
              [styles.arrowActive]: active,
            })}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>
        {active
          ? doughter.map(({ name, href }) => {
              return (
                <li key={href} className={styles.subNavList__link}>
                  <Link href={href}>{name}</Link>
                </li>
              );
            })
          : null}
      </>
    );
  };

  const NavLink = ({ name, active, doughter }) => {
    const mainName = name;
    return (
      <ul className={styles.nav__list}>
        <li
          className={cn(styles.main__link, {
            [styles.mainlinkActive]: active,
          })}
          onClick={() => openMenu(name)}
        >
          {name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(styles.arrowSvg)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </li>
        {active ? (
          <ul
            className={cn(styles.subNav__list, {
              [styles.subNavLinkActive]: navLinkActive,
            })}
          >
            {doughter.map(({ name, href, active, doughter }) => {
              if (doughter) {
                return (
                  <SubLinkWithDoughter
                    key={href}
                    name={name}
                    href={href}
                    active={active}
                    doughter={doughter}
                    mainName={mainName}
                  />
                );
              } else {
                return (
                  <li key={href} className={styles.navList__link}>
                    <Link href={href}>{name}</Link>
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
      </ul>
    );
  };

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
          <div className={styles.logo} id="logo">
            <Link href={"/"}>
              <a>
                <img src={logoImg.src} alt="LogoImg" />
              </a>
            </Link>
          </div>
          <main className={styles.navigation}>
            <nav className={styles.nav}>
              {navLink.map(({ name, href, active, doughter }, index) => {
                if (index >= 0 && index < 4) {
                  if (doughter) {
                    return (
                      <NavLink
                        key={href}
                        name={name}
                        href={href}
                        active={active}
                        doughter={doughter}
                      />
                    );
                  } else {
                    return (
                      <li key={href} className={styles.nav__list}>
                        <Link href={href}>
                          <a className={styles.main__link}>{name}</a>
                        </Link>
                      </li>
                    );
                  }
                } else {
                  return;
                }
              })}
            </nav>
            <nav className={styles.nav}>
              {navLink.map(({ name, href, active, doughter }, index) => {
                if (index > 3 && index < 8) {
                  if (doughter) {
                    return (
                      <NavLink
                        key={href}
                        name={name}
                        href={href}
                        active={active}
                        doughter={doughter}
                      />
                    );
                  } else {
                    return (
                      <li key={href} className={styles.nav__list}>
                        <Link href={href}>
                          <a className={styles.main__link}>{name}</a>
                        </Link>
                      </li>
                    );
                  }
                } else {
                  return;
                }
              })}
            </nav>
          </main>

          <div
            className={cn(styles.hamburger, {
              [styles.hamburgerVisible]: isOpen,
            })}
          >
            <Divide
              toggled={isOpen}
              toggle={setOpen}
              onToggle={(setOpen) => !setOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
