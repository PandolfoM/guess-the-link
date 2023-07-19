import React, { CSSProperties, MouseEventHandler } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

interface Props {
  icon: StyledIcon;
  title: string;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  onClick?: MouseEventHandler;
  style?: CSSProperties;
}

export default function Icon(props: Props) {
  return (
    <props.icon
      onClick={props.onClick}
      size={props.size ? props.size : 32}
      strokeWidth={props.strokeWidth ? props.strokeWidth : 2}
      color={props.color}
      title={props.title}
      style={props.style}
    />
  );
}
