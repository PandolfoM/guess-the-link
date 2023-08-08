import React from "react";
import styles from "./footer.module.scss";
import Button from "../Button/Button";
import Divider from "../Divider";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider
        style={{
          width: "35%",
          borderRadius: "1.5px",
          height: "2px",
        }}
      />
      <h6>Guess the Link</h6>
      <p>
        <Button
          href="https://github.com/PandolfoM/guess-the-link/issues"
          text="Issues"
        />
      </p>
      <p>
        Built by <Button href="https://github.com/PandolfoM" text="PandolfoM" />
      </p>
    </footer>
  );
}
