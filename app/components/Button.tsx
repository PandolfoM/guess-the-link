import React, { CSSProperties, MouseEventHandler } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface Props {
  text?: String;
  onClick?: MouseEventHandler;
  href: Url;
  newTab?: boolean;
}

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
      {props.text}
    </Link>
  );
}
