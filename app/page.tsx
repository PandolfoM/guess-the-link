"use client";

import Icon from "./components/Icon";
import styles from "./page.module.scss";
import { Sliders, Users } from "@styled-icons/feather";

export default function Home() {
  return (
    <main>
      <div className={styles.wrapper}>
        <a className={`${styles.item} ${styles.play}`}>Play</a>
        <a className={`${styles.item} ${styles.categories}`}>Categories</a>
        <a className={`${styles.item} ${styles.friends}`}>
          <Icon icon={Users} />
        </a>
        <a className={`${styles.item} ${styles.settings}`}>
          <Icon icon={Sliders} />
        </a>
      </div>
    </main>
  );
}
