import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import styles from "./TeamTable.module.sass";

export default function TeamTable() {
  const [teamHere, setTeamHere] = useState([]);
  useEffect(() => {
    const getTeamTables = async () => {
      try {
        const res = await axios.get("/team-tables?populate=TeamIcon");
        if (!res.data) {
          throw new Error();
        }

        setTeamHere([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getTeamTables();
  }, []);
  return (
    <div className={styles.slider__container}>
      <h2 id="TournamentTable" className={styles.team__title}>
        ТУРНИРНАЯ ТАБЛИЦА БК ОЛИМП ПРЕМЬЕР-ЛИГИ:
      </h2>
      <section className={styles.bestTeam}>
        <ul className={styles.lastMatches}>
          <li className={styles.lastMatches__item}>
            <h5 className={styles.versusDate}>8 июня</h5>
            <div className={styles.teamVersus}>
              <div className={styles.first__team}>
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/Kyrgyztan.jpg" alt="" />
                </div>
                <span>Кыргызстан</span>
              </div>
              <span className={styles.versus}>VS</span>
              <div className={styles.second__team}>
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/singapur.png" alt="" />
                </div>
                <span>Сингапур</span>
              </div>
            </div>
          </li>
          <li className={styles.lastMatches__item}>
            <h5 className={styles.versusDate}>11 июня</h5>
            <div className={styles.teamVersus}>
              <div className={styles.first__team}>
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/Kyrgyztan.jpg" alt="" />
                </div>
                <span>Кыргызстан</span>
              </div>
              <span className={styles.versus}>VS</span>
              <div className={styles.second__team}>
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/Flag_of_Myanmar.svg" alt="" />
                </div>
                <span>Мьянма</span>
              </div>
            </div>
          </li>
          <li className={styles.lastMatches__item}>
            <h5 className={styles.versusDate}>11 июня</h5>
            <div className={styles.teamVersus}>
              <div className={styles.first__team}>
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/Kyrgyztan.jpg" alt="" />
                </div>
                <span>Кыргызстан</span>
              </div>
              <span className={styles.versus}>VS</span>
              <div className={styles.second__team}>
                <div className={styles.vsTeamIcon__container}>
                  {/* <img src="/images/team/lgbt.svg.png" alt="" /> */}
                </div>
                <span>Таджикистан</span>
              </div>
            </div>
          </li>
        </ul>
        <ul className={styles.team__list}>
          <li className={styles.team__cart}>
            <span className={styles.teamNumber}>№</span>
            <span className={styles.team__head}>Команда</span>
            <span>И</span>
            <span>РГ</span>
            <span>О</span>
          </li>
          {teamHere.map(
            ({ TeamName, Games, RG, Points, TeamIcon, id }, index) => {
              return (
                <li className={styles.team__cart} key={id}>
                  <span className={styles.teamNumber}>{index + 1}</span>
                  <span
                    className={styles.team__head}
                    style={{ justifyContent: "flex-start" }}
                  >
                    <div>
                      <img src={TeamIcon.url} alt={TeamIcon.name} />
                    </div>
                    <p>«{TeamName}»</p>
                  </span>
                  <span>{Games}</span>
                  <span>{RG}</span>
                  <span>{Points}</span>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </div>
  );
}
