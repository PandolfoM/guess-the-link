"use client";

import React from "react";
import styles from "./nav.module.scss";
import Button from "../Button";
import { Menu } from "@styled-icons/feather";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h3>Guess the Link</h3>
      <div>
        <Button
          icon={Menu}
          size={32}
          title="Menu"
          onClick={() => console.log("pressed menu")}
        />
      </div>
    </nav>
  );
}
