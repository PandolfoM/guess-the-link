"use client";

import { ArrowLeft } from "@styled-icons/feather";
import Button from "../components/Button";

export default function Modes() {
  return (
    <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Button kind="icon" icon={ArrowLeft} title="Back" href={"/"} size={25} />
      <h3>MODES</h3>
    </nav>
  );
}
