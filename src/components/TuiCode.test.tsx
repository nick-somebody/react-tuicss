import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiCode from './TuiCode'
import { Color, MildColor } from '../types/enums'

describe("TuiCode", () => {
  const testId = "testcodeid"
  const snippet = `console.log("Asdasdasd")`

  test("will include a provided classname", () => {
    const className = "sadlkjalksd"
    render(<TuiCode.Dark className={ className } code={ snippet } data-testid={ testId } />)
      const pre = screen.getByTestId(testId)
      expect(pre.classList.contains(className)).toBeTruthy()
  })

  describe("TuiCode.Dark", () => {
    test("it renders with code snippet", () => {
      render(<TuiCode.Dark code={ snippet } />)
      const code = screen.getByRole("figure")
      expect(code).toBeDefined()
      expect(code.textContent).contains(snippet)
    })

    test("renders with classes", () => {
      render(<TuiCode.Dark code={ snippet } data-testid={ testId } />)
      const pre = screen.getByTestId(testId)
      expect(pre).toBeDefined()
      expect(pre.tagName).toBe("PRE")
      expect(pre.classList.contains("tui-code")).toBeTruthy()
      expect(pre.classList.contains(MildColor.Black)).toBeTruthy()
      expect(pre.classList.contains(`${MildColor.Cyan}-text`)).toBeTruthy()
    })
  })
  
  describe("TuiCode.Light", () => {
    const snippet = `console.log("Asdasdasd")`
    test("it renders with code snippet", () => {
      render(<TuiCode.Light code={ snippet } />)
      const code = screen.getByRole("figure")
      expect(code).toBeDefined()
      expect(code.textContent).contains(snippet)
    })

    test("renders with classes", () => {
      render(<TuiCode.Light code={ snippet } data-testid={ testId } />)
      const pre = screen.getByTestId(testId)
      expect(pre).toBeDefined()
      expect(pre.tagName).toBe("PRE")
      expect(pre.classList.contains("tui-code")).toBeTruthy()
      expect(pre.classList.contains(MildColor.White)).toBeTruthy()
      expect(pre.classList.contains(`${MildColor.Black}-text`)).toBeTruthy()
    })
  })

  describe("TuiCode.Custom", () => {
    const snippet = `console.log("Asdasdasd")`
    test("it renders with code snippet", () => {
      render(<TuiCode.Custom code={ snippet } />)
      const code = screen.getByRole("figure")
      expect(code).toBeDefined()
      expect(code.textContent).contains(snippet)
    })

    test("renders with classes", () => {
      render(<TuiCode.Custom code={ snippet } data-testid={ testId } color={ Color.Blue } textColor={Color.Green} />)
      const pre = screen.getByTestId(testId)
      expect(pre).toBeDefined()
      expect(pre.tagName).toBe("PRE")
      expect(pre.classList.contains("tui-code")).toBeTruthy()
      expect(pre.classList.contains(Color.Blue)).toBeTruthy()
      expect(pre.classList.contains(`${Color.Green}-text`)).toBeTruthy()
    })
  })
})