import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import styles from "./LastNews.module.sass";
import Link from "next/link";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

let secondTeamVar = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
  // margin: {
  //   once: true,
  //   amount: 1,
  // },
};
export default function LastNews() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const getLastNews = async () => {
      try {
        const res = await axios.get(
          "/news-id?sort=publishedAt:DESC&pagination[pageSize]=4&populate=image"
        );
        if (!res.data) {
          throw new Error();
        }
        const resData = res.data.data.map((item) => {
          let mainDate = format(new Date(item.publishedAt), "MMMM dd");
          return {
            mainDate: mainDate,
            ...item,
          };
        });
        setNews([...resData]);
      } catch (error) {
        console.log(error);
      }
    };
    getLastNews();
  }, []);
  if (news) {
    if (news === "Error") {
      return <Error />;
    } else {
      return (
        <section className={styles.lastNews}>
          <h2 className={styles.lastNews__title} id="LastNews">
            ПОСЛЕДНИЕ НОВОСТИ
          </h2>
          <ul className={styles.lastNews__container}>
            {news.map(({ postDescription, mainDate, image, id }, index) => {
              return (
                <motion.li
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 1,
                  }}
                  variants={secondTeamVar}
                  custom={index}
                  key={id}
                  className={styles.lastNews__cart}
                >
                  <img
                    className={styles.header__img}
                    src={image.url}
                    alt={image.name}
                  />
                  <div className={styles.newsCart__content}>
                    <p>{postDescription}</p>
                    <div className={styles.newsCart__contentDes}>
                      <span className={styles.cartData}>{mainDate}</span>
                      <Link href={`/allNews/${id}`}>
                        <button className={styles.cart__btn}>
                          Подробнее{" "}
                          <img src="/images/icons/Vector.svg" alt="#" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
          <Link href={"/allNews"}>
            <a className={styles.allNews__btn}>
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Все новости
            </a>
          </Link>
        </section>
      );
    }
  } else {
    return <Loader />;
  }
}
