import React, { HtmlHTMLAttributes } from "react";

function TuiLegend (props: HtmlHTMLAttributes<HTMLLegendElement>) {
  return (
    <legend {...props}>
      { props.children }
    </legend>
  );
}

export default TuiLegend;
