import React from "react";

type TuiPanelProps = {
  header?: string;
  children: React.ReactNode;
}

function TuiPanel({ header, children }: TuiPanelProps) {
  return (
    <div className="tui-panel">
      {
        header && <div className="tui-panel-header"></div>
      }
      <div className="tui-panel-content">
        { children }
      </div>
    </div>
  )
}

export default TuiPanel;