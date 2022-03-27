import React from "react";
import TuiFieldset from "./TuiFieldset";
import TuiLegend from "./TuiLegend";

type TuiWindowProps = {
  children: React.ReactNode;
  basic?: boolean;
  heading?: string;
}

function TuiWindow({ children, basic, heading }: TuiWindowProps) {
  if (basic) {
    return (
      <div className="tui-window">
        { children }
      </div>
    )
  }
  return (
    <div className="tui-window">
      <TuiFieldset title={ heading } role="presentation">
        { heading && <TuiLegend role="presentation">{ heading }</TuiLegend> }
        { children }
      </TuiFieldset>
    </div>
  )
}

export default TuiWindow;