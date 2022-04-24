import type { FC, HTMLAttributes } from "react";

interface TuiDividerProps extends HTMLAttributes<HTMLHRElement> {
  withSpace?: boolean
}

/**
 * withSpace defaults to true
 * returns a div if withspace is false otherwise returns a hr element
 */
const TuiDivider: FC<TuiDividerProps> = ({ withSpace, ...props }: TuiDividerProps) => {

  if (withSpace === false) {
    return <div className="tui-divider" { ...props }></div>
  }

  return (
    <hr className="tui-divider" { ...props } />
  )
}

export default TuiDivider;