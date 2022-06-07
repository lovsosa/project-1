import Head from "next/head";
import React, { Component } from "react";
import styles from "../../../styles/kfu/futureAndGoals.module.sass";

export default class futureAndGoals extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Видение и миссия союза</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main__container}>
          <h2 className={styles.main__title}>Видение и миссия союза</h2>
          <h3 className={styles.content__title}>
            Девиз Кыргызского футбольного союза гласит «Бирге алга!» - «Вместе
            вперед!»
          </h3>
          <div className={styles.main__content}>
            <div>
              <span className={styles.dflex}>
                <b>Видение:</b>
                <ol className={styles.content__list}>
                  <li>Футбол – спорт номер один в стране.</li>
                  <li>КФС в топ-10 национальных ассоциаций Азии</li>
                </ol>
              </span>
              <span className={styles.dflex}>
                <b>Миссия:</b>
                <ol className={styles.content__list}>
                  <li>Развитие членов КФС.</li>
                  <li>
                    Успешные национальные и клубные команды на международном
                    уровне.
                  </li>
                  <li>
                    Улучшение качества организации и проведения соревнований.
                  </li>
                  <li>Коммерциализация прав КФС.</li>
                  <li>
                    Эффективное управление и повышение кадрового потенциала.
                  </li>
                  <li>
                    Развитие массового (грассрутс) и детско-юношеского футбола.
                  </li>
                  <li>
                    Строительство новых и модернизация существующих объектов
                    футбольной инфраструктуры.
                  </li>
                </ol>
              </span>
            </div>
            <div className={styles.main__image}>
              <img src="/images/mainImage-5.jpg" alt="" />
            </div>
          </div>
        </main>
      </>
    );
  }
}