import React from "react";
import styles from "./Loader.module.sass";

export default function Loader() {
  return (
    <div className={styles.container}>
      <img
        className={styles.ballLoader}
        src="/images/icons/ball.png"
        alt="Loadding"
      />
    </div>
  );
}
