import axios from "../../api/axios.news";
import styles from "./Gallery.module.sass";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Gallery() {
  return (
    <section className={styles.gallery__container}>
      <div className={styles.gallery}>
        <Link href="/gallery">
          <a className={styles.gallery__item}>
            <img
              style={{ objectPosition: "0 -50px" }}
              src="/images/mainPhoto-1.jpg"
              alt=""
            />
          </a>
        </Link>
        <Link href="/gallery">
          <a className={styles.gallery__item}>
            <img
              style={{ objectPosition: "top" }}
              src="/images/mainPhoto-2.jpg"
              alt=""
            />
          </a>
        </Link>
        <Link href="/gallery">
          <a className={styles.gallery__item}>
            <img src="/images/mainPhoto-3.jpg" alt="" />
          </a>
        </Link>
        <Link href="/gallery">
          <a className={styles.gallery__item}>
            <img
              style={{ objectPosition: "top" }}
              src="/images/mainPhoto-4.jpg"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className={styles.youTube__item}>
        <div className={styles.youTubeItem__image}>
          <Link href="https://www.youtube.com/channel/UC68xk5obCPDD035X2f9kVtA">
            <img
              src="/images/KyrgyzFootball__Logo.jpg"
              alt="KyrgyzFootball__Logo"
            />
          </Link>
        </div>
        <h4>Kyrgyz Football Union</h4>
        <span>8,31 тыс. подписчиков</span>
        <h3 className={styles.youTube__des}>Подпишитесь на наш ютуб канал!</h3>
        <Link href="https://www.youtube.com/channel/UC68xk5obCPDD035X2f9kVtA">
          <button>ПОДПИСАТЬСЯ</button>
        </Link>
      </div>
    </section>
  );
}
