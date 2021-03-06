import { FC, useState } from "react";
import { TuiOptGroup, TuiOption } from "../components/TuiSelect";
import TuiCheckboxSet from "../composites/TuiCheckboxSet";
import TuiRadioSet from "../composites/TuiRadioSet";
import { TuiLabeledInput, TuiLabeledSelect, TuiLabeledTextarea } from "../composites/TuiLabeledInput";
import "./Inputs.css"
import TuiForm from "../composites/TuiForm";
import TuiCode from "../components/TuiCode";


const Inputs: FC = () => {
  const [text, setText] = useState("text");
  const [number, setNumber] = useState(25);
  const [color, setColor] = useState("#00FF00")
  const [checkboxVal, setCheckboxVal] = useState<number[]>([]);
  const [radioVal, setRadioVal] = useState<number>(0);
  
  return (
    <>
      <div className="tui-window" style={{ textAlign: "left" }}>
        <h2>Inputs</h2>
        <TuiForm
          heading="Form"
        >
          <TuiLabeledInput
            label="Text.......: "
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
          <TuiLabeledInput
            label="Disabled...: "
            value={text}
            disabled
            onChange={({ target }) => setText(target.value)}
          />
          <TuiLabeledInput
            label="Number.....: "
            type="number"
            step={1}
            value={number}
            onChange={({ target }) => setNumber(+target.value)}
          />
          <TuiLabeledInput
            label="Password...: "
            type="password"
            value={text}
            onChange={({ target }) => setText(target.value)}
          />
          <TuiLabeledInput 
            label="Color......: "
            type="color"
            value={color}
            onChange={({ target }) => setColor(target.value)}
          />
          <TuiLabeledSelect
            label="Select.....: "
          >
            <TuiOption>First</TuiOption>
            <TuiOption>Second</TuiOption>
            <TuiOption>Third</TuiOption>
            <TuiOptGroup label="Group">
              <TuiOption>First</TuiOption>
              <TuiOption>Second</TuiOption>
              <TuiOption>Third</TuiOption>
            </TuiOptGroup>
          </TuiLabeledSelect>
          <TuiLabeledInput 
            label="Date.......: "
            type="date"
            value="2019-01-01"
          />
          <TuiLabeledInput 
            label="Time.......: "
            type="datetime-local"
            value="2019-01-01T12:00"
          />
          <TuiCheckboxSet
            heading="Checkboxes"
            description="Add some biz"
            options={[
              { value: 1, label: "First" },
              { value: 2, label: "Second" },
              { value: 3, label: "Disabled", disabled: true },
            ]}
            onChange={(values) => { setCheckboxVal(values as number[])}}
            values={ checkboxVal }
          />
          <TuiRadioSet
            heading="Radios"
            options={[
              { value: 1, label: "First" },
              { value: 2, label: "Second" },
              { value: 3, label: "Disabled", disabled: true },
            ]}
            onChange={(value) => { setRadioVal(+value)}}
            value={ radioVal }
          />
          <TuiLabeledTextarea
            label="Textarea"
            value={"asdadasdasd"}
            style={{ width: "100%" }}
          />
          <TuiLabeledTextarea
            label="Disabled Textarea"
            value={"disabled"}
            disabled
            style={{ width: "100%" }}
          />
          <br />
          <TuiLabeledSelect
            label="Multiple"
            multiple
            style={{ width: "100%" }}
          >
            <TuiOption>---</TuiOption>
            <TuiOption>First</TuiOption>
            <TuiOption>Second</TuiOption>
            <TuiOption>Third</TuiOption>
            <TuiOptGroup label="Group">
              <TuiOption>First</TuiOption>
              <TuiOption>Second</TuiOption>
              <TuiOption>Third</TuiOption>
            </TuiOptGroup>

          </TuiLabeledSelect>
          <TuiLabeledInput
            label="File"
            className="full-width"
            type="file"
          />
        </TuiForm>
      </div>
        <TuiCode.Dark code={ `<TuiForm
  heading="Form"
>
  <TuiLabeledInput
    label="Text.......: "
    value={text}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Disabled...: "
    value={text}
    disabled
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput
    label="Number.....: "
    type="number"
    step={1}
    value={number}
    onChange={({ target }) => setNumber(+target.value)}
  />
  <TuiLabeledInput
    label="Password...: "
    type="password"
    value={text}
    onChange={({ target }) => setText(target.value)}
  />
  <TuiLabeledInput 
    label="Color......: "
    type="color"
    value={color}
    onChange={({ target }) => setColor(target.value)}
  />
  <TuiLabeledSelect
    label="Select.....: "
  >
    <TuiOption>First</TuiOption>
    <TuiOption>Second</TuiOption>
    <TuiOption>Third</TuiOption>
    <TuiOptGroup label="Group">
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
    </TuiOptGroup>
  </TuiLabeledSelect>
  <TuiLabeledInput 
    label="Date.......: "
    type="date"
    value="2019-01-01"
  />
  <TuiLabeledInput 
    label="Time.......: "
    type="datetime-local"
    value="2019-01-01T12:00"
  />
  <TuiCheckboxSet
    heading="Checkboxes"
    description="Add some biz"
    options={[
      { value: 1, label: "First" },
      { value: 2, label: "Second" },
      { value: 3, label: "Disabled", disabled: true },
    ]}
    onChange={(values) => { setCheckboxVal(values as number[])}}
    values={ checkboxVal }
  />
  <TuiRadioSet
    heading="Radios"
    options={[
      { value: 1, label: "First" },
      { value: 2, label: "Second" },
      { value: 3, label: "Disabled", disabled: true },
    ]}
    onChange={(value) => { setRadioVal(+value)}}
    value={ radioVal }
  />
  <TuiLabeledTextarea
    label="Textarea"
    value={"asdadasdasd"}
    style={{ width: "100%" }}
  />
  <TuiLabeledTextarea
    label="Disabled Textarea"
    value={"disabled"}
    disabled
    style={{ width: "100%" }}
  />
  <br />
  <TuiLabeledSelect
    label="Multiple"
    multiple
    style={{ width: "100%" }}
  >
    <TuiOption>---</TuiOption>
    <TuiOption>First</TuiOption>
    <TuiOption>Second</TuiOption>
    <TuiOption>Third</TuiOption>
    <TuiOptGroup label="Group">
      <TuiOption>First</TuiOption>
      <TuiOption>Second</TuiOption>
      <TuiOption>Third</TuiOption>
    </TuiOptGroup>

  </TuiLabeledSelect>
  <TuiLabeledInput
    label="File"
    className="full-width"
    type="file"
  />
</TuiForm>` } />
  </>
  )
}

export default Inputs;