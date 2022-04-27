import { FC, FieldsetHTMLAttributes, useMemo } from "react";
import { fieldsetClass } from "../helpers";

const TuiFieldset: FC<FieldsetHTMLAttributes<HTMLFieldSetElement>> = ({
  disabled,
  className,
  ...props
}: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {

  const classNames = useMemo(() => fieldsetClass({ disabled, className }), [disabled, className])

  return (
    <fieldset disabled={disabled} className={ classNames } { ...props }>
      { props.children }
    </fieldset>
  );
}

export default TuiFieldset;