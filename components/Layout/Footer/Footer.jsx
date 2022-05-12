import Link from "next/link";
import React from "react";
import { nav, secondNav } from "../../../data/nav";
import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footer__listContainer}>
          <div>
            {nav.map(({ name, href, doughter }) => {
              return (
                <ul key={href} className={styles.footerLink__list}>
                  <li key={href} className={styles.footerList__link}>
                    <Link href={href}>
                      <a>{name}</a>
                    </Link>
                  </li>
                  {doughter.map(({ href, name }) => {
                    return (
                      <li key={href} className={styles.footerList__link}>
                        <Link href={href}>
                          <a>{name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div>
            {secondNav.map(({ name, href, doughter }) => {
              if (href !== "/Vacancies") {
                return (
                  <ul key={href} className={styles.footerLink__list}>
                    <li key={href} className={styles.footerList__link}>
                      <Link href={href}>
                        <a>{name}</a>
                      </Link>
                    </li>
                    {doughter.map(({ href, name }) => {
                      return (
                        <li key={href} className={styles.footerList__link}>
                          <Link href={href}>
                            <a>{name}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                );
              }
            })}
          </div>
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
              <a href="google.com">
                Тел: <span> +996 312 51 82 84</span>
              </a>
            </div>
            <div>
              E-mail: 
              <a href="google.com"> press@kfu.kg</a>
            </div>
            <div> 
              E-mail:
              <a href="google.com"> commercial@kfu.kg</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
