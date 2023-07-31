import Nav from "../components/Nav";
import React from "react";

export default function ModesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav page="route"></Nav>
      <main>{children}</main>
    </>
  );
}
