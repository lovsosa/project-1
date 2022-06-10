import axios from "../../api/axios.news";
import React, { useEffect, useState } from "react";
import styles from "./TeamTable.module.sass";
import { motion, AnimatePresence } from "framer-motion";

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
                custom="0"
                className={styles.second__team}
              >
                <div className={styles.vsTeamIcon__container}>
                  <img src="/images/team/singapur.png" alt="singapur" />
                </div>
                <span>Сингапур</span>
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
          </li>
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
                      <div>
                        <img src={TeamIcon.url} alt={TeamIcon.name} />
                      </div>
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
}
