import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiLink from './TuiLink'

describe("TuiLink", () => {
  const testid = "asdasd912903902012"
  
  test("should have tui-link class", () => {
    render(<TuiLink data-testid={testid}>aaa</TuiLink>)
    const link = screen.getByTestId(testid)
    expect(link.classList.contains("tui-link")).toBeTruthy()
  })
  test("should have passed classnames", () => {
    const className = "asdasd"
    render(<TuiLink data-testid={testid} className={className}>aaa</TuiLink>)
    const link = screen.getByTestId(testid)
    expect(link.classList.contains(className)).toBeTruthy()
  })
})