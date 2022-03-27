import React from "react";
import "./TuiDropdown.css"

type TuiDropdownItemProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export function TuiDropdownItem({ children, onClick, href }: TuiDropdownItemProps) {
  const hasClicker = !!onClick;
  const hasLink = !!href;
  const noClickerOrLink = !hasClicker && !hasLink;
  return (
    <li>
      { hasClicker && <button onClick={ onClick }>{ children }</button>}
      { hasLink && <a href={href}>{ children }</a>}
      { noClickerOrLink && <div>{ children }</div>}
    </li>
  )
}

type TuiDropdownProps = {
  dropDownLabel: string | React.ReactNode;
  children: React.ReactNode;
  block?: boolean;
}

function TuiDropdown({ children, dropDownLabel, block }: TuiDropdownProps) {

  const classNameMaker = () => {
    const classes = ["tui-dropdown"]
    if (block) { classes.push("block"); }
    return classes.join(" ");
  };
  return (
    <li className={ classNameMaker() }>
      <span>{ dropDownLabel }</span>
      <div className="tui-dropdown-content">
        <ul>
          { children }
        </ul>
      </div>
    </li>
  )
}

export default TuiDropdown;