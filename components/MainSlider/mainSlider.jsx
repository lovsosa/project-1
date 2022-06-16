import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styles from "../../styles/Home.module.sass";
export default function MainSlider() {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      pagination={{
        type: "progressbar",
        progressbarFillClass: styles.swiperPaginationProgressbarFill,
      }}
      navigation
      breakpoints={{
        800: {
          navigation: {
            enabled: true,
          },
        },
      }}
      effect={"fade"}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className={styles.main__image}
    >
      <SwiperSlide>
        <img src="/images/mainPhoto-1.jpg" alt="mainImage" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/mainPhoto-2.jpg" alt="mainImage" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/mainPhoto-3.jpg" alt="mainImage" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/mainPhoto-4.jpg" alt="mainImage" />
      </SwiperSlide>
    </Swiper>
  );
}
