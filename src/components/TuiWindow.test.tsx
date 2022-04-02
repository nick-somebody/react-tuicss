import React from "react";
import { render, screen } from "@testing-library/react";
import TuiWindow from "./TuiWindow";

describe("TuiWindow", () => {
  const testid = "akjdkjhj98432"
  test("basic renders",  async () => {
    render(<TuiWindow basic data-testid={ testid } />)
    const component = screen.getByTestId(testid)
    expect(component.classList.contains("tui-window"))
    expect(component.children).toHaveLength(0)
  })

  test("basic renders with passed classname",  async () => {
    render(<TuiWindow className="bbbb" basic data-testid={ testid } />)
    const component = screen.getByTestId(testid)
    expect(component.classList.contains("bbbb"))
  })

  test("window renders with fieldset",  async () => {
    render(<TuiWindow data-testid={ testid } />)
    const component = screen.getByRole("presentation")
    expect(component).toBeDefined()
  })

  test("window renders with fieldset and header",  async () => {
    render(<TuiWindow data-testid={ testid } heading="asdasd" />)
    const components = screen.getAllByRole("presentation")
    expect(components).toHaveLength(2)
  })
})