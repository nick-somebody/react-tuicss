import React, { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react"
import { TableRowColor } from "../types/enums";

type TuiTableProps = TableHTMLAttributes<HTMLTableElement> & {
  hoverColor?: TableRowColor;
  stripeColor?: TableRowColor;
}

export function TuiTable({ className, children, hoverColor, stripeColor, ...props }: TuiTableProps) {

  const classNamer = () => {
    const classes = ["tui-table"]
    if (className) { classes.push(...className.split(" "))}
    if (hoverColor) { classes.push(`hovered-${hoverColor}`)}
    if (stripeColor) { classes.push(`striped-${stripeColor}`)}
    return classes.join(" ")
  }

  return (
    <table { ...props } className={ classNamer() }>
      { children }
    </table>
  )
}

export function TuiTHead({ children, ...props  }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead { ...props }>{ children }</thead>
  )
}

export function TuiTBody({ children , ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody { ...props }>{ children }</tbody>
  )
}

export function TuiTFoot({ children, ...props  }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot { ...props }>{ children }</tfoot>
  )
}

export function TuiTr({ children, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr { ...props }>{ children }</tr>
  )
}

export function TuiTh({ children, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th { ...props }>{ children }</th>
  )
}

export function TuiTd({ children, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td { ...props }>{ children }</td>
  )
}