import React, { AllHTMLAttributes } from "react";

type TuiPanelProps = AllHTMLAttributes<HTMLDivElement> & {
  header?: string;
}

function TuiPanel({ header, children, ...props }: TuiPanelProps) {
  return (
    <div className="tui-panel" { ...props }>
      {
        header && <div className="tui-panel-header">
          { header }
        </div>
      }
      <div className="tui-panel-content">
        { children }
      </div>
    </div>
  )
}

export default TuiPanel;