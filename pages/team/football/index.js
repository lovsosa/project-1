import axios from "../../../api/axios.news";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/team/football.module.sass";

export default function football() {
  const [firstData, setFirstData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [checkedRadio, setCheckedRadio] = useState(true);
  useEffect(() => {
    const getFirstData = async () => {
      try {
        const res = await axios.get(
          `/trenery-naczionalnoj-sbornojs?populate=image`
        );
        if (!res.data) {
          throw new Error();
        }
        setFirstData(res.data.data);
      } catch (error) {}
    };
    getFirstData();
    const getSecondData = async () => {
      try {
        const res = await axios.get(
          `/igroki-naczionalnoj-sbornojs?populate=image`
        );
        if (!res.data) {
          throw new Error();
        }
        setSecondData(res.data.data);
      } catch (error) {}
    };
    getSecondData();
  }, []);
  const changeHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "first") {
      setCheckedRadio(true);
    } else {
      setCheckedRadio(false);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Национальная сборная Кыргызской Республики</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.main__title}>
        Национальная сборная Кыргызской Республики
      </h1>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h2 className={styles.content__title}>
            Национальная сборная Кыргызской Республики
          </h2>
          <p className={styles.content__text}>
            Управляющая организация — Кыргызский футбольный Союз, являющийся с
            1994 года членом АФК и ФИФА, также член ФАЦА.
          </p>
          <p className={styles.content__text}>
            С октября 2014 года главным тренером сборной является российский
            тренер Александр Крестинин. Основной капитан сборной — Валерий
            Кичин.
          </p>
          <p className={styles.content__text}>
            Домашние матчи команда проводит на стадионе имени Долона Омурзакова
            в Бишкеке, вмещающем 18 тысячи зрителей, и являющимся крупнейшим и
            главным стадионом страны.
          </p>
          <p className={styles.content__text}>
            По состоянию на конец 2021 года, Национальная сборная КР в рейтинге
            ФИФА занимала 96-е место среди 210 стран-членов ФИФА. Наивысшее
            место этой сборной в рейтинге ФИФА зафиксировано в апреле 2018 года,
            когда она занимала 75-е место, и самое низкое место зафиксировано в
            марте 2013 года, когда сборная занимала 201-е место.
          </p>
          <p className={styles.content__text}>
            Сборная в 2018 году смогла пройти квалификацию и впервые в своей
            истории вышла на финальный этап Кубка Азии 2019 в ОАЭ. В последние
            два-три года поднялась на новый уровень, и стала хорошим игроком в
            азиатском континенте.
          </p>
        </div>
        <div className={styles.team}>
          <form className={styles.team__radioBtn}>
            <span className={styles.teamCheckbox__span}>
              <input
                onChange={changeHandler}
                type="radio"
                name="team"
                id="team__1"
                checked={checkedRadio}
                value={"first"}
              />
              <label htmlFor="team__1">Тренерский штаб</label>
            </span>
            <span className={styles.teamCheckbox__span}>
              <input
                onChange={changeHandler}
                type="radio"
                name="team"
                id="team__2"
                value={"second"}
              />
              <label htmlFor="team__2">Состав команды</label>
            </span>
          </form>
          <ul className={styles.players__list}>
            {checkedRadio
              ? firstData.map(({ name, image, id }) => {
                  return (
                    <li key={id} className={styles.playersList__item}>
                      <div className={styles.personImage}>
                        {image ? (
                          <img src={image.url} alt={image.name} />
                        ) : (
                          <img
                            src="/images/team/mainNoname.png"
                            alt="footballUser"
                          />
                        )}
                      </div>
                      <span className={styles.playersItem__text}>{name}</span>
                    </li>
                  );
                })
              : secondData.map(({ name, image, id }) => {
                  return (
                    <li key={id} className={styles.playersList__item}>
                      <div className={styles.personImage}>
                        {image ? (
                          <img src={image.url} alt={image.name} />
                        ) : (
                          <img
                            src="/images/team/noname.png"
                            alt="footballUser"
                          />
                        )}
                      </div>
                      <span className={styles.playersItem__text}>{name}</span>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </div>
  );
}
