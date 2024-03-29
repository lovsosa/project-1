import axios from "../../../api/axios.news";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/kfu/partners.module.sass";
import Sponsors from "../../../components/Sponsors/Sponsors";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";

export default function Partners() {
  const [partners, setPartners] = useState(null);
  useEffect(() => {
    const getPartners = async () => {
      try {
        const res = await axios.get(`/partneries?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setPartners(res.data.data);
      } catch (error) {
        setPartners("Error");
      }
    };
    getPartners();
  }, []);
  if (partners) {
    if (partners === "Error") {
      return <Error />;
    } else {
      return (
        <div className={styles.container}>
          <Head>
            <title>Партнеры</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.main__title}>Партнеры</h1>
          <ul className={styles.content}>
            {partners.map(({ name, des, id, image }) => {
              return (
                <li key={id} className={styles.content__item}>
                  <div className={styles.contentItem__image}>
                    <img src={image.url} alt={image.name} />
                  </div>
                  <div className={styles.contentItem__text}>
                    <h3 className={styles.contentItem__title}>{name}</h3>
                    <span className={styles.contentItem__des}>{des}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <Sponsors />
        </div>
      );
    }
  } else {
    return <Loader />;
  }
}
