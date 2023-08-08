"use client";

import styles from "./modes.module.scss";
import { ArrowLeft } from "@styled-icons/feather";
import Button from "../components/Button/Button";

export default function Modes() {
  return (
    <>
      <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Button
          kind="icon"
          icon={ArrowLeft}
          title="Back"
          href={"/"}
          size={25}
        />
        <h3>MODES</h3>
      </nav>
      <div className={styles.wrapper}>
        <Button
          text="Casual"
          href={"/modes"}
          style={{ background: "#68b685" }}
        />
        <Button
          text="Competitive"
          href={"/modes"}
          style={{ background: "#decc57" }}
        />
        <Button
          text="Daily Challenge"
          href={"/modes"}
          style={{ background: "#b66868" }}
        />
      </div>
    </>
  );
}
