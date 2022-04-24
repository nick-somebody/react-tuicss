import { FC, ReactNode } from "react";
import "./TuiDropdown.css"

interface TuiDropdownProps {
  dropDownLabel: string | ReactNode;
  children: ReactNode;
  block?: boolean;
}

const TuiDropdown: FC<TuiDropdownProps> = ({ children, dropDownLabel, block }: TuiDropdownProps) => {

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