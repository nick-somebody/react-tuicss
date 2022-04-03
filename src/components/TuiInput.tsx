import React, { InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

function TuiInput({
  disabled,
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={ type ?? "text" }
      disabled={ disabled }
      className={ inputClass({ disabled, className })}
      {...props}
    />
  )
}

export default TuiInput;