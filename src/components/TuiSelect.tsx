import React, { SelectHTMLAttributes, OptionHTMLAttributes, OptgroupHTMLAttributes } from "react";
import { selectClass } from "../helpers";

function TuiSelect({
  disabled,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select { ...props } disabled={ disabled } className={ selectClass({ disabled, className }) }>
      { children }
    </select>
  )
}

export function TuiOption({ children, ...props }: OptionHTMLAttributes<HTMLOptionElement>) {
  return (
    <option { ...props }>{children}</option>
  )
}
export function TuiOptGroup({ children, ...props }: OptgroupHTMLAttributes<HTMLOptGroupElement>) {
  return (
    <optgroup { ...props }>{children}</optgroup>
  )
}

export default TuiSelect;