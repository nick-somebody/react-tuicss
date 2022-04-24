import type { SelectHTMLAttributes, OptionHTMLAttributes, OptgroupHTMLAttributes, FC } from "react";
import { selectClass } from "../helpers";

const TuiSelect: FC<SelectHTMLAttributes<HTMLSelectElement>> = ({
  disabled,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select { ...props } disabled={ disabled } className={ selectClass({ disabled, className }) }>
      { children }
    </select>
  )
}

export const TuiOption: FC<OptionHTMLAttributes<HTMLOptionElement>> = ({
  children,
  ...props
}: OptionHTMLAttributes<HTMLOptionElement>) => {
  return (
    <option { ...props }>{children}</option>
  )
}
export const TuiOptGroup: FC<OptgroupHTMLAttributes<HTMLOptGroupElement>> = ({
  children,
  ...props
}: OptgroupHTMLAttributes<HTMLOptGroupElement>) => {
  return (
    <optgroup { ...props }>{children}</optgroup>
  )
}

export default TuiSelect;