import React, { CSSProperties, MouseEventHandler } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { StyledIcon } from "@styled-icons/styled-icon";
import Icon from "./Icon";

type Props = {
  onClick?: MouseEventHandler;
  href: Url;
  newTab?: boolean;
} & (IconProps | TextProps);

type IconProps = {
  kind: "icon";
  icon: StyledIcon;
  iconTitle: string;
};

type TextProps = {
  kind?: "default";
  text: string;
};

const styles: CSSProperties = {
  textDecoration: "none",
  color: "inherit",
};

export default function Button(props: Props) {
  return (
    <Link
      style={styles}
      onClick={props.onClick}
      href={props.href}
      target={props.newTab ? "_blank" : "_self"}>
      {props.kind === "icon" ? (
        <Icon icon={props.icon} title={props.iconTitle} />
      ) : (
        <>{props.text}</>
      )}
    </Link>
  );
}
