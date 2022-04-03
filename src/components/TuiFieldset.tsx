import { FieldsetHTMLAttributes } from "react";
import { fieldsetClass } from "../helpers";


function TuiFieldset({
  disabled,
  className,
  ...props
}: FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <fieldset disabled={disabled} className={ fieldsetClass({ disabled, className })} { ...props }>
      { props.children }
    </fieldset>
  );
}

export default TuiFieldset;