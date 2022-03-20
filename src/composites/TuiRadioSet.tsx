import React from "react";
import TuiRadio, { TuiRadioProps} from "../components/TuiRadio";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import "./TuiRadioSet.css"

type RadioValue = string | number | readonly string[];


type TuiRadioSetProps = {
  heading: React.ReactNode;
  description?: React.ReactNode;
  options: TuiRadioProps[];
  onChange?: (value: RadioValue) => void;
  value?: RadioValue;
}

function TuiRadioSet(props: TuiRadioSetProps) {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    if (props.onChange !== undefined) {
      props.onChange(target.value)
    }
  }
  return (
    <TuiFieldset>
      <TuiLegend>{ props.heading}</TuiLegend>
      { props.description && <div className="tui-radio-description">{ props.description }</div> }
      {
        props.options.map((option, idx) => (
          <TuiRadio
          key={idx}
          label={ option.label }
          value={ option.value }
          onChange={ changeHandler }
          checked={ props.value === option.value }
          disabled={ option.disabled }
          />
        ))
      }
    </TuiFieldset>
  )
}

export default TuiRadioSet;