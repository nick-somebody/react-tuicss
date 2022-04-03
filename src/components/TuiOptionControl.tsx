import React, { DataHTMLAttributes, InputHTMLAttributes } from "react";
import { radioClass, checkboxClass } from "../helpers";
import TuiInput from "./TuiInput";


export type TuiOptionControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  type: "radio" | "checkbox";
  label: React.ReactNode;
  data?: Record<string, string>
}

function TuiOptionControl({
  disabled,
  className,
  label,
  type,
  data,
  ...props
}: TuiOptionControlProps) {

  const classMaker = () => {
    if (type === "checkbox") {
      return checkboxClass({ disabled, className })
    }
    return radioClass({ disabled, className })
  }

  return (
    <label { ...data } className={ classMaker() }>
      { label }
      <TuiInput disabled={ disabled } { ...props } type={ type } />
      <span className={ disabled ? 'disabled' : '' }></span>
    </label>
  )
}

export default TuiOptionControl;