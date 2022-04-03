import React, { HTMLAttributes } from "react";
import TuiFieldset from "./TuiFieldset";
import TuiLegend from "./TuiLegend";

type TuiWindowProps = HTMLAttributes<HTMLDivElement> & {
  basic?: boolean;
  heading?: string;
}

function TuiWindow({
  children,
  basic,
  className,
  heading,
  ...props
}: TuiWindowProps) {
  const classNamer = () => {
    if (className) {
      return `tui-window ${className}`
    }
    return "tui-window"
  }
  if (basic) {
    return (
      <div { ...props } className={classNamer()}>
        { children }
      </div>
    )
  }
  return (
    <div { ...props } className={classNamer()}>
      <TuiFieldset title={ heading } role="presentation">
        { heading && <TuiLegend role="presentation">{ heading }</TuiLegend> }
        { children }
      </TuiFieldset>
    </div>
  )
}

export default TuiWindow;