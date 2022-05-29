import { CSSProperties, FC, HTMLAttributes, useMemo } from "react";
import "./TuiFlexPane.css"

interface TuiFlexNodeProps extends HTMLAttributes<HTMLDivElement> {
  grow?: boolean;
  shrink?: boolean;
  width?: string;
}
export const TuiFlexNode: FC<TuiFlexNodeProps> = ({
  grow,
  shrink,
  width,
  children,
  ...props
}) => {

  const style = useMemo((): CSSProperties => {
    return {
      flexGrow: grow ? 1 : 0,
      flexShrink: grow ? 1 : 0,
      flexBasis: width ? width : "unset",
    }
  }, [grow, shrink, width])

  return (
    <div { ...props } style={ style } className="tui-flex-node">
      { children }
    </div>
  )
}

interface TuiFlexPaneProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
}

const TuiFlexPane: FC<TuiFlexPaneProps> = ({
  vertical,
  children,
  ...props
}) => {

  const classNames = useMemo(() => {
    const classes = ["tui-flex-pane"];
    if (vertical) {
      classes.push("vertical")
    }
    return classes.join(" ")
  }, [vertical])

  return (
    <div { ...props } className={ classNames }>
      { children }
    </div>
  )
}

export default TuiFlexPane;