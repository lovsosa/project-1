import Link from "next/link";
import React, { useState } from "react";
import { nav, secondNav } from "../../../data/nav";
import styles from "./Footer.module.sass";

export default function Footer() {
  const [footerLink, setFooterLink] = useState([
    ...nav.slice(),
    ...secondNav.slice(),
  ]);
  const openMenu = (name) => {
    let footerLinkCopy = footerLink.slice();
    let element = footerLinkCopy.findIndex((item) => {
      return item.name.indexOf(name) > -1;
    });
    footerLinkCopy.forEach((item, index) => {
      if (item.doughter) {
        if (index !== element) {
          footerLinkCopy[index].active = false;
        }
      }
    });
    footerLinkCopy[element].active = !footerLinkCopy[element].active;
    setFooterLink([...footerLinkCopy]);
  };
  const openSubMenu = (mainName, name) => {
    let footerLinkCopy = footerLink.slice();
    let elementIndex = footerLinkCopy.findIndex((item) => {
      return item.name.indexOf(mainName) > -1;
    });
    let subElementIndex = footerLinkCopy[elementIndex].doughter.findIndex(
      (item) => {
        return item.name.indexOf(name) > -1;
      }
    );
    footerLinkCopy[elementIndex].doughter.forEach((item, index) => {
      if (item.doughter) {
        if (index !== subElementIndex) {
          item.active = false;
        }
      }
    });
    footerLinkCopy[elementIndex].doughter[subElementIndex].active =
      !footerLinkCopy[elementIndex].doughter[subElementIndex].active;
    setFooterLink([...footerLinkCopy]);
  };
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footer__listContainer}>
          {footerLink.map(({ name, href, doughter, active, id }) => {
            let mainName = name;
            if (doughter) {
              return (
                <ul key={href} className={styles.footerList}>
                  <li
                    onClick={() => openMenu(name)}
                    className={styles.mainFooter__link}
                  >
                    {name}
                    {active ? (
                      <svg
                        className={styles.arrowSvg}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className={styles.arrowSvg}
                        xmlns="http://www.w3.org/2000/svg"
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
                    )}
                  </li>
                  {active
                    ? doughter.map(({ href, name, active, doughter, id }) => {
                        if (doughter) {
                          return (
                            <ul
                              key={href}
                              onClick={() => openSubMenu(mainName, name)}
                            >
                              <li className={styles.subFooter__link}>
                                {name}
                                {active ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={styles.arrowSvg}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 15l7-7 7 7"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={styles.arrowSvg}
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
                                )}
                              </li>
                              {active
                                ? doughter.map(({ name, href, id }) => {
                                    return (
                                      <li
                                        key={href}
                                        className={styles.subSubFooter__link}
                                      >
                                        <Link href={href}>
                                          <a>{name}</a>
                                        </Link>
                                      </li>
                                    );
                                  })
                                : null}
                            </ul>
                          );
                        } else {
                          return (
                            <li key={href} className={styles.subFooter__link}>
                              <Link href={href}>
                                <a>{name}</a>
                              </Link>
                            </li>
                          );
                        }
                      })
                    : null}
                </ul>
              );
            } else {
              return (
                <li key={href} className={styles.mainFooter__link}>
                  <Link href={href}>
                    <a>{name}</a>
                  </Link>
                </li>
              );
            }
          })}
        </div>
        <div className={styles.about}>
          <div className={styles.about__link}>
            <a href="https://www.instagram.com/kfu_kg/?hl=ru">
              <img src="/images/icons/about-1.svg" alt="" />
            </a>
            <a href="https://www.facebook.com/KyrgyzFootballUnion/">
              <img src="/images/icons/about-2.svg" alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UC68xk5obCPDD035X2f9kVtA">
              <img src="/images/icons/about-3.svg" alt="" />
            </a>
            <a href="https://twitter.com/kfu_kg">
              <img src="/images/icons/about-4.svg" alt="" />
            </a>
          </div>
          <div className={styles.contact}>
            <div>
              <span href="google.com">
                Тел: <span> +996 312 51 82 84</span>
              </span>
            </div>
            <div>
              E-mail:
              <span href="google.com"> press@kfu.kg</span>
            </div>
            <div>
              E-mail:
              <span href="google.com"> commercial@kfu.kg</span>
            </div>
            <div className={styles.flex}>
              <a href="https://www.instagram.com/calipso.kg/" target='blank'>Made on Calipso</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
