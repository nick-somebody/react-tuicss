import React, { ButtonHTMLAttributes } from "react";
import { propFilter } from "../helpers";
import { Color, MildColor } from "../types/enums";
import "./TuiButton.css";

export type TuiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Color | MildColor;
  textColor?: Color | MildColor;
  fullWidth?: boolean;
}

function TuiButton(
  {
    textColor,
    fullWidth,
    color,
    ...props
  }: TuiButtonProps
) {
  const getClassName = () => {
    const classes = props.className?.split(" ") ?? [];
    classes.push("tui-button")
    if (props.disabled) { classes.push("disabled"); }
    if (color) { classes.push(color); }
    if (textColor) { classes.push(`${textColor}-text`); }
    if (fullWidth) { classes.push("fill"); }
    return classes.join(" ");
  }

  return (
    <button {...props } className={ getClassName() }>
      { props.children }
      <div className="tui-button-inner">
      </div>
    </button>
  )
}
export default TuiButton;