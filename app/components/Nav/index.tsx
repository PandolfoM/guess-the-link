"use client";

import React from "react";
import styles from "./nav.module.scss";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "@styled-icons/feather";

export default function Nav() {
  const router = usePathname();

  return (
    <>
      <nav className={styles.nav}>
        <h3>Guess the Link</h3>
        {router !== "/" && router !== "/play" && (
          <div>
            <Button
              kind="icon"
              icon={ArrowLeft}
              title="Back"
              href={"/"}
              size={25}
            />
            <h4>Modes</h4>
          </div>
        )}
      </nav>
    </>
  );
}
