import type { AllHTMLAttributes, FC } from "react";

interface TuiPanelProps extends AllHTMLAttributes<HTMLDivElement> {
  header?: string;
}

const TuiPanel: FC<TuiPanelProps> = ({ header, children, ...props }: TuiPanelProps) => {
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