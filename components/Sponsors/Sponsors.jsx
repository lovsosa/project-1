import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import styles from "./Sponsors.module.sass";
import axios from "../../api/axios.news";
import Link from "next/link";
import Loader from "../Loader/Loader";

export default function Sponsors() {
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
        setPartners(false);
      }
    };
    getPartners();
  }, []);
  if (partners) {
    return (
      <section className={styles.sponsors}>
        <Swiper
          className={styles.sponsorsSwiper}
          speed={2000}
          autoplay={{
            disableOnInteraction: false,
            delay: 3000,
          }}
          breakpoints={{
            320: {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            750: {
              slidesPerGroup: 3,
              slidesPerView: 3,
              spaceBetween: 30,
            },
            950: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1250: {
              slidesPerGroup: 5,
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          spaceBetween={50}
        >
          {partners.map(({ name, image, url, id }) => {
            if (url) {
              return (
                <SwiperSlide key={id} className={styles.sponsorsSlider__item}>
                  <a href={url}>
                    <img src={image.url} alt={name} />
                  </a>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={id} className={styles.sponsorsSlider__item}>
                  <img src={image.url} alt={name} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </section>
    );
  } else {
    return <Loader />;
  }
}
