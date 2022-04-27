import { FC, HTMLAttributes, useMemo } from "react";
import TuiFieldset from "./TuiFieldset";
import TuiLegend from "./TuiLegend";

interface TuiWindowProps extends HTMLAttributes<HTMLDivElement> {
  basic?: boolean;
  heading?: string;
}

const TuiWindow: FC<TuiWindowProps> = ({
  children,
  basic,
  className,
  heading,
  ...props
}: TuiWindowProps) => {

  const classNames = useMemo(() => {
    if (className) {
      return `tui-window ${className}`
    }
    return "tui-window"
  }, [className])

  if (basic) {
    return (
      <div { ...props } className={ classNames }>
        { children }
      </div>
    )
  }
  return (
    <div { ...props } className={ classNames }>
      <TuiFieldset title={ heading } role="presentation">
        { heading && <TuiLegend role="presentation">{ heading }</TuiLegend> }
        { children }
      </TuiFieldset>
    </div>
  )
}

export default TuiWindow;