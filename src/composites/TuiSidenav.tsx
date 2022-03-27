import React, { useRef } from "react";
import { createPortal } from "react-dom";
import "./TuiSidenav.css";

type TuiSidenavProps = {
  children?: React.ReactNode;
  buttonText?: string;
}

function TuiSidenav({ children, buttonText }: TuiSidenavProps) {

  const [active, setActive] = React.useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <li className="tui-sidenav-li">
      <button
        className="tui-sidenav-button"
        onClick={() => setActive(!active)}
        ref={ref}
      >{active ? 'x' : '≡'}{ buttonText }</button>
      { active && createPortal((
        <nav className="tui-sidenav active absolute">
          { children }
        </nav>
        ),
        ref.current?.parentElement ?? document.body
      )}
    </li>
  )
}

export default TuiSidenav;