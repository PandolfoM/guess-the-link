"use client";

import Link from "next/link";
import Button from "./components/Button";
import Icon from "./components/Icon";
import PlayerCard from "./components/PlayerCard";
import styles from "./page.module.scss";
import { HelpCircle, Sliders, Users } from "@styled-icons/feather";

export default function Home() {
  return (
    <main>
      <PlayerCard />
      <div className={styles.wrapper}>
        <div className={`${styles.item} ${styles.play}`}>
          <Button text="Play" href={"/"} />
        </div>
        <div className={`${styles.item} ${styles.modes}`}>
          <Button text="Modes" href={"/modes"} />
        </div>
        <a className={`${styles.item} ${styles.friends}`}>
          <Icon icon={Users} title="Friends" />
        </a>
        <a className={`${styles.item} ${styles.settings}`}>
          <Icon icon={Sliders} title="Settings" />
        </a>
        <a className={`${styles.item} ${styles.help}`}>
          <Icon icon={HelpCircle} title="Help" />
        </a>
      </div>
    </main>
  );
}
