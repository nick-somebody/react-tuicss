import React, { Children } from "react";
import "./TuiNavbar.css";

type TuiNavbarProps = {
  sidenav?: React.ReactNode;
  children: React.ReactNode;
}

function TuiNavbar({ sidenav, children }: TuiNavbarProps) {

  return (
    <nav className="tui-nav absolute">
      <ul>
        { sidenav }
        { children }
      </ul>
    </nav>
  )
}

export default TuiNavbar;