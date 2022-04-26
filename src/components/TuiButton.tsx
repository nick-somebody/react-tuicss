import { ButtonHTMLAttributes, FC, useCallback } from "react";
import { Color, MildColor } from "../types/enums";
import "./TuiButton.css";

export interface TuiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color | MildColor;
  textColor?: Color | MildColor;
  light?: boolean;
  fullWidth?: boolean;
}

const TuiButton: FC<TuiButtonProps> = (
  {
    textColor,
    fullWidth,
    light,
    color,
    className,
    disabled,
    ...props
  }: TuiButtonProps
) => {
  const getClassName = useCallback(() => {
    const classes = className?.split(" ") ?? [];
    classes.push("tui-button")
    if (disabled) { classes.push("disabled"); }
    if (color) { classes.push(color); }
    if (textColor) { classes.push(`${textColor}-text`); }
    if (light) { classes.push("light"); }
    if (fullWidth) { classes.push("fill"); }
    return classes.join(" ");
  }, [disabled, color, textColor, light, fullWidth])

  return (
    <button {...props } disabled={disabled} className={ getClassName() }>
      { props.children }
      <div className="tui-button-inner">
      </div>
    </button>
  )
}
export default TuiButton;