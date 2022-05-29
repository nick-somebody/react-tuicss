import { CSSProperties, FC, HTMLAttributes, useMemo } from "react";
import { Color, MildColor } from "../types/enums";
import "./TuiGrid.css"

interface TuiGridProps extends HTMLAttributes<HTMLDivElement> {
  borderColor?: Color | MildColor;
  columnFlow?: boolean;
  rowHeight?: string;
  columnHeight?: string;
}
const TuiGrid: FC<TuiGridProps> = ({
  borderColor,
  columnFlow,
  rowHeight,
  columnHeight,
  children,
  ...props
}) => {

  const classNames = useMemo(() => {
    const classes = ["tui-grid"];
    if (borderColor) {
      classes.push(borderColor);
    }
    if (columnFlow) {
      classes.push("column");
    }
    return classes.join(" ");
  }, [borderColor, columnFlow]);

  const styles = useMemo(() => {
    const s: CSSProperties = {};
    if (rowHeight) {
      s.gridAutoRows = rowHeight;
    }
    if (columnHeight) {
      s.gridAutoColumns = columnHeight;
    }
    return s
  }, [rowHeight, columnHeight]);

  return (
    <div className={ classNames } style={ styles } {...props}>
      { children }
    </div>
  )
}

interface TuiGridBlockProps extends HTMLAttributes<HTMLDivElement> {
  rowSpan?: number;
  colSpan?: number;
  bgColor?: Color | MildColor;
}

const TuiGridBlock: FC<TuiGridBlockProps> = ({
  rowSpan,
  colSpan,
  bgColor,
  children,
  ...props
}) => {

  const classNames = useMemo(() => {
    const classes = ["tui-grid-block"];
    if (bgColor) {
      classes.push(bgColor);
    }
    return classes.join(" ");
  }, [bgColor]);

  const styles = useMemo(() => {
    const s: CSSProperties = {};
    if (colSpan) {
      s.gridColumn = `span ${colSpan}`;
    }
    if (rowSpan) {
      s.gridRow = `span ${rowSpan}`;
    }
    return s
  }, [rowSpan, colSpan]);

  return (
    <div className={ classNames } style={ styles } {...props}>
      { children }
    </div>
  )
}

export { TuiGrid, TuiGridBlock }