import axios from "../../api/axios.news";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../styles/futsal/futsal.module.sass";
import Link from "next/link";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

export default function futsal() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`/futzals?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setData(res.data.data);
      } catch (error) {
        setData("Error");
      }
    };
    getData();
  }, []);
  if (data) {
    if (data === "Error") {
      return <Error />;
    } else {
      return (
        <div className={styles.container}>
          <Head>
            <title>Футзал</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.main__title}>Футзал</h1>
          <p className={styles.main__content}>
            Мини-футбол, или футзал FIFA — командный вид спорта, одна из
            разновидностей футбола, соревнования по которому проводятся под
            эгидой ФИФА. Другим похожим видом спорта является футбол в залах,
            или футзал AMF, который проводится под эгидой AMF.
          </p>
          <div className={styles.futsal__image}>
            <img
              className={styles.futsal__img}
              src="images/futsal.jpg"
              alt="Футзал"
            />
          </div>
          <div className={styles.pageLink__list}>
            {data.map(({ title, text, image, id }) => {
              return (
                <Link key={id} href={`/futsal/${id}`}>
                  <a className={styles.pageLink__item}>
                    <div className={styles.pageLink__image}>
                      <img src={image.url} alt={image.name} />
                    </div>
                    <h3 className={styles.pageLink__title}>{title}</h3>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      );
    }
  } else {
    return <Loader />;
  }
}
