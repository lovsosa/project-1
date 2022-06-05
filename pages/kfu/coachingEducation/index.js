import axios from "../../../api/axios.news";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/kfu/coachingEducation.module.sass";

export default function coachingEducation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/trenerskoe-obrazovanies?populate=fail`);
        if (!res.data) {
          throw new Error();
        }
        setData(res.data.data);
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Тренерское образование</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.main__title}>Тренерское образование</h1>
      <div className={styles.content}>
        <p className={styles.content__text}>
          Тренеры и наставники играют жизненно важную роль в развитии
          футболистов и самой игры. Кыргызский футбольный союз, понимая
          значимость роли тренерского состава, способствует совершенствованию и
          росту тренеров. Тренерская конвенция устанавливает правовые рамки, а
          тренерская программа направлена на всестороннее развитие тренерской
          профессии и тренерского образования посредством различных проектов и
          мероприятий. Кыргызский футбольный союз в рамках тренерского
          образования ежегодно проводит семинары для повышения квалификации
          тренеров. По всем интересующим вопросам вы можете обращаться к
          сотруднику технического отдела Нурсултану Усенову, тел: +996 552 203
          525 (сот.) Ниже представлен календарь тренерских курсов на 2022 год.
        </p>
        <div className={styles.content__image}>
          <img src="/images/trainer.jpg" alt="trainerKG" />
        </div>
      </div>
      <ul className={styles.info}>
        {data.map(({ name, id, fail }) => {
          return (
            <li key={id} className={styles.info__item}>
              <div className={styles.infoItem__icon}>
                <img src="/images/icons/pdf.png" alt={`pdf${name}`} />
              </div>
              <div className={styles.infoItem__des}>
                <span className={styles.infoItem__text}>{name}</span>
                <a href={fail[0].url}>Открыть</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
