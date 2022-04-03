import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiPanel from './TuiPanel'

describe("TuiPanel", () => {
  const testid = "asdklasdlk1123"
  test("renders header panel if header prop passed", () => {
    render(<TuiPanel header="header" data-testid={ testid }>aasdasd</TuiPanel>)
    const panel = screen.getByTestId(testid)
    expect(panel.children).toHaveLength(2)
    expect(panel.firstElementChild?.classList.contains("tui-panel-header")).toBeTruthy()
  })
  test("doesn't render header if no header prop", () => {
    render(<TuiPanel data-testid={ testid }>aasdasd</TuiPanel>)
    const panel = screen.getByTestId(testid)
    expect(panel.children).toHaveLength(1)
  })
})