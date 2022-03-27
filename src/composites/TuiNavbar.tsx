import React, { Children } from "react";
import "./TuiNavbar.css";
import { Position } from "../types/enums";

type TuiNavbarProps = {
  sidenav?: React.ReactNode;
  children: React.ReactNode;
  position?: Position
}

function TuiNavbar({ sidenav, children, position }: TuiNavbarProps) {
  return (
    <nav className={`tui-nav ${position ?? Position.Relative}`}>
      <ul>
        { sidenav }
        { children }
      </ul>
    </nav>
  )
}

export default TuiNavbar;