import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiChart, { getDisplayClassName } from './TuiChart'

describe("TuiChart", () => {
  const testid = "asdaklsd123091"
  const props = {
    size: { width: "100px", height: "100px" },
    values: [
      { label: "label1", value: 20 },
      { label: "label2", value: 40 },
      { label: "label3", value: 60 }
    ],
    labels: [
      "100%",
      "50%",
    ],
    minValue: 0,
    maxValue: 0,
    "data-testid": testid
  }

  describe("Vertical", () => {
    test("will render with number of bars and attributes", () => {
      render(<TuiChart.Vertical { ...props } />)
      const meters = screen.getAllByRole("meter")
      expect(meters).toBeDefined()
      expect(meters).toHaveLength(props.values.length)
      meters.forEach((meter, index) => {
        const { value, label } = props.values[index]
        expect(meter.tabIndex).toBe(0)
        expect(meter.getAttribute("aria-valuenow")).toBe(String(value))
        expect(meter.getAttribute("aria-valuemin")).toBe(String(props.minValue))
        expect(meter.getAttribute("aria-valuemax")).toBe(String(props.maxValue))
        expect(meter.getAttribute("aria-valuetext")).toBe(`${value}%`)
        expect(meter.getAttribute("aria-label")).toBe(label)
        expect(meter.innerText).toBe(`${value}%`)
      })
    })
    test("has correct classs", () => {
      render(<TuiChart.Vertical { ...props } />)
      const chart = screen.getByTestId(testid)
      expect(chart.classList.contains("tui-chart-vertical")).toBeTruthy()
    })
    
  })

  describe("Horizontal", () => {
    test("will render with number of bars and attributes", () => {
      render(<TuiChart.Horizontal { ...props } />)
      const meters = screen.getAllByRole("meter")
      expect(meters).toBeDefined()
      expect(meters).toHaveLength(props.values.length)
      meters.forEach((meter, index) => {
        const { value, label } = props.values[index]
        expect(meter.tabIndex).toBe(0)
        expect(meter.getAttribute("aria-valuenow")).toBe(String(value))
        expect(meter.getAttribute("aria-valuemin")).toBe(String(props.minValue))
        expect(meter.getAttribute("aria-valuemax")).toBe(String(props.maxValue))
        expect(meter.getAttribute("aria-valuetext")).toBe(`${value}%`)
        expect(meter.getAttribute("aria-label")).toBe(label)
        expect(meter.innerText).toBe(`${value}%`)
      })
    })
    test("has correct classs", () => {
      render(<TuiChart.Horizontal { ...props } />)
      const chart = screen.getByTestId(testid)
      expect(chart.classList.contains("tui-chart-horizontal")).toBeTruthy()
    })
  })

  test("getDisplayClassName, returns classes for labels", () => {
    const classes = getDisplayClassName(true)
    expect(classes).toBe("tui-chart-display")
  })

  test("getDisplayClassName, returns classes to exclude labels", () => {
    const classes = getDisplayClassName(false)
    expect(classes).toBe("tui-chart-display no-x-axis no-y-axis")
  })
})

