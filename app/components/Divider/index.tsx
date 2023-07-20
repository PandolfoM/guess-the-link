"use client";

import { Separator } from "@radix-ui/react-separator";
import React, { CSSProperties } from "react";
import styles from "./divider.module.scss";

interface Props {
  layout?: "horizontal" | "vertical";
  style?: CSSProperties;
}

export default function Divider(props: Props) {
  return (
    <Separator
      orientation={props.layout}
      style={props.style}
      className={styles.divider}
    />
  );
}
