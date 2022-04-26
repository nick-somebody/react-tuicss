import { FC, HtmlHTMLAttributes, useCallback } from "react";
import { Color, MildColor } from "../types/enums";
import "./TuiCode.css"

interface TuiCodeProps extends HtmlHTMLAttributes<HTMLPreElement> {
  color?: Color | MildColor;
  textColor?: Color | MildColor;
  code: string;
}

const TuiCode: FC<TuiCodeProps> = (
  {
    color,
    textColor,
    code,
    ...props
  }: TuiCodeProps
) => {

  const getClassName = useCallback(() => {
    const classes = props.className?.split(" ") ?? [];
    classes.push("tui-code")
    classes.push(color ?? MildColor.White);
    classes.push(`${textColor ?? MildColor.Black}-text`);
    return classes.join(" ");
  }, [color, textColor])

  return (
    <pre className={getClassName()} {...props}>
      <code role="figure">
        {code}
      </code>
    </pre>
  )
}

const TuiCodeDark: FC<TuiCodeProps> = (props: TuiCodeProps) => {

  return TuiCode({
    ...props,
    color: MildColor.Black,
    textColor: MildColor.Cyan
  })
}

const TuiCodeLight: FC<TuiCodeProps> =(props: TuiCodeProps) => {

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