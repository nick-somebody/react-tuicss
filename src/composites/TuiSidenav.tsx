import { FC, ReactNode, useState, useEffect, useMemo } from "react";
import "./TuiSidenav.css";

interface TuiSidenavProps {
  children?: ReactNode;
  buttonText?: string;
}

const TuiSidenav: FC<TuiSidenavProps> = ({ children, buttonText }: TuiSidenavProps) => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(false)
      }
    }
    window.addEventListener("keydown", listener, false)
    return () => window.removeEventListener("keydown", listener)
  }, [active])

  const classnames = useMemo(() => {
    const classes = ["tui-sidenav", "absolute"]
    if (active) { classes.push("active")}
    return classes.join(" ")
  }, [active])

  return (
    <li className="tui-sidenav-li">
      <button
        className="tui-sidenav-button"
        onClick={() => setActive(!active)}
      >{ active ? 'x' : '≡'}{ buttonText }</button>
      <nav className={ classnames }>
        <ul>
          { children }
        </ul>
      </nav>
    </li>
  )
}

export default TuiSidenav;