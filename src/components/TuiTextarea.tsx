import React, { InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

function TuiTextarea({
  disabled,
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      disabled={ disabled }
      className={ inputClass({ disabled, className }) }
      {...props}
    ></textarea>
  )
}

export default TuiTextarea;