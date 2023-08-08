import styles from "./button.module.scss";
import React, { CSSProperties, MouseEventHandler } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { StyledIcon } from "@styled-icons/styled-icon";
import Icon from "../Icon";

type Props = {
  onClick?: MouseEventHandler;
  href: Url;
  newTab?: boolean;
  style?: CSSProperties;
  label?: string;
} & (IconProps | TextProps);

type IconProps = {
  kind: "icon";
  icon: StyledIcon;
  title: string;
  size?: number;
};

type TextProps = {
  kind?: "default";
  text: string;
};

export default function Button(props: Props) {
  return (
    <Link
      style={{ ...props.style }}
      className={styles.container}
      onClick={props.onClick}
      href={props.href}
      target={props.newTab ? "_blank" : "_self"}
      aria-label={props.label}>
      {props.kind === "icon" ? (
        <Icon icon={props.icon} title={props.title} size={props.size} />
      ) : (
        <>{props.text}</>
      )}
    </Link>
  );
}
