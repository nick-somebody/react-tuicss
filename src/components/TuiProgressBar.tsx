import React from "react";
import { Color, DarkBackground, LightBackground } from "../types/enums";

type ProgressBarProps = {
  progress: number;
  barWidth: string;
}
type CustomProgressBarProps = ProgressBarProps & {
  barColor: Color;
  backColor: DarkBackground | LightBackground;
}

function CustomBar(props: CustomProgressBarProps) {
  return (
    <>
      [
      <div className={ `tui-progress-bar inline-block ${props.backColor ?? DarkBackground.Red}` } style={ { width: props.barWidth }}>
          <span className={ `tui-progress ${props.barColor ?? Color.Red}` } style={ { width: `${props.progress}%` }}></span>
      </div> 
      ]
    </>
  )
}
type ColorKey = keyof typeof Color & keyof typeof DarkBackground;
const keys: ColorKey[] = ["Blue", "Green", "Cyan", "Red", "Purple", "Yellow", "Orange"]
const m: Record<ColorKey, (props: ProgressBarProps) => JSX.Element> = {} as any;

for (const color of keys) {
  m[color] = function (props: ProgressBarProps) {
    return CustomBar({
      barColor: Color[color],
      backColor: DarkBackground[color],
      ...props
    })
  }
}

export default {
  Custom: CustomBar,
  ...m
};