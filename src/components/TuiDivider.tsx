import React, { HTMLAttributes } from "react";

type TuiDividerProps = HTMLAttributes<HTMLHRElement> & {
  withSpace?: boolean
}

/**
 * withSpace defaults to true
 * returns a div if withspace is false otherwise returns a hr element
 */
function TuiDivider({ withSpace, ...props }: TuiDividerProps): JSX.Element {

  if (withSpace === false) {
    return <div className="tui-divider" { ...props }></div>
  }

  return (
    <hr className="tui-divider" { ...props } />
  )
}

export default TuiDivider;