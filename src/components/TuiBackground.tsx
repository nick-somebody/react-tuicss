import type { FC } from "react";
import { Background, LightBackground, DarkBackground } from '../types/enums';

interface TuiBackgroundProps {
  color: Background | LightBackground | DarkBackground;
  children: React.ReactNode;
}

const TuiBackground: FC<TuiBackgroundProps> = ({ color, children }: TuiBackgroundProps) => {
  return (
    <div className={ color }>
      { children }
    </div>
  )
}

export default TuiBackground;