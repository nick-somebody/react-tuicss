import { FC, ReactNode, useMemo } from "react";
import "./TuiDropdown.css"

interface TuiDropdownProps {
  "data-testid"?: string;
  dropDownLabel: string | ReactNode;
  children: ReactNode;
  block?: boolean;
}

const TuiDropdown: FC<TuiDropdownProps> = ({
  children,
  dropDownLabel,
  block,
  ...props
}: TuiDropdownProps) => {

  const classNames = useMemo(() => {
    const classes = ["tui-dropdown"]
    if (block) { classes.push("block"); }
    return classes.join(" ");
  }, [block]);

  return (
    <li { ...props } className={ classNames }>
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