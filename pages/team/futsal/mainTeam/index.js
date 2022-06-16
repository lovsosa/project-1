import styles from "../../../../styles/team/futsal.module.sass";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios.news";
import Error from "../../../../components/Error/Error";
import Loader from "../../../../components/Loader/Loader";

export default function MainTeam() {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [checkedRadio, setCheckedRadio] = useState(true);
  useEffect(() => {
    const getFirstData = async () => {
      try {
        const res = await axios.get(`/trenery-nskr-futzals?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setFirstData(res.data.data);
      } catch (error) {
        setFirstData("Error");
      }
    };
    getFirstData();
    const getSecondData = async () => {
      try {
        const res = await axios.get(`/igroki-nskr-futzals?populate=image`);
        if (!res.data) {
          throw new Error();
        }
        setSecondData(res.data.data);
      } catch (error) {
        setSecondData("Error");
      }
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
  if (firstData && secondData) {
    if (firstData === "Error" && secondData === "Error") {
      return <Error />;
    } else {
      return (
        <div className={styles.container}>
          <Head>
            <title>Национальная сборная Кыргызской Республики по футзалу</title>
            <meta
              name="description"
              content="Национальная сборная Кыргызской Республики по футзалу"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className={styles.main__title}>
            Национальная сборная Кыргызской Республики по футзалу
          </h1>
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
      );
    }
  } else {
    return <Loader />;
  }
}
