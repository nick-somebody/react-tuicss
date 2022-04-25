import { render, screen } from '@testing-library/react'
import TuiForm from './TuiForm'

describe("TuiForm", () => {
  const testid = "aasdasdasdkl23jl492"
  test("renders without wrapping in fieldset if no heading", () => {
    render(<TuiForm data-testid={testid}>
      <input type="text" />
    </TuiForm>)
    const form = screen.getByTestId<HTMLFormElement>(testid)

    expect(form?.firstElementChild?.tagName).toBe("INPUT")
  })
  test("renders with wrapping fieldset if has heading", () => {
    render(<TuiForm data-testid={testid} heading="test">
      <input type="text" />
    </TuiForm>)
    const form = screen.getByTestId<HTMLFormElement>(testid)

    expect(form?.firstElementChild?.tagName).toBe("FIELDSET")
  })
  test("renders description with heading and description", () => {
    const descriptionText = "asdad"
    render(<TuiForm data-testid={testid} heading="test" description={descriptionText}>
      <input type="text" />
    </TuiForm>)
    const desc = screen.getByText<HTMLDivElement>(descriptionText)

    expect(desc).toBeDefined()
    expect(desc.classList.contains("tui-inputset-description")).toBeTruthy()
  })
})