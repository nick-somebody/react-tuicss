import { ChangeEventHandler, FC, ReactNode, useCallback } from "react";
import TuiCheckbox, { TuiCheckboxProps } from "../components/TuiCheckbox";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import "./TuiCheckboxSet.css"

type CheckboxValue = string | number | readonly string[];
interface TuiCheckboxSetProps {
  "data-testid"?: string;
  heading: ReactNode;
  description?: ReactNode;
  options: TuiCheckboxProps[];
  onChange?: (values: CheckboxValue[]) => void;
  values?: CheckboxValue[];
}

const TuiCheckboxSet: FC<TuiCheckboxSetProps> = ({
  heading,
  description,
  options,
  onChange,
  values,
  ...props
}: TuiCheckboxSetProps) => {

  const checkboxHandler: any = (value: CheckboxValue) => {
    if (values === undefined || onChange === undefined) {
      return;
    }
    const idx = values.indexOf(value)
    if (idx >= 0) {
      const copy = [...values]
      copy.splice(idx, 1)
      onChange(copy)
    }
    else {
      onChange([...values, value]);
    }
  }

  return (
    <TuiFieldset { ...props}>
      <TuiLegend>{ heading}</TuiLegend>
      { description && <div className="tui-checkbox-description">{ description }</div> }
      {
        options.map((option, idx) => (
          <TuiCheckbox
            key={idx}
            label={option.label}
            value={option.value}
            onChange={() => checkboxHandler(option.value) }
            checked={values?.includes(option.value!)}
            disabled={option.disabled}
          />
        ))
      }
    </TuiFieldset>
  )
}

export default TuiCheckboxSet;