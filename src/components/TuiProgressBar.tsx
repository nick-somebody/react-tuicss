import type { FC, HtmlHTMLAttributes } from "react";
import { Color, DarkBackground, LightBackground } from "../types/enums";

interface ProgressBarProps extends HtmlHTMLAttributes<HTMLDivElement> {
  progress: number;
  barWidth: string;
}
interface CustomProgressBarProps extends ProgressBarProps {
  barColor: Color;
  backColor: DarkBackground | LightBackground;
}
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role
const CustomBar: FC<CustomProgressBarProps> = ({
  barColor,
  backColor,
  progress,
  barWidth,
  "aria-valuenow": ariaValueNow,
  "aria-valuemin": ariaValueMin,
  "aria-valuemax": ariaValueMax,
  "aria-valuetext": ariaValueText,
  ...props
}: CustomProgressBarProps) => {
  return (
    <>
      [
      <div
        className={ `tui-progress-bar inline-block ${backColor}` }
        style={ { width: barWidth }}
        aria-valuenow={ progress }
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={ `${progress}%` }
        role="progressbar"
        { ...props }>
        <span
          className={ `tui-progress ${barColor}` }
          style={ { width: `${progress}%` }}></span>
      </div> 
      ]
    </>
  )
}
type ColorKey = keyof typeof Color & keyof typeof DarkBackground;
const keys: ColorKey[] = ["Blue", "Green", "Cyan", "Red", "Purple", "Yellow", "Orange"]
const m: Record<ColorKey, FC<ProgressBarProps>> = {} as any;

for (const color of keys) {
  m[color] = (props: ProgressBarProps) => {
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