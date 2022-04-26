import { FC, InputHTMLAttributes, useCallback } from "react";
import { inputClass } from "../helpers";

const TuiTextarea: FC<InputHTMLAttributes<HTMLTextAreaElement>> = ({
  disabled,
  className,
  children,
  ...props
}: InputHTMLAttributes<HTMLTextAreaElement>) => {

  const classNames = useCallback(() => {
    return inputClass({ disabled, className })
  }, [disabled, className])
  return (
    <textarea
      disabled={ disabled }
      className={ classNames() }
      { ...props }
    ></textarea>
  )
}

export default TuiTextarea;