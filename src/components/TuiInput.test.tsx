import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiInput from './TuiInput'

describe("TuiInput", () => {
  const testid = "AsDasdad0000"
  test("should have default text type", () => {
    render(<TuiInput data-testid={testid} />)
    const input = screen.getByTestId<HTMLInputElement>(testid)

    expect(input.type).toBe("text")
  })
  test("should have passed type", () => {
    render(<TuiInput data-testid={testid} type="email" />)
    const input = screen.getByTestId<HTMLInputElement>(testid)

    expect(input.type).toBe("email")
  })
})