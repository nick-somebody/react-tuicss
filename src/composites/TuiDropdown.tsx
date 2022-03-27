import React from "react";
import "./TuiDropdown.css"

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