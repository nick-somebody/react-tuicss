import React from "react";
import { ChartColor } from "../types/enums";

type ChartProps = {
  size: { width: string, height: string };
  values: { label: string, value: number }[];
  labels?: string[];
  valueScaler?: (value: number) => string;
  valueFormatter?: (value: number) => string;
  minValue?: number;
  maxValue?: number;
}
const colors: string[] = Object.values(ChartColor);

const defaultScaler = (value: number) => `${value}%`;

const getClassName = (idx: number) => {
  return `tui-chart-value ${colors[idx % colors.length]}`
}

const getDisplayClassName = (needsLabels: boolean) => {
  const classes = ["tui-chart-display"]
  if (needsLabels) {
    return "tui-chart-display";
  }
  return "tui-chart-display no-x-axis no-y-axis";
}

function VerticalChart(props: ChartProps) {
  return (
    <div className="tui-chart-vertical" style={ props.size }>
      <div className={ getDisplayClassName(!!props.labels) }>
        { props.values.map(({ label, value }, idx) => (
          <div
            role="meter"
            tabIndex={0}
            aria-valuenow={ value }
            aria-valuemin={props.minValue ?? 0}
            aria-valuemax={props.maxValue ?? 100}
            aria-valuetext={ (props.valueFormatter ?? defaultScaler)(value) }
            aria-label={label}
            key={ `value-shape-${idx}` }
            className={ getClassName(idx) }
            style={ { height: (props.valueScaler ?? defaultScaler)(value) } }
          >
            { (props.valueFormatter ?? defaultScaler)(value) }
          </div>
        )) }
      </div>
      {
        props.labels && (
          <div className="tui-chart-y-axis">
            { props.labels?.map((label, idx) => (
              <div key={ `label-${idx}` } className="tui-chart-legend">{ label }</div>
            ))}
          </div>
        )
      }
      { props.labels && (
          <div className="tui-chart-x-axis">
          { props.values.map(({ label }, idx) => (
            <div key={ `value-name-${idx}` } className="tui-chart-legend">{ label}</div>
          )) }
          </div>
        )
      }
    </div>
  )
}

function HorizontalChart(props: ChartProps) {

  return (
    <div className="tui-chart-horizontal" style={ props.size }>
      <div className={ getDisplayClassName(!!props.labels) }>
        { props.values.map(({ value, label }, idx) => (
          <div
            role="meter"
            tabIndex={0}
            aria-valuenow={ value }
            aria-valuemin={props.minValue ?? 0}
            aria-valuemax={props.maxValue ?? 100}
            aria-valuetext={ (props.valueFormatter ?? defaultScaler)(value) }
            aria-label={label}
            key={ `value-shape-${idx}` }
            className={ getClassName(idx) }
            style={ { width: (props.valueScaler ?? defaultScaler)(value) } }
          >
            { (props.valueFormatter ?? defaultScaler)(value) }
          </div>
        )) }
      </div>
      {
        props.labels && (
          <div className="tui-chart-y-axis">
            { props.values.map(({ label }, idx) => (
              <div key={ `value-name-${idx}` } className="tui-chart-legend">{ label}</div>
            )) }
          </div>
        )
      }
      { props.labels && (
        <div className="tui-chart-x-axis">
          { props.labels.map((label, idx) => (
            <div key={ `label-${idx}` } className="tui-chart-legend">{ label }</div>
          ))}
        </div>
        )
      }
    </div>
  )
}

export default {
  Vertical: VerticalChart,
  Horizontal: HorizontalChart,
};