import { render, screen } from '@testing-library/react'
import { DarkBackground, ScreenSize } from '../types/enums'
import TuiScreen from './TuiScreen'

describe("TuiScreen", () => {
  const testid = "asdkjlaksdj129803123981095"
  
  test("should include passed background class", () => {
    render(<TuiScreen data-testid={testid} background={DarkBackground.Blue} size={ScreenSize.Small}>

    </TuiScreen>)
    const tScreen = screen.getByTestId(testid)
    expect(tScreen.classList.contains(DarkBackground.Blue)).toBeTruthy()
  })

  test("should include passed size class", () => {
    render(<TuiScreen data-testid={testid} background={DarkBackground.Blue} size={ScreenSize.Small}>

    </TuiScreen>)
    const tScreen = screen.getByTestId(testid)
    expect(tScreen.classList.contains(ScreenSize.Small)).toBeTruthy()
  })

  test("should include passed class", () => {
    const className = "asdad9"
    render(<TuiScreen data-testid={testid} className={className} background={DarkBackground.Blue} size={ScreenSize.Small}>

    </TuiScreen>)
    const tScreen = screen.getByTestId(testid)
    expect(tScreen.classList.contains(className)).toBeTruthy()
  })

  test("should include bordered class when bordered prop given", () => {
    render(<TuiScreen data-testid={testid} background={DarkBackground.Blue} size={ScreenSize.Small} bordered>

    </TuiScreen>)
    const tScreen = screen.getByTestId(testid)
    expect(tScreen.classList.contains("bordered")).toBeTruthy()
  })

  test("should include centered class when centered prop given", () => {
    render(<TuiScreen data-testid={testid} background={DarkBackground.Blue} size={ScreenSize.Small} centered>

    </TuiScreen>)
    const tScreen = screen.getByTestId(testid)
    expect(tScreen.classList.contains("centered")).toBeTruthy()
  })
})