import React from "react";
import TuiCheckbox, { TuiCheckboxProps } from "../components/TuiCheckbox";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import "./TuiCheckboxSet.css"

type CheckboxValue = string | number | readonly string[];


type TuiCheckboxSetProps = {
  heading: React.ReactNode;
  description?: React.ReactNode;
  options: TuiCheckboxProps[];
  onChange?: (values: CheckboxValue[]) => void;
  values?: CheckboxValue[];
}

function TuiCheckboxSet(props: TuiCheckboxSetProps) {

  const checkboxHandler: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (props.values === undefined || props.onChange === undefined) {
      return;
    }
    const checkboxVal = props.values;
    const value = +target.value;
    const idx = checkboxVal.indexOf(value)
    if (idx >= 0) {
      const copy = [...checkboxVal]
      copy.splice(idx, 1)
      props.onChange(copy)
    }
    else {
      props.onChange([...checkboxVal, value]);
    }
  }
  return (
    <TuiFieldset>
      <TuiLegend>{ props.heading}</TuiLegend>
      { props.description && <div className="tui-checkbox-description">{ props.description }</div> }
      {
        props.options.map((option, idx) => (
          <TuiCheckbox
            key={idx}
            label={option.label}
            value={option.value}
            onChange={checkboxHandler}
            checked={props.values?.includes(option.value!)}
            disabled={option.disabled}
          />
        ))
      }
    </TuiFieldset>
  )
}

export default TuiCheckboxSet;