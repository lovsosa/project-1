import styles from "../../../styles/kfu/programs.module.sass";
import React from "react";
import Head from "next/head";

export default function Programs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Программы</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.main__title}>Программы</h1>
      <div className={styles.content}>
        <div className={styles.content__item}>
          <h3 className={styles.contentItem__title}>
            Программа развития элитной молодежи АФК
          </h3>
          <p className={styles.contentItem__text}>
            Программа развития элитной молодежи – это система подготовки молодых
            игроков в национальных ассоциациях, входящих в состав Азиатской
            футбольной конфедерации.
          </p>
          <p className={styles.contentItem__text}>
            Кыргызский футбольный союз – вторая национальная ассоциация в
            Центральной Азии, которая утверждена в качестве полноправного члена
            Программы.
          </p>
          <p className={styles.contentItem__text}>
            Для получения статуса полноправного члена Программы комиссия АФК
            оценивает национальные ассоциации по 20 основным критериям:
            руководство, планирование, организация, укомплектование персоналом,
            набор, финансы, оборудование, команды, тренировки, игры, выступления
            игроков, здоровье, фитнес, психология, благосостояние, образование,
            сотрудничество, оценка, правила и результаты.
          </p>
          <p className={styles.contentItem__text}>
            Национальная организация должна соответствовать как минимум первым
            11 критериям для принятия в полноправные члены Программы.
          </p>
          <p className={styles.contentItem__text}>
            Академии в свою очередь должны соответствовать всем критериям,
            прежде чем получить статус «Одна», «Две» или «Три звезды» по
            Программе развития элитной молодежи АФК.
          </p>
          <p className={styles.contentItem__text}>
            По системе статусности АФК для академий футбола максимальное
            количество «Звезд» - 3. В Азии такой статус имеет только академия
            &ldquo;Aspire&rdquo; в Катаре. Ассоциация футбола Узбекистана была
            включена в Программу ранее. Три футбольных академии этой страны
            удостоились статуса «двух звезд».
          </p>
          <p className={styles.contentItem__text}>
            Академия футбола имени Асылбека Момунова в городе Ош, как база для
            воспитания юных игроков, получила статус «Одна звезда». Этот статус
            позволяет выделить спортивное заведение на фоне всех остальных по
            качеству обучения, оснащению и многим другим сопутствующим
            параметрам.
          </p>
        </div>
        <div className={styles.content__item}>
          <h3 className={styles.contentItem__title}>
            Футбольная экосистема развития талантов ФИФА
          </h3>
          <p className={styles.contentItem__text}>
            ФИФА и Кыргызский футбольный союз приступают к реализации уникальной
            программы выявления и развития молодых талантов.
          </p>
          <p className={styles.contentItem__text}>
            Вступительным этапом к проекту стала видеоконференция Технического
            отдела КФС и экспертов ФИФА.
          </p>
          <p className={styles.contentItem__text}>
            Темой видеоконференции стала детализация запуска в действие
            программы поддержки национальных ассоциаций «Talent Development -
            Football Ecosystem Analysis».
          </p>
          <p className={styles.contentItem__text}>
            Основной задачей проекта является создание максимально благоприятных
            условий для выявления и развития талантливых воспитанников
            футбольных школ через рассмотрение и изучение кыргызстанского
            футбола как отдельной индивидуальной экосистемы.
          </p>
          <p className={styles.contentItem__text}>
            Руководителем программы является знаменитый тренер, а ныне
            функционер Международной федерации футбольных ассоциаций Арсен
            Венгер. В ноябре 2019 года специалист возглавил отдел ФИФА по
            глобальному развитию футбола.
          </p>
        </div>
      </div>
    </div>
  );
}
