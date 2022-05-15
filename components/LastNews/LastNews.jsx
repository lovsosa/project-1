import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import styles from "./LastNews.module.sass";
import Link from "next/link";

export default function LastNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getLastNews = async () => {
      try {
        const res = await axios.get(
          "/news-id?sort=publishedAt:DESC&pagination[pageSize]=3&populate=image"
        );
        if (!res.data) {
          throw new Error();
        }
        setNews([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getLastNews();
  }, []);
  return (
    <section className={styles.lastNews}>
      <h2 className={styles.lastNews__title}>НОВОСТИ</h2>
      <ul className={styles.lastNews__container}>
        {news.map(({ postDescription, postDate, image, id }) => {
          console.log(image.url);
          return (
            <li key={id} className={styles.lastNews__cart}>
              <img
                className={styles.header__img}
                src={image.url}
                alt={image.name}
              />
              <div className={styles.newsCart__content}>
                <p>{postDescription}</p>
                <div className={styles.newsCart__contentDes}>
                  <span className={styles.cartData}>{postDate}</span>
                  <Link href={`/allNews/${id}`}>
                    <button className={styles.cart__btn}>
                      Подробнее <img src="/images/icons/Vector.svg" alt="#" />
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className={styles.allNews__btn}>Все новости</button>
    </section>
  );
}
