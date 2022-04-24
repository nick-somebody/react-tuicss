import type { FC, InputHTMLAttributes, SelectHTMLAttributes } from "react"
import TuiInput from "../components/TuiInput"
import TuiSelect from "../components/TuiSelect"
import TuiTextarea from "../components/TuiTextarea"
import "./TuiLabeledInput.css"

export interface TuiLabeledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  block?: boolean
}

export const TuiLabeledInput: FC<TuiLabeledInputProps> = (props: TuiLabeledInputProps) => {

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiInput {...props} />
    </label>
  )
}

export interface TuiLabeledSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: React.ReactNode;
  block?: boolean
}

export const TuiLabeledSelect: FC<TuiLabeledSelectProps> = (props: TuiLabeledSelectProps) =>{

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiSelect {...props} />
    </label>
  )
}

export interface TuiLabeledTextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: React.ReactNode;
  block?: boolean
}

export const TuiLabeledTextarea: FC<TuiLabeledTextareaProps> = (props: TuiLabeledTextareaProps) => {

  return (
    <label htmlFor={props.id} className={ props.block ?? true ? "tui-block-label" : "" }>
      { props.label }
      <TuiTextarea {...props} />
    </label>
  )
}