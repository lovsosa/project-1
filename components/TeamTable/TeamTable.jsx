import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import styles from "./TeamTable.module.sass";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../Loader/Loader";

let firstTeamVar = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
  // margin: {
  //   once: true,
  //   amount: 1,
  // },
};
let secondTeamVar = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (num) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: num * 0.1,
    },
  }),
  // margin: {
  //   once: true,
  //   amount: 1,
  // },
};
let teamCartVar = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
    },
  }),
  // margin: {
  //   once: true,
  //   amount: 0.5,
  // },
};
export default function TeamTable() {
  const [teamHere, setTeamHere] = useState(null);
  const [lastMatch, setLastMatch] = useState(null);
  useEffect(() => {
    const getTeamTables = async () => {
      try {
        const res = await axios.get(
          "/team-tables?pagination[pageSize]=10&populate=TeamIcon"
        );
        if (!res.data) {
          throw new Error();
        }
        let teamSort = res.data.data.sort(function (a, b) {
          if (a.Points > b.Points) {
            return 1;
          }
          if (a.Points < b.Points) {
            return -1;
          }
          return 0;
        });
        let teamReverse = teamSort.reverse();
        setTeamHere([...teamReverse]);
      } catch (error) {
        console.log(error);
      }
    };
    getTeamTables();
    const getLastMatches = async () => {
      try {
        const res = await axios.get(
          "/poslednie-matchis?pagination[pageSize]=3&populate=firstTeam&populate=secondTeam"
        );
        if (!res.data) {
          throw new Error();
        }
        // let teamSort = res.data.data.sort(function (a, b) {
        //   if (a.Points > b.Points) {
        //     return 1;
        //   }
        //   if (a.Points < b.Points) {
        //     return -1;
        //   }
        //   return 0;
        // });
        // let teamReverse = teamSort.reverse();
        setLastMatch([...res.data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    getLastMatches();
  }, []);
  if (teamHere) {
    return (
      <div className={styles.slider__container}>
        <h2 id="TournamentTable" className={styles.team__title}>
          ТУРНИРНАЯ ТАБЛИЦА БК ОЛИМП ПРЕМЬЕР-ЛИГИ:
        </h2>
        <section className={styles.bestTeam}>
          <ul className={styles.lastMatches}>
            {lastMatch.map(
              ({
                firstTeamName,
                secondTeamName,
                secondTeam,
                firstTeam,
                date,
                id,
              }) => {
                return (
                  <li key={id} className={styles.lastMatches__item}>
                    <h5 className={styles.versusDate}>{date}</h5>
                    <div className={styles.teamVersus}>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 1,
                        }}
                        variants={firstTeamVar}
                        custom="0"
                        className={styles.first__team}
                      >
                        <div className={styles.vsTeamIcon__container}>
                          <img src={firstTeam.url} alt={firstTeam.name} />
                        </div>
                        <span>{firstTeamName}</span>
                      </motion.div>
                      <span className={styles.versus}>VS</span>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                          once: true,
                          amount: 1,
                        }}
                        variants={secondTeamVar}
                        custom="0"
                        className={styles.second__team}
                      >
                        <div className={styles.vsTeamIcon__container}>
                          <img src={secondTeam.url} alt={secondTeam.name} />
                        </div>
                        <span>{secondTeamName}</span>
                      </motion.div>
                    </div>
                  </li>
                );
              }
            )}
            {/* <li className={styles.lastMatches__item}>
              <h5 className={styles.versusDate}>11 июня</h5>
              <div className={styles.teamVersus}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 1,
                  }}
                  variants={firstTeamVar}
                  custom="1"
                  className={styles.first__team}
                >
                  <div className={styles.vsTeamIcon__container}>
                    <img src="/images/team/Kyrgyztan.jpg" alt="Kyrgyztan" />
                  </div>
                  <span>Кыргызстан</span>
                </motion.div>
                <span className={styles.versus}>VS</span>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 1,
                  }}
                  custom="1"
                  variants={secondTeamVar}
                  className={styles.second__team}
                >
                  <div className={styles.vsTeamIcon__container}>
                    <img
                      src="/images/team/Flag_of_Myanmar.svg"
                      alt="Flag_of_Myanmar"
                    />
                  </div>
                  <span>Мьянма</span>
                </motion.div>
              </div>
            </li>
            <li className={styles.lastMatches__item}>
              <h5 className={styles.versusDate}>11 июня</h5>
              <div className={styles.teamVersus}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 1,
                  }}
                  variants={firstTeamVar}
                  custom="2"
                  className={styles.first__team}
                >
                  <div className={styles.vsTeamIcon__container}>
                    <img src="/images/team/Kyrgyztan.jpg" alt="Kyrgyztan" />
                  </div>
                  <span>Кыргызстан</span>
                </motion.div>
                <span className={styles.versus}>VS</span>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 1,
                  }}
                  variants={secondTeamVar}
                  custom="2"
                  className={styles.second__team}
                >
                  <div className={styles.vsTeamIcon__container}>
                    <img src="/images/team/lgbt.svg.png" alt="lgbt" />
                  </div>
                  <span>Таджикистан</span>
                </motion.div>
              </div>
            </li> */}
          </ul>
          <ul className={styles.team__list}>
            <div className={styles.team__item}>
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
                    <motion.li
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.5,
                      }}
                      custom={index / 2}
                      variants={teamCartVar}
                      className={styles.team__cart}
                      key={id}
                    >
                      <span className={styles.teamNumber}>{index + 1}</span>
                      <span
                        className={styles.team__head}
                        style={{ justifyContent: "flex-start" }}
                      >
                        {TeamIcon ? (
                          <div>
                            <img src={TeamIcon.url} alt={TeamIcon.name} />
                          </div>
                        ) : null}
                        <p>«{TeamName}»</p>
                      </span>
                      <span>{Games}</span>
                      <span>{RG}</span>
                      <span>{Points}</span>
                    </motion.li>
                  );
                }
              )}
            </div>
          </ul>
        </section>
      </div>
    );
  } else {
    return <Loader />;
  }
}
