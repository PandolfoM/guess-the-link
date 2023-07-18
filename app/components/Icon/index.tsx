import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

interface Props {
  icon: StyledIcon;
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
}

export default function Icon(props: Props) {
  return (
    <props.icon
      size={props.size ? props.size : 32}
      strokeWidth={props.strokeWidth ? props.strokeWidth : 2}
      color={props.color}
    />
  );
}
