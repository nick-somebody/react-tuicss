import { render, screen } from '@testing-library/react'
import { TableRowColor } from '../types/enums'
import { TuiTable, TuiTBody, TuiTd, TuiTFoot, TuiTh, TuiTHead, TuiTr } from "./TuiTable"

describe("TuiTable", () => {
  const testid = "AKNSOIDNOISND2189398"

  describe("TuiTable", () => {
    test("will include classnames in classes", () => {
      const testClass = "aSDASD"
      render(<TuiTable data-testid={testid} className={ testClass }>
        <thead></thead>
      </TuiTable>)
      const table = screen.getByTestId(testid)
      expect(table.classList.contains(testClass)).toBeTruthy()
      expect(table.classList.contains("tui-table")).toBeTruthy()
    })
    test("will include hover class when a hoverColor value prop passed", () => {
      render(<TuiTable data-testid={testid} hoverColor={ TableRowColor.Blue }>
        <thead></thead>
      </TuiTable>)
      const table = screen.getByTestId(testid)
      expect(table.classList.contains(`hovered-${TableRowColor.Blue}`)).toBeTruthy()
      expect(table.classList.contains("tui-table")).toBeTruthy()
    })
    test("will include hover class when a hoverColor value prop passed", () => {
      render(<TuiTable data-testid={testid} stripeColor={ TableRowColor.Red }>
        <thead></thead>
      </TuiTable>)
      const table = screen.getByTestId(testid)
      expect(table.classList.contains(`striped-${TableRowColor.Red}`)).toBeTruthy()
      expect(table.classList.contains("tui-table")).toBeTruthy()
    })
  })

  describe("TuiTHead" ,() => {
    test("TuiTHead will render", () => {
      render(<table>
        <TuiTHead data-testid={testid}>
          <tr></tr>
        </TuiTHead>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
  describe("TuiTBody" ,() => {
    test("TuiTBody will render", () => {
      render(<table>
        <TuiTBody data-testid={testid}>
          <tr></tr>
        </TuiTBody>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
  describe("TuiTFoot" ,() => {
    test("TuiTFoot will render", () => {
      render(<table>
        <TuiTFoot data-testid={testid}>
          <tr></tr>
        </TuiTFoot>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
  describe("TuiTr" ,() => {
    test("TuiTr will render", () => {
      render(<table>
        <thead>
          <TuiTr data-testid={testid}>
            <th></th>
          </TuiTr>
        </thead>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
  describe("TuiTh" ,() => {
    test("TuiTh will render", () => {
      render(<table>
        <thead>
          <tr>
            <TuiTh data-testid={testid}>
              <div></div>
            </TuiTh>
          </tr>
        </thead>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
  describe("TuiTd" ,() => {
    test("TuiTd will render", () => {
      render(<table>
        <tbody>
          <tr>
          <TuiTd data-testid={testid}>
            <div></div>
          </TuiTd>
          </tr>
        </tbody>
      </table>)
      const el = screen.getByTestId(testid)
      expect(el).toBeDefined()
    })
  })
})