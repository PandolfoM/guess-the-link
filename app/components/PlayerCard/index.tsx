import React from "react";
import styles from "./playercard.module.scss";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function PlayerCard() {
  return (
    <div className={styles.container}>
      <Avatar className={styles.avatarRoot}>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/32248293?v=4"
          alt="Matthew Pandolfo"
          className={styles.avatarImage}
        />
        <AvatarFallback className={styles.avatarFallback}>MP</AvatarFallback>
      </Avatar>
      <div className={styles.playerInfo}>
        <h4 className={styles.name}>Matthew Pandolfo</h4>
        <p>Games won: 69</p>
        <p>Puzzle Pieces: 420</p>
      </div>
    </div>
  );
}
