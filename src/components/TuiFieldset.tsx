import type { FC, FieldsetHTMLAttributes } from "react";
import { fieldsetClass } from "../helpers";

const TuiFieldset: FC<FieldsetHTMLAttributes<HTMLFieldSetElement>> = ({
  disabled,
  className,
  ...props
}: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {
  return (
    <fieldset disabled={disabled} className={ fieldsetClass({ disabled, className })} { ...props }>
      { props.children }
    </fieldset>
  );
}

export default TuiFieldset;