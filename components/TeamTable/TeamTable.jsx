import React from "react";
import { team } from "../../data/team";
import styles from "./TeamTable.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

export default function TeamTable() {
  return (
    <div className={styles.slider__container}>
      <section className={styles.tableTeam}>
        <h2 className={styles.team__title}>
          ТУРНИРНАЯ ТАБЛИЦА БК ОЛИМП ПРЕМЬЕР-ЛИГИ:
        </h2>
        <ul className={styles.team__list}>
          <li className={styles.team__cart}>
            <span className={styles.teamNumber}>№</span>
            <span className={styles.team__head}>Команда</span>
            <span>И</span>
            <span>РГ</span>
            <span>О</span>
            <span>Выйгрыши</span>
            <span>Проигрыши</span>
          </li>
          {team.map(({ teamName, i, rg, o, imgSrc, teamId }) => {
            return (
              <li className={styles.team__cart} key={teamId}>
                <span className={styles.teamNumber}>{teamId}</span>
                <span
                  className={styles.team__head}
                  style={{ justifyContent: "flex-start" }}
                >
                  <div>
                    <img src={imgSrc} alt={teamName} />
                  </div>
                  <p>«{teamName}»</p>
                </span>
                <span>{i}</span>
                <span>{rg}</span>
                <span>{o}</span>
                <span>0</span>
                <span>0</span>
              </li>
            );
          })}
        </ul>
        {/* <Swiper
          style={{
            padding: "0 5px",
          }}
          className={styles.tableSwiper}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
        >
          {team.map(({ teamName, i, rg, o, imgSrc, teamId }) => {
            return (
              <SwiperSlide key={teamId} className={styles.tableSlider__item}>
                <div className={styles.team__head}>
                  <img src={imgSrc} alt="#" />
                  <h4>«{teamName}»</h4>
                </div>
                <ul className={styles.rating}>
                  <li>
                    <span>И</span>
                    <p>{i}</p>
                  </li>
                  <li>
                    <span>РГ</span>
                    <p>{rg}</p>
                  </li>
                  <li>
                    <span>О</span>
                    <p>{o}</p>
                  </li>
                </ul>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </section>
    </div>
  );
}
