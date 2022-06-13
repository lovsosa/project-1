import React from "react";
import styles from "./Error.module.sass";

export default function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.error__item}>
        <img
          src="/images/icons/6-teared-up-sad-soccer-ball-emoji-cartoon-clipart.jpg"
          alt="Error"
        />
        <h1 className={styles.main__title}>Извините, произошла ошибка</h1>
        <span className={styles.main__text}>Попробуйте позже</span>
      </div>
    </div>
  );
}
