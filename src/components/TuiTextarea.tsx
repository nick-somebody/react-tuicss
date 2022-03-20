import React, { InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

function TuiTextarea(props: InputHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={ inputClass(props) }
    ></textarea>
  )
}

export default TuiTextarea;