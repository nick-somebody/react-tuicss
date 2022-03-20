import React from 'react'
import ReactDOM from 'react-dom'
import "tuicss"
import TuiCode, { TuiCodeDark, TuiCodeLight } from "../components/TuiCode";
import { Background } from '../types/enums'
import Bios from './Bios'
import Buttons from './Buttons'

ReactDOM.render(
  <React.StrictMode>
    <div className={Background.BlueWhite}>
      <Buttons />
      <TuiCodeLight code={`// example
func() {
  console.log("Asdasdsad")
}`} />
      <Bios />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
