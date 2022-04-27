import { FC, InputHTMLAttributes, ReactNode, useMemo } from "react";
import { radioClass, checkboxClass } from "../helpers";
import TuiInput from "./TuiInput";


export interface TuiOptionControlProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  type: "radio" | "checkbox";
  label: ReactNode;
  data?: Record<string, string>
}

const TuiOptionControl: FC<TuiOptionControlProps> = ({
  disabled,
  className,
  label,
  type,
  data,
  ...props
}: TuiOptionControlProps)=> {

  const classNames = useMemo(() => {
    if (type === "checkbox") {
      return checkboxClass({ disabled, className })
    }
    return radioClass({ disabled, className })
  }, [disabled, className])

  return (
    <label { ...data } className={ classNames }>
      { label }
      <TuiInput disabled={ disabled } { ...props } type={ type } />
      <span className={ disabled ? 'disabled' : '' }></span>
    </label>
  )
}

export default TuiOptionControl;