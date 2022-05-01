import { FC, HTMLAttributes, useMemo } from "react";
import { DarkBackground, LightBackground, ScreenSize } from "../types/enums";

interface TuiScreenProps extends HTMLAttributes<HTMLDivElement> {
  size: ScreenSize;
  bordered?: boolean;
  centered?: boolean;
  background: DarkBackground | LightBackground;
}

const TuiScreen: FC<TuiScreenProps> = ({
  children,
  size,
  bordered,
  centered,
  background,
  className,
  ...props
}: TuiScreenProps) => {

  const classNames = useMemo(() => {
    const classes: string[] = [size, background];
    if (className) { classes.push(className); }
    if (bordered) { classes.push("bordered"); }
    if (centered) { classes.push("centered"); }
    return classes.join(" ");
  }, [size, bordered, centered, background, className]);

  return (
    <div className={classNames} { ...props }>
      { children}
    </div>
  )
}

export default TuiScreen;