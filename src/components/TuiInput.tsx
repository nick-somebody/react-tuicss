import { FC, InputHTMLAttributes, useMemo } from "react";
import { inputClass } from "../helpers";

const TuiInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  disabled,
  className,
  type,
  onChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) =>{
  const classNames = useMemo(() => {
    return inputClass({ disabled, className })
  }, [disabled, className])
  return (
    <input
      type={ type ?? "text" }
      disabled={ disabled }
      className={ classNames }
      onChange={onChange}
      readOnly={!onChange}
      {...props}
    />
  )
}

export default TuiInput;