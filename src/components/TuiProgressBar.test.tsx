import React from "react";
import { render, screen } from "@testing-library/react";
import TuiProgressBar from "./TuiProgressBar";
import {DarkBackground, Color} from "../types/enums"

describe("TuiProgressBar", () => {
  describe("Custom", () => {
    test("check it renders", () => {
      render(
        <TuiProgressBar.Custom
          backColor={ DarkBackground.Blue }
          barColor={ Color.Red }
          progress={ 50 }
          barWidth="100px"
        />
      )
      const progressBar = screen.getByRole("progressbar")
      expect(progressBar.classList.contains("tui-progress-bar")).toBeTruthy()
      expect(progressBar.classList.contains("inline-block")).toBeTruthy()
      expect(progressBar.classList.contains(DarkBackground.Blue)).toBeTruthy()
    })
  })

  test("check Blue renders", () => {
    render(<TuiProgressBar.Blue progress={50} barWidth="100px" />)
    const progressBar = screen.getByRole("progressbar")
    expect(progressBar.classList.contains(DarkBackground.Blue)).toBeTruthy()
  })
})