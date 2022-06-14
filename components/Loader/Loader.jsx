import React from "react";
import styles from "./Loader.module.sass";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.ballItem}>
        <img
          className={styles.ballLoader}
          src="/images/icons/ball.png"
          alt="Loadding"
        />
        <span className={styles.ballDes}></span>
      </div>
    </div>
  );
}
