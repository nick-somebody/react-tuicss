import React from "react";
import type TuiSidenav from "./TuiSidenav";

type TuiNavbarProps = {
  sidenav?: React.ReactNode;
  children?: React.ReactNode;
}

function TuiNavbar({ sidenav }: TuiNavbarProps) {

  return (
    <nav className="tui-nav absolute">
      { sidenav }
      
    </nav>
  )
}

export default TuiNavbar;