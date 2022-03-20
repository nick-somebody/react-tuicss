import React, { SelectHTMLAttributes, OptionHTMLAttributes, OptgroupHTMLAttributes } from "react";
import { selectClass } from "../helpers";

function TuiSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select { ...props } className={ selectClass(props) }>
      { props.children }
    </select>
  )
}

export function TuiOption(props: OptionHTMLAttributes<HTMLOptionElement>) {
  return (
    <option { ...props }>{props.children}</option>
  )
}
export function TuiOptGroup(props: OptgroupHTMLAttributes<HTMLOptGroupElement>) {
  return (
    <optgroup { ...props }>{props.children}</optgroup>
  )
}

export default TuiSelect;