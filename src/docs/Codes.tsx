import type { FC } from "react";
import TuiCode from "../components/TuiCode";
import { Color, MildColor } from "../types/enums"

const Codes: FC = () => {

  return (
    <>
      <h2 className="center">Code</h2>
      <h3>Dark</h3>
      <TuiCode.Dark code={`<TuiCode.Dark code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />
      <h3>Light</h3>
      <TuiCode.Light code={`<TuiCode.Light code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />
      <h3>Custom</h3>
      <TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={`<TuiCode.Custom color={ Color.White } textColor={MildColor.Blue} code={\`// example
function() {
  console.log("Asdasdsad")
\`} />`} />
    </>
  )
}

export default Codes;