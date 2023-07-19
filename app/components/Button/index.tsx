import styles from "./button.module.scss";
import React, { MouseEventHandler } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

interface Props {
  text?: String;
  onClick?: MouseEventHandler;
  href?: String;
}

export default function Button(props: Props) {
  return (
    <a onClick={props.onClick} href={props.href} target="_blank">
      {props.text}
    </a>
  );
}
