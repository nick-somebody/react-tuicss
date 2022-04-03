import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiDivider from './TuiDivider'

describe("TuiDivider", () => {
  const testid = "asjdkh9283412"
  test("should render hr element", () => {
    render(<TuiDivider data-testid={ testid} />)
    const hr = screen.getByTestId(testid)
    expect(hr.tagName).toBe("HR")
  })

  test("should render hr element", () => {
    render(<TuiDivider data-testid={ testid} withSpace={false} />)
    const hr = screen.getByTestId(testid)
    expect(hr.tagName).toBe("DIV")
  })
})