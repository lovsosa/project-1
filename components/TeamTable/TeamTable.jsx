import React from "react";
import { team } from "../../data/team";
import styles from "./TeamTable.module.sass";

export default function TeamTable() {
  return (
    <div className={styles.slider__container}>
      <section className={styles.tableTeam}>
        <h2 id="TournamentTable" className={styles.team__title}>
          ТУРНИРНАЯ ТАБЛИЦА БК ОЛИМП ПРЕМЬЕР-ЛИГИ:
        </h2>
        <ul className={styles.team__list}>
          <li className={styles.team__cart}>
            <span className={styles.teamNumber}>№</span>
            <span className={styles.team__head}>Команда</span>
            <span>И</span>
            <span>РГ</span>
            <span>О</span>
            <span>Выйгрыши</span>
            <span>Проигрыши</span>
          </li>
          {team.map(({ teamName, i, rg, o, imgSrc, teamId }) => {
            return (
              <li className={styles.team__cart} key={teamId}>
                <span className={styles.teamNumber}>{teamId}</span>
                <span
                  className={styles.team__head}
                  style={{ justifyContent: "flex-start" }}
                >
                  <div>
                    <img src={imgSrc} alt={teamName} />
                  </div>
                  <p>«{teamName}»</p>
                </span>
                <span>{i}</span>
                <span>{rg}</span>
                <span>{o}</span>
                <span>0</span>
                <span>0</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
