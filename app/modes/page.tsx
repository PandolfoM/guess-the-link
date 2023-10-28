"use client";

import styles from "./modes.module.scss";
import Button from "../components/Button/Button";

export default function Modes() {
  return (
    <div className={styles.wrapper}>
      <Button text="Casual" href={"/modes"} style={{ background: "#68b685" }} />
      <Button
        text="Competitive"
        href={"/modes"}
        style={{ background: "#e3c251" }}
      />
      <Button
        text="Daily Challenge"
        href={"/modes"}
        style={{ background: "#b66868" }}
      />
    </div>
  );
}
