import type { FC, ReactNode } from "react";
import "./TuiNavbar.css";
import { Position } from "../types/enums";

interface TuiNavbarProps {
  sidenav?: ReactNode;
  children: ReactNode;
  position?: Position;
}

const TuiNavbar: FC<TuiNavbarProps> = ({ sidenav, children, position }: TuiNavbarProps) => {
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