import axios from "../../../api/axios.news";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/executiveCommit.module.sass";
import Masonry from "react-masonry-css";

export default function executiveCommit() {
  const [person, setPerson] = useState([]);
  useEffect(() => {
    const getPerson = async () => {
      try {
        const res = await axios.get(
          `/executive-commitets?sort=publishedAt:DESC&populate=image`
        );
        if (!res.data) {
          throw new Error();
        }
        setPerson(res.data.data);
      } catch (error) {}
    };
    getPerson();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Исполнительный комитет</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.main__title}>Исполнительный комитет</h1>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <span className={styles.content__text}>
            <b>Исполнительный комитет</b> – это постоянно действующий
            руководящий орган КФС. Исполком возглавляет президент Кыргызского
            футбольного союза. В Исполнительный комитет входят:
          </span>
          <ul className={styles.content__list}>
            <li>-Президент;</li>
            <li>-Первый Вице-президент</li>
            <li>-Член Исполнительного комитета АФК</li>
            <li>-Член Исполнительного комитета ФАЦА</li>
            <li>-3 (три) Вице-президента</li>
            <li>-10 (десять) членов</li>
          </ul>
        </div>
        <ul className={styles.sidebar}>
          {person.map(({ name, rank, id, image }) => {
            return (
              <li key={id} className={styles.sidebar__item}>
                <div className={styles.sidebarItem__image}>
                  <img src={image.url} alt={image.name} />
                </div>
                <h5 className={styles.sidebar__title}>{name}</h5>
                <span className={styles.sidebarRank}>{rank}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
