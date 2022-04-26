import { FC, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, useCallback } from "react"
import { TableRowColor } from "../types/enums";

interface TuiTableProps extends TableHTMLAttributes<HTMLTableElement> {
  hoverColor?: TableRowColor;
  stripeColor?: TableRowColor;
}

export const TuiTable: FC<TuiTableProps> = ({
  children,
  className,
  hoverColor,
  stripeColor,
  ...props
}: TuiTableProps) =>{

  const classNamer = useCallback(() => {
    const classes = ["tui-table"]
    if (className) { classes.push(...className.split(" "))}
    if (hoverColor) { classes.push(`hovered-${hoverColor}`)}
    if (stripeColor) { classes.push(`striped-${stripeColor}`)}
    return classes.join(" ")
  }, [className, hoverColor, stripeColor])

  return (
    <table { ...props } className={ classNamer() }>
      { children }
    </table>
  )
}

export const TuiTHead: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <thead { ...props }>{ children }</thead>
  )
}

export const TuiTBody: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  children ,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tbody { ...props }>{ children }</tbody>
  )
}

export const TuiTFoot: FC<HTMLAttributes<HTMLTableSectionElement>> = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tfoot { ...props }>{ children }</tfoot>
  )
}

export const TuiTr: FC<HTMLAttributes<HTMLTableRowElement>> = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr { ...props }>{ children }</tr>
  )
}

export const TuiTh: FC<ThHTMLAttributes<HTMLTableCellElement>> = ({
  children,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th { ...props }>{ children }</th>
  )
}

export const TuiTd: FC<TdHTMLAttributes<HTMLTableCellElement>> = ({
  children,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td { ...props }>{ children }</td>
  )
}