import axios from "../../api/axios.news";
import styles from "./Gallery.module.sass";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Gallery() {
  const [gallery, setGallery] = useState();
  useEffect(() => {
    const getLastNews = async () => {
      try {
        const res = await axios.get(
          "/galleries?sort=publishedAt:DESC&pagination[pageSize]=1&populate=galleryImages"
        );
        if (!res.data) {
          throw new Error();
        }
        // let mainDate = format(
        //   new Date(!res.data.data[0].publishedAt),
        //   "MMM dd"
        // );
        setGallery({
          ...res.data.data[0],
          // mainDate,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getLastNews();
  }, []);

  return (
    <section className={styles.gallery__container}>
      <div className={styles.gallery}>
        <a className={styles.gallery__item}>
          <img
            style={{ objectPosition: "top" }}
            src="/images/mainPhoto-1.jpg"
            alt=""
          />
        </a>
        <a className={styles.gallery__item}>
          <img
            style={{ objectPosition: "top" }}
            src="/images/mainPhoto-2.jpg"
            alt=""
          />
        </a>
        <a className={styles.gallery__item}>
          <img
            style={{ objectPosition: "top" }}
            src="/images/mainPhoto-3.jpg"
            alt=""
          />
        </a>
        <Link href="/gallery">
          <a className={styles.gallery__item}>
            <img
              style={{ objectPosition: "top" }}
              src="/images/mainPhoto-4.jpg"
              alt=""
            />
          </a>
        </Link>
        <Link href="/gallery">
          <a className={styles.goGalleries__btn}>Перейти в галерею</a>
        </Link>
      </div>
      <div className={styles.videoGallery}></div>
    </section>
  );
}
