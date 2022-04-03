import React from 'react'
import { render, screen } from '@testing-library/react'
import TuiOptionControl from './TuiOptionControl'

describe("TuiOptionControl", () => {
  const testid = "Asdasdad12939nmfn"

  test("get label", () => {
    render(<TuiOptionControl type="checkbox" label="" data={ { "data-testid": testid } } />)
    const control = screen.getByTestId(testid)
    expect(control.tagName).toBe("LABEL")
  })
})