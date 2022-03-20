import React, { HtmlHTMLAttributes } from "react";
import { Color, MildColor } from "../types/enums";
import "./TuiCode.css"


export type TuiButtonProps = HtmlHTMLAttributes<HTMLPreElement> & {
  color?: Color | MildColor;
  textColor?: Color | MildColor;
  code: string;
}

function TuiCode (props: TuiButtonProps) {

  const getClassName = () => {
    const classes = props.className?.split(" ") ?? [];
    classes.push("tui-code")
    classes.push(props.color ?? MildColor.White);
    classes.push(`${props.textColor ?? MildColor.Black}-text`);
    return classes.join(" ");
  }

  return (
    <pre className={getClassName()} {...props}>
      <code>
        {props.code}
      </code>
    </pre>
  )
}

export function TuiCodeDark(props: TuiButtonProps) {

  return TuiCode({
    ...props,
    color: MildColor.Black,
    textColor: MildColor.Cyan
  })
}

export function TuiCodeLight(props: TuiButtonProps) {

  return TuiCode({
    ...props,
    color: MildColor.White,
    textColor: MildColor.Black
  })
}

export default TuiCode;