import { FC, InputHTMLAttributes, useCallback } from "react";
import { inputClass } from "../helpers";

const TuiInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  className,
  type,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) =>{
  const classNames = useCallback(() => {
    return inputClass({ disabled, className })
  }, [disabled, className])
  return (
    <input
      type={ type ?? "text" }
      disabled={ disabled }
      className={ classNames() }
      {...props}
    />
  )
}

export default TuiInput;