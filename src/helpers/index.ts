import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";


let id = 0;

type InputProps = SelectHTMLAttributes<HTMLSelectElement>
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>;

export const textColorClass = (textColor: string) => `${textColor}-text`

const inputClassNameMaker = (baseClass: string) => {
  return (
    { disabled, className }: InputProps
  ) => {
    const classes = [baseClass]
    if (className) { classes.push(className); }
    if (disabled) { classes.push("disabled"); }
    return classes.join(" ");
  }
}

export const inputClass = inputClassNameMaker("tui-input");
export const checkboxClass = inputClassNameMaker("tui-checkbox");
export const radioClass = inputClassNameMaker("tui-radio");
export const optionSpanClass = inputClassNameMaker("tui-option-span");
export const fieldsetClass = inputClassNameMaker("tui-fieldset");
export const selectClass = inputClassNameMaker("tui-input");


export const getId = () => {
  id +=1;
  return id;
}
