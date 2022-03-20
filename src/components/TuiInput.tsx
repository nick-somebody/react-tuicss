import React, { InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

function TuiInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={ inputClass(props)}
      type={ props.type ?? "text" }
    />
  )
}

export default TuiInput;