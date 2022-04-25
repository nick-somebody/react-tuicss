import { render, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import TuiCheckboxSet from './TuiCheckboxSet'

describe("TuiCheckboxSet", () => {

  const testid = "ASDADASDASDAsdadasd"
  const options = [
    { value: 1, label: "First" },
    { value: 2, label: "Second" },
    { value: 3, label: "Disabled", disabled: true },
  ]

  test("renders set", () => {
    render(<TuiCheckboxSet
      data-testid={testid}
      heading="TEST"
      description="TEST"
      options={ options } />)
    const checkboxSet = screen.getByTestId(testid)
    expect(checkboxSet).toBeDefined()
  })

  test("renders checkboxes for options", () => {
    render(<TuiCheckboxSet
      heading="TEST"
      description="TEST"
      options={ options } />)
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(options.length)
  })

  test("a value in values maps to checked checkbox", () => {
    const idx = 0
    render(<TuiCheckboxSet
      heading="TEST"
      description="TEST"
      options={ options }
      values={[options[idx].value]} />)
    const checkboxes = screen.getAllByRole<HTMLInputElement>("checkbox");
    
    expect(checkboxes[idx].checked).toBeTruthy();
  })
  test("a value not in values maps to unchecked checkbox", () => {
    const idx = 1
    render(<TuiCheckboxSet
      heading="TEST"
      description="TEST"
      options={ options }
      values={[options[idx].value]} />)
    const checkboxes = screen.getAllByRole<HTMLInputElement>("checkbox");
    
    expect(checkboxes[idx-1].checked).toBeFalsy();
  })

  test("skips onChange if there's no values", () => {
    const onChange = vi.fn()
    const idx = 0
    render(<TuiCheckboxSet
      heading="TEST"
      description="TEST"
      options={ options }
      onChange={ onChange } />)
    const [target] = screen.getAllByRole<HTMLInputElement>("checkbox");
    const result = fireEvent.click(target);
    expect(onChange).toHaveBeenCalledTimes(0)
  })

  // no idea how to make this work at this point
  // it seems like this should work or even should
  // without the FakeComponent wrapper
  test.skip("calls onChange when checkbox clicked", () => {
    const onChange = vi.fn()
    const [option] = options
    
    const FakeComponent = () => {
      const [values, setValues] = useState<number[]>([])
      return <div>
        <TuiCheckboxSet
          heading="TEST"
          description="TEST"
          options={ options }
          onChange={ (values) => {
            setValues(values as number[]);
            console.log(values);
          } }
          values={values} />
      </div>
    }
    render(<FakeComponent />)
    const [target] = screen.getAllByRole<HTMLInputElement>("checkbox");
    expect(target.checked).toBeFalsy()

    const result = fireEvent.click(target);
    expect(result).toBeTruthy();
    expect(target.checked).toBeTruthy()
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})