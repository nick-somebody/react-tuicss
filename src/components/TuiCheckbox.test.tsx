
import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiCheckbox from './TuiCheckbox'

describe("TuiCheckbox", () => {
  const label = "label99931s"

  test("checkbox has role of checkbox", () => {
    render(<TuiCheckbox label={ label } />);
    const checkbox = screen.getByRole<HTMLInputElement>("checkbox");

    expect(checkbox.tagName).toEqual("INPUT")
    expect(checkbox.type).toBe("checkbox")
  })

  test("if disabled, input and span are attributed with disabled class", () => {
    render(<TuiCheckbox disabled label={ label } />)
    const checkbox = screen.queryByText(label)
    expect(checkbox).toBeDefined()
    expect(checkbox?.children.item(0)?.classList.contains("tui-input")).toBeTruthy()
    expect(checkbox?.children.item(0)?.classList.contains("disabled")).toBeTruthy()
    expect(checkbox?.children.item(1)?.classList.contains("disabled")).toBeTruthy()
  })
})