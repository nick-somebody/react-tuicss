import { InputHTMLAttributes, SelectHTMLAttributes } from "react"
import TuiInput from "../components/TuiInput"
import TuiSelect from "../components/TuiSelect"
import TuiTextarea from "../components/TuiTextarea"
import "./TuiLabelledInput.css"

export type TuiLabeledInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: React.ReactNode;
  block?: boolean
}

export function TuiLabeledInput(props: TuiLabeledInputProps) {

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiInput {...props} />
    </label>
  )
}

export type TuiLabeledSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: React.ReactNode;
  block?: boolean
}

export function TuiLabeledSelect(props: TuiLabeledSelectProps) {

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiSelect {...props} />
    </label>
  )
}

export type TuiLabeledTextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: React.ReactNode;
  block?: boolean
}

export function TuiLabeledTextarea(props: TuiLabeledTextareaProps) {

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiTextarea {...props} />
    </label>
  )
}