import type { FC, HtmlHTMLAttributes } from "react";

const TuiLegend: FC<HtmlHTMLAttributes<HTMLLegendElement>> = ({
  children,
  ...props
}: HtmlHTMLAttributes<HTMLLegendElement>) => {
  return (
    <legend {...props}>
      { children }
    </legend>
  );
}

export default TuiLegend;
