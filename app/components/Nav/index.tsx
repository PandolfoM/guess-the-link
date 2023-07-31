"use client";

import React from "react";
import styles from "./nav.module.scss";
import Icon from "../Icon";
import { ArrowLeft } from "@styled-icons/feather";

interface Props {
  page?: "default" | "route";
}

export default function Nav({ page }: Props) {
  return (
    <>
      {page === "route" ? (
        <nav className={`${styles.nav} ${styles.nav_route}`}>
          <Icon icon={ArrowLeft} title="Back" style={{ cursor: "pointer" }} />
        </nav>
      ) : (
        <nav className={`${styles.nav} ${styles.nav_default}`}>
          <h3>Guess the Link</h3>
          {/* <Icon icon={Menu} title="Menu" style={{ cursor: "pointer" }} /> */}
        </nav>
      )}
    </>
  );
}
