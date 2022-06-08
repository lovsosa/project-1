import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cn from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.sass";

const variants = {
  init: {
    x: 0,
    y: 40,
    opacity: 0,
  },
  start: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};
const variantsChild = {
  init: {
    x: 20,
    y: 0,
    opacity: 0,
  },
  start: (index) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: index * 0.1,
    },
  }),
};

export default function NavbarFun({
  name,
  active,
  doughter,
  nav,
  setNav,
  closeList,
}) {
  const [navLinkActive, setNavLinkActive] = useState(false);
  const mainName = name;

  const openMenu = () => {
    let navCopy = nav.slice();
    const element = navCopy.findIndex((item) => {
      if (item.name === mainName) {
        return item;
      }
    });
    navCopy.forEach((item) => {
      if (item.name !== mainName) {
        item.active = false;
      }
      if (item.active === false) {
        item.doughter.forEach((item) => {
          item.active = false;
        });
      }
    });
    if (navCopy[element].active === false) {
      navCopy[element].active = true;
      setNavLinkActive(true);
    } else if (navCopy[element].active === true) {
      navCopy[element].active = false;
      setNavLinkActive(false);
    }
    setNav(navCopy);
  };

  const openSubMenu = (index, name) => {
    let navCopy = nav.slice();
    const element = navCopy.findIndex((item) => {
      if (item.name === mainName) {
        return item;
      }
    });
    navCopy[element].doughter.forEach((item) => {
      if (item.doughter) {
        if (item.name !== name) {
          item.active = false;
        }
      }
    });
    if (navCopy[element].active === true) {
      if (navCopy[element].doughter[index].active === false) {
        navCopy[element].doughter[index].active = true;
      } else if (navCopy[element].doughter[index].active === true) {
        navCopy[element].doughter[index].active = false;
      }
    }
    setNav(navCopy);
  };
  const handleScroll = (scrollY) => {
    console.log(scrollY);
    // let scrollY = window.scrollY;
    // if (scrollY >= 20) {
    //   closeList();
    // }
  };
  useEffect(() => {
    handleScroll();
    let scrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll(scrollY));
  }, []);
  // const closeMenu = () => {
  //   let navLinkCopy = navLink.slice();
  //   let element = navLinkCopy.findIndex((item) => {
  //     if (item.doughter) {
  //       return item.active === true;
  //     }
  //   });
  //   if (element >= 0) {
  //     navLinkCopy[element].active = !navLinkCopy[element].active;
  //   } else if (element === -1) {
  //     return;
  //   }
  // };

  const SubLinkWithDoughter = ({ name, subActive, doughter, index }) => {
    const variantsChild = {
      init: {
        x: 20,
        y: 0,
        opacity: 0,
      },
      start: (index) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: index * 0.1,
        },
      }),
    };
    return (
      <>
        <motion.li
          className={`${styles.navList__link} ${styles.relative}`}
          variants={variantsChild}
          initial="init"
          animate="start"
          custom={index}
          onClick={() => openSubMenu(index, name)}
        >
          {name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(styles.arrowSvg, {
              [styles.arrowActive]: subActive,
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
        </motion.li>
        {subActive &&
          doughter.map(({ name, href }) => {
            return (
              <motion.li
                key={href}
                variants={variantsChild}
                initial="init"
                animate="start"
                custom={index}
                className={styles.subNavList__link}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.subNavList__arrow}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                  />
                </svg>
                <Link href={href}>{name}</Link>
              </motion.li>
            );
          })}
      </>
    );
  };

  return (
    <ul className={styles.nav__list}>
      <li
        className={cn(styles.main__link, {
          [styles.mainlinkActive]: active,
        })}
        onClick={() => openMenu()}
      >
        {name}
        <svg
          variants={variants}
          initial="init"
          animate="start"
          exit="init"
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
      <AnimatePresence initial={true}>
        {active && (
          <>
            <motion.ul
              variants={variants}
              initial="init"
              animate="start"
              exit="init"
              className={cn(styles.subNav__list, {
                [styles.subNavLinkActive]: navLinkActive,
              })}
            >
              {doughter.map(({ name, href, active, doughter }, index) => {
                if (doughter) {
                  return (
                    <SubLinkWithDoughter
                      key={href}
                      index={index}
                      name={name}
                      href={href}
                      subActive={active}
                      doughter={doughter}
                    />
                  );
                } else {
                  return (
                    <motion.li
                      variants={variantsChild}
                      initial="init"
                      animate="start"
                      custom={index}
                      key={href}
                      className={styles.navList__link}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.navList__arrow}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                      </svg>
                      <Link href={href}>{name}</Link>
                    </motion.li>
                  );
                }
              })}
            </motion.ul>
            <div onClick={closeList} className={styles.backDrop}></div>
          </>
        )}
      </AnimatePresence>
    </ul>
  );
}
