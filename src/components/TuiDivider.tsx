import React from "react";

type TuiDividerProps = {
  withSpace?: boolean
}

/**
 * withSpace defaults to true
 * returns a div if withspace is false otherwise returns a hr element
 */
function TuiDivider({ withSpace }: TuiDividerProps): JSX.Element {

  if (withSpace === false) {
    return <div className="tui-divider"></div>
  }

  return (
    <hr className="tui-divider" />
  )
}

export default TuiDivider;