import React, { HtmlHTMLAttributes } from "react";
import { Color, MildColor } from "../types/enums";
import "./TuiCode.css"

type TuiCodeProps = HtmlHTMLAttributes<HTMLPreElement> & {
  color?: Color | MildColor;
  textColor?: Color | MildColor;
  code: string;
}

function TuiCode (
  {
    color,
    textColor,
    code,
    ...props
  }: TuiCodeProps
) {

  const getClassName = () => {
    const classes = props.className?.split(" ") ?? [];
    classes.push("tui-code")
    classes.push(color ?? MildColor.White);
    classes.push(`${textColor ?? MildColor.Black}-text`);
    return classes.join(" ");
  }

  return (
    <pre className={getClassName()} {...props}>
      <code role="figure">
        {code}
      </code>
    </pre>
  )
}

function TuiCodeDark(props: TuiCodeProps) {

  return TuiCode({
    ...props,
    color: MildColor.Black,
    textColor: MildColor.Cyan
  })
}

function TuiCodeLight(props: TuiCodeProps) {

  return TuiCode({
    ...props,
    color: MildColor.White,
    textColor: MildColor.Black
  })
}

export default {
  Custom: TuiCode,
  Dark: TuiCodeDark,
  Light: TuiCodeLight,
};