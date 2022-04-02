import { checkboxClass, fieldsetClass, getId, inputClass, optionSpanClass, radioClass, selectClass } from "."

describe("helpers", () => {
  test("getId", () => {
    const id = getId()
    expect(getId()).toBe(id + 1)
  })

  test("inputClass", () => {
    const classes = inputClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
  test("checkboxClass", () => {
    const classes = checkboxClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
  test("radioClass", () => {
    const classes = radioClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
  test("optionSpanClass", () => {
    const classes = optionSpanClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
  test("fieldsetClass", () => {
    const classes = fieldsetClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
  test("selectClass", () => {
    const classes = selectClass({ className: "lll", disabled: false })
    expect(classes.includes("lll")).toBeTruthy()
  })
})