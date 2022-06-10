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
  const handlerScrollUp = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
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
          <div onClick={handlerScrollUp} className={styles.arrowUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
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
              size={30}
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
