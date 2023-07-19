import React from "react";
import styles from "./footer.module.scss";
import Button from "../Button";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
