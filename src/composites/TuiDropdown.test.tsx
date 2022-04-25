import { render, screen } from '@testing-library/react'
import TuiDropdown from './TuiDropdown'

describe('TuiDropdown', () => {
  const testid = "asdkl1209"
  test('renders with "tui-dropdown"', () => {
    render(<TuiDropdown
      data-testid={testid}
      dropDownLabel="asdasd">
        <li>asdasd</li>
      </TuiDropdown>)
    const dropdown = screen.getByTestId(testid)
    expect(dropdown).toBeDefined()
    expect(dropdown.classList.contains("tui-dropdown")).toBeTruthy()
  })

  test('renders with "block" class when prop passed', () => {
    render(<TuiDropdown
      data-testid={testid}
      dropDownLabel="asdasd"
      block>
        <li>asdasd</li>
      </TuiDropdown>)
    const dropdown = screen.getByTestId(testid)
    expect(dropdown.classList.contains("block")).toBeTruthy()
  })
})