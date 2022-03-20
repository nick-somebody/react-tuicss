import { FieldsetHTMLAttributes } from "react";
import { fieldsetClass } from "../helpers";


function TuiFieldset(props: FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <fieldset { ...props } className={ fieldsetClass({ disabled: props.disabled, className: props.className})}>
      { props.children }
    </fieldset>
  );
}

export default TuiFieldset;