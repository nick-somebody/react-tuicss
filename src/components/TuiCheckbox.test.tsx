
import React from 'react'
import {getByLabelText, render, screen} from '@testing-library/react'
import TuiCheckbox from './TuiCheckbox'

describe("TuiCheckbox", () => {
  const label = "label99931s"
  test("has label passed in", () => {
    render(<TuiCheckbox label={ label } />)
    const labelEl = screen.getByLabelText(label)
    // const checkbox = screen.getByRole("checkbox")
    expect(labelEl).toBeDefined()
    // expect(checkbox).toBeDefined()
  })
})