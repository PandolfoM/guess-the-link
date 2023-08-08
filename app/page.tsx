"use client";

import Button from "./components/Button/Button";
import PlayerCard from "./components/PlayerCard";
import styles from "./page.module.scss";
import { HelpCircle, Sliders, Users } from "@styled-icons/feather";

export default function Home() {
  return (
    <main>
      <PlayerCard />
      <div className={styles.wrapper}>
        <Button text="Play" href={"/play"} label="play" />
        <Button text="Modes" href={"/modes"} label="modes" />
        <Button
          kind="icon"
          icon={Users}
          title="Friends"
          href={"/friends"}
          label="friends"
        />
        <Button
          kind="icon"
          icon={Sliders}
          title="Settings"
          href="/settings"
          label="settings"
        />
        <Button
          kind="icon"
          icon={HelpCircle}
          title="Help"
          href="/help"
          label="help"
        />
      </div>
    </main>
  );
}
