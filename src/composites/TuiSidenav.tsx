import { FC, useRef, ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import "./TuiSidenav.css";

interface TuiSidenavProps {
  children?: ReactNode;
  buttonText?: string;
}

const TuiSidenav: FC<TuiSidenavProps> = ({ children, buttonText }: TuiSidenavProps) => {

  const [active, setActive] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <li className="tui-sidenav-li">
      <button
        className="tui-sidenav-button"
        onClick={() => setActive(!active)}
        ref={ref}
      >{ active ? 'x' : '≡'}{ buttonText }</button>
      { active && createPortal((
        <nav className="tui-sidenav active absolute">
          <ul>
            { children }
          </ul>
        </nav>
        ),
        ref.current?.parentElement ?? document.body
      )}
    </li>
  )
}

export default TuiSidenav;