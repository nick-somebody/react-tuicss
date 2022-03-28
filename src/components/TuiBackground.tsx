import React from "react";
import { Background, LightBackground, DarkBackground } from '../types/enums';

type TuiBackgroundProps = {
  color: Background | LightBackground | DarkBackground;
  children: React.ReactNode;
}

function TuiBackground({ color, children }: TuiBackgroundProps) {
  return (
    <div className={ color }>
      { children }
    </div>
  )
}

export default TuiBackground;