import type { FC, InputHTMLAttributes } from "react";
import { inputClass } from "../helpers";

const TuiTextarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({
  disabled,
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      disabled={ disabled }
      className={ inputClass({ disabled, className }) }
      { ...props }
    ></textarea>
  )
}

export default TuiTextarea;