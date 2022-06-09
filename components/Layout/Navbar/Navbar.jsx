import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import logoImg from "./LogoImg.png";
import Link from "next/link";
import { nav, secondNav } from "../../../data/nav.js";
import cn from "classnames";
import { Spin as Hamburger } from "hamburger-react";
import NavbarFun from "./NavbarFun";

function Navbar() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [navLink, setNavLink] = useState([...nav, ...secondNav]);
  // const [filterNav, setFilterNav] = useState([]);

  const handleScroll = () => {
    let scrollY = window.scrollY;
    let doc = document;
    let height = Math.max(
      doc.body.scrollHeight,
      doc.documentElement.scrollHeight,
      doc.body.offsetHeight,
      doc.documentElement.offsetHeight,
      doc.body.clientHeight,
      doc.documentElement.clientHeight
    );
    closeList();
    // if (!filterNav) {
    //   closeList();
    // }
    if (scrollY >= 20) {
      setNavbarFixed(true);
      setOpen(false);
    } else {
      setNavbarFixed(false);
    }
    if (scrollY > height / 3) {
      setNavbarShow(true);
    } else {
      setNavbarShow(false);
    }
  };
  // useEffect(() => {
  //   const filNavFun = navLink.filter((item) => {
  //     if (item.doughter && item.doughter.length) {
  //       return item;
  //     }
  //   });
  //   setFilterNav(filNavFun);
  // }, []);
  useEffect(() => {
    // handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeList = () => {
    // let navStr = JSON.stringify(filterNav);
    // let navCopy = JSON.parse(navStr);
    let navCopy = [...navLink];
    navCopy.forEach((item) => {
      if (item.id) {
        item.active = false;
        item.doughter.forEach((item) => {
          item.active = false;
        });
      }
    });
    setNavLink(navCopy);
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
              <a onClick={closeList}>
                <img src={logoImg.src} alt="LogoImg" />
              </a>
            </Link>
          </div>
          <main
            className={cn(styles.navigation, {
              [styles.navigationVisible]: isOpen,
            })}
          >
            <nav className={styles.nav}>
              {navLink.map(({ name, href, active, doughter, id }, index) => {
                if (index >= 0 && index < 4) {
                  if (doughter) {
                    return (
                      <NavbarFun
                        key={href}
                        id={id}
                        name={name}
                        href={href}
                        active={active}
                        doughter={doughter}
                        nav={navLink}
                        setNav={setNavLink}
                        closeList={() => closeList()}
                      />
                    );
                  } else {
                    return (
                      <li key={href} className={styles.nav__list}>
                        <Link href={href}>
                          <a onClick={closeList} className={styles.main__link}>
                            {name}
                          </a>
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
                      <NavbarFun
                        key={href}
                        name={name}
                        href={href}
                        active={active}
                        doughter={doughter}
                        nav={navLink}
                        setNav={setNavLink}
                        closeList={() => closeList()}
                      />
                    );
                  } else {
                    return (
                      <li key={href} className={styles.nav__list}>
                        <Link href={href}>
                          <a onClick={closeList} className={styles.main__link}>
                            {name}
                          </a>
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
            <Hamburger
              color="rgba(12,64,131,1)"
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
