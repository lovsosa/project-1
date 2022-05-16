import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "./Sponsors.module.sass";

const sponsors = [
  {
    name: "fifa",
    id: "1",
  },
  {
    name: "afc",
    id: "2",
  },
  {
    name: "kgBank",
    id: "3",
  },
  {
    name: "joma",
    id: "4",
  },
  {
    name: "shoro",
    id: "5",
  },
  {
    name: "unicef",
    id: "6",
  },
  {
    name: "frunze",
    id: "7",
  },
  {
    name: "europaPlus",
    id: "8",
  },
  {
    name: "kgSport",
    id: "9",
  },
  {
    name: "nitro",
    id: "10",
  },
  {
    name: "sheraton",
    id: "11",
  },
  {
    name: "biTaxi",
    id: "12",
  },
  {
    name: "megaCom",
    id: "13",
  },
];
export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <Swiper
        className={styles.sponsorsSwiper}
        slidesPerGroup={5}
        slidesPerView={5}
        speed={2000}
        autoplay={{
          disableOnInteraction: false,
          delay: 3000,
        }}
        modules={[Autoplay]}
        spaceBetween={50}
      >
        {sponsors.map(({ name, id }) => {
          return (
            <SwiperSlide key={name} className={styles.sponsorsSlider__item}>
              <img src={`/images/sponsors/sponsor-` + id + `.png`} alt={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
