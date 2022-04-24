import type { DataHTMLAttributes, FC } from "react";
import { ChartColor } from "../types/enums";

interface ChartProps extends DataHTMLAttributes<HTMLDivElement> {
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

export const getClassName = (idx: number) => {
  return `tui-chart-value ${colors[idx % colors.length]}`
}

export const getDisplayClassName = (needsLabels: boolean) => {
  if (needsLabels) {
    return "tui-chart-display";
  }
  return "tui-chart-display no-x-axis no-y-axis";
}

const VerticalChart: FC<ChartProps> = ({
  size,
  values,
  labels,
  valueScaler,
  valueFormatter,
  minValue,
  maxValue,
  ...props
}: ChartProps) => {
  return (
    <div className="tui-chart-vertical" style={ size } { ...props }>
      <div className={ getDisplayClassName(!!labels) }>
        { values.map(({ label, value }, idx) => (
          <div
            role="meter"
            tabIndex={0}
            aria-valuenow={ value }
            aria-valuemin={minValue ?? 0}
            aria-valuemax={maxValue ?? 100}
            aria-valuetext={ (valueFormatter ?? defaultScaler)(value) }
            aria-label={label}
            key={ `value-shape-${idx}` }
            className={ getClassName(idx) }
            style={ { height: (valueScaler ?? defaultScaler)(value) } }
          >
            { (valueFormatter ?? defaultScaler)(value) }
          </div>
        )) }
      </div>
      {
        labels && (
          <div className="tui-chart-y-axis">
            { labels?.map((label, idx) => (
              <div key={ `label-${idx}` } className="tui-chart-legend">{ label }</div>
            ))}
          </div>
        )
      }
      { labels && (
          <div className="tui-chart-x-axis">
          { values.map(({ label }, idx) => (
            <div key={ `value-name-${idx}` } className="tui-chart-legend">{ label}</div>
          )) }
          </div>
        )
      }
    </div>
  )
}

function HorizontalChart({
  size,
  values,
  labels,
  valueScaler,
  valueFormatter,
  minValue,
  maxValue,
  ...props
}: ChartProps) {

  return (
    <div className="tui-chart-horizontal" style={ size } { ...props }>
      <div className={ getDisplayClassName(!!labels) }>
        { values.map(({ value, label }, idx) => (
          <div
            role="meter"
            tabIndex={0}
            aria-valuenow={ value }
            aria-valuemin={minValue ?? 0}
            aria-valuemax={maxValue ?? 100}
            aria-valuetext={ (valueFormatter ?? defaultScaler)(value) }
            aria-label={label}
            key={ `value-shape-${idx}` }
            className={ getClassName(idx) }
            style={ { width: (valueScaler ?? defaultScaler)(value) } }
          >
            { (valueFormatter ?? defaultScaler)(value) }
          </div>
        )) }
      </div>
      {
        labels && (
          <div className="tui-chart-y-axis">
            { values.map(({ label }, idx) => (
              <div key={ `value-name-${idx}` } className="tui-chart-legend">{ label}</div>
            )) }
          </div>
        )
      }
      { labels && (
        <div className="tui-chart-x-axis">
          { labels.map((label, idx) => (
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