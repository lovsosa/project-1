import Head from "next/head";
import React from "react";
import styles from "./Error.module.sass";

export default function Error() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ошибка</title>ы
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.error__item}>
        <img
          src="/images/icons/6-teared-up-sad-soccer-ball-emoji-cartoon-clipart.jpg"
          alt="Error"
        />
        <h1 className={styles.main__title}>Извините, произошла ошибка</h1>
        <span className={styles.main__text}>Попробуйте позже</span>
      </div>
    </div>
  );
}
