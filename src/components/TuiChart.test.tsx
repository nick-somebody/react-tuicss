import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiChart from './TuiChart'

describe("TuiChart", () => {
  const size = { width: "100px", height: "100px" }
  const values = [
    { label: "label1", value: 20 },
    { label: "label2", value: 40 },
    { label: "label3", value: 60 }
  ]

  describe("Vertical", () => {
    test("will render", () => {
      render(<TuiChart.Vertical size={ size } values={ values } />)
      const meter = screen.getAllByRole("meter")
      expect(meter).toBeDefined()
      expect(meter).toHaveLength(values.length)
    })
    // test.each(values.map(val => (val.label)))(
    //   "has %s label",
    //   (label) => {

    //   }
    // )
  })

  describe("Horizontal", () => {
    test("will render", () => {
      render(<TuiChart.Horizontal size={ size } values={ values } />)
      const meter = screen.getAllByRole("meter")
      expect(meter).toBeDefined()
      expect(meter).toHaveLength(values.length)
    })
  })
})

