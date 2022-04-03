import React, { HtmlHTMLAttributes } from "react";

function TuiLegend ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLLegendElement>) {
  return (
    <legend {...props}>
      { children }
    </legend>
  );
}

export default TuiLegend;
