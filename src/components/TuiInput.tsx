import type { FC, InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

const TuiInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) =>{
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