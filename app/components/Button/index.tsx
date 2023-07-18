import styles from "./button.module.scss";
import React, { MouseEventHandler } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

type Props = {
  text?: String;
  icon?: StyledIcon;
  size?: number | string;
  title?: string;
  onClick: MouseEventHandler;
};

export default function Button(props: Props) {
  return (
    <>
      {props.text && <button onClick={props.onClick}>{props.text}</button>}
      {props.icon && (
        <props.icon
          onClick={props.onClick}
          size={props.size}
          title={props.title}
        />
      )}
    </>
  );
}
