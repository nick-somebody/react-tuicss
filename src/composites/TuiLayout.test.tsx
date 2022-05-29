import { render, screen } from '@testing-library/react'
import TuiGrid from './TuiLayout'

describe("TuiGrid", () => {
  describe("Container", () => {
    test("renders with container class", () => {
      render(<TuiGrid.Container >

      </TuiGrid.Container>)
      const col = screen.getByRole("presentation")
      expect(col.classList.contains("container")).toBeTruthy()
    })
  })
  describe("Row", () => {
    test("renders with row class", () => {
      render(<TuiGrid.Row >

      </TuiGrid.Row>)
      const col = screen.getByRole("presentation")
      expect(col.classList.contains("row")).toBeTruthy()
    })
  })
  describe("Col", () => {
    test("renders with col class", () => {
      render(<TuiGrid.Col >
  
      </TuiGrid.Col>)
      const col = screen.getByRole("presentation")
      expect(col.classList.contains("col")).toBeTruthy()
    })
    test("renders with size class", () => {

      render(<TuiGrid.Col
        s={ { width: 1 } }
        m={ { width: 2 } }
        l={ { width: 3 } }>
  
      </TuiGrid.Col>)
      const col = screen.getByRole("presentation")
      expect(col.classList.contains("s1")).toBeTruthy()
      expect(col.classList.contains("m2")).toBeTruthy()
      expect(col.classList.contains("l3")).toBeTruthy()
    })
    test("renders with offset class", () => {

      render(<TuiGrid.Col
        s={ { offset: 1 } }
        m={ { offset: 2 } }
        l={ { offset: 3 } }>
  
      </TuiGrid.Col>)
      const col = screen.getByRole("presentation")
      expect(col.classList.contains("offset-s1")).toBeTruthy()
      expect(col.classList.contains("offset-m2")).toBeTruthy()
      expect(col.classList.contains("offset-l3")).toBeTruthy()
    })

  })
})