"use client";

import React from "react";
import styles from "./nav.module.scss";
import { Menu } from "@styled-icons/feather";
import Icon from "../Icon";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h3>Guess the Link</h3>
      <Icon icon={Menu} title="Menu" style={{ cursor: "pointer" }} />
    </nav>
  );
}
