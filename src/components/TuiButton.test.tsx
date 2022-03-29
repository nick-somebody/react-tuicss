
import React from 'react'
import {render, screen} from '@testing-library/react'
import TuiButton from './TuiButton'
import { Color } from '../types/enums'

describe("TuiButton", () => {
  const text = "akjdhaskjdha"
  test('Button to render with text', async () => {
    render(<TuiButton>{ text }</TuiButton>)
    const button = await screen.findByRole("button")
    
    expect(button.innerText).toEqual(text)
    expect(button.classList.contains("tui-button"))
  })

  test('Button with disabled prop to render with "disabled" class', async () => {
    render(<TuiButton disabled>{ text }</TuiButton>)
    const button = await screen.findByRole("button")
    
    expect(button.classList.contains("disabled"))
  })

  test('Button with color prop to render correct color class', async () => {
    render(<TuiButton color={Color.Red}>{ text }</TuiButton>)
    const button = await screen.findByRole("button")
    
    expect(button.classList.contains(Color.Red))
  })

  test('Button with textColor prop to render correct text color class', async () => {
    render(<TuiButton textColor={Color.Red}>{ text }</TuiButton>)
    const button = await screen.findByRole("button")
    
    expect(button.classList.contains(`${Color.Red}-text`))
  })
})