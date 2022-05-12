import React from "react";
import styles from "./LastNews.module.sass";

export default function LastNews() {
  return (
    <section className={styles.lastNews}>
      <h2 className={styles.lastNews__title}>НОВОСТИ</h2>
      <ul className={styles.lastNews__container}>
        <li className={styles.lastNews__cart}>
          <img
            className={styles.header__img}
            src="/images/football.jpg"
            alt="#"
          />
          <div className={styles.newsCart__content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              velit!
            </p>
            <div className={styles.newsCart__contentDes}>
              <span className={styles.cartData}>25 мая / 28 мая</span>
              <button className={styles.cart__btn}>
                Подробнее <img src="/images/icons/Vector.svg" alt="#" />
              </button>
            </div>
          </div>
        </li>
        <li className={styles.lastNews__cart}>
          <img
            className={styles.header__img}
            src="/images/jeffrey.jpg"
            alt="#"
          />
          <div className={styles.newsCart__content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              velit!
            </p>
            <div className={styles.newsCart__contentDes}>
              <span className={styles.cartData}>25 мая / 28 мая</span>
              <button className={styles.cart__btn}>
                Подробнее <img src="/images/icons/Vector.svg" alt="#" />
              </button>
            </div>
          </div>
        </li>
        <li className={styles.lastNews__cart}>
          <img className={styles.header__img} src="/images/david.jpg" alt="#" />
          <div className={styles.newsCart__content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              velit!
            </p>
            <div className={styles.newsCart__contentDes}>
              <span className={styles.cartData}>25 мая / 28 мая</span>
              <button className={styles.cart__btn}>
                Подробнее <img src="/images/icons/Vector.svg" alt="#" />
              </button>
            </div>
          </div>
        </li>
      </ul>
      <button className={styles.allNews__btn}>Все новости</button>
    </section>
  );
}
