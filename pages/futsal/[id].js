import axios from "../../api/axios.news";
import Head from "next/head";
import React from "react";
import styles from "../../styles/futsal/futsalPage.module.sass";

export default function FootzalPage(pageData) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.main__title}>{pageData.title}</h1>
      <div className={styles.content}>
        <div className={styles.content__image}>
          <img src={pageData.image.url} alt={pageData.image.name} />
        </div>
        <p className={styles.content__text}>{pageData.text}</p>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await axios.get(`/futzals`);
  const paths = res.data.data.map((res) => {
    return {
      params: { id: String(res.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const res = await axios.get(`/futzals/${id}?populate=image`);
  const pageData = res.data.data;

  return {
    props: {
      ...pageData,
    },
    revalidate: 200,
  };
}
