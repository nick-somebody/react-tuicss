import type { FC } from "react";
import TuiLayout from "../composites/TuiLayout";
import TuiCode from "../components/TuiCode";
import TuiWindow from "../components/TuiWindow";
import TuiFlexPane from "../components/TuiFlexPane"

const Layout: FC = () => {
  return (
    <>
      <TuiLayout.Container>
        <TuiLayout.Row>
          <TuiLayout.Col s={{ width: 12 }} m={{ width: 12}} l={{ width: 12 }}>12</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
        </TuiLayout.Row>
        <TuiLayout.Row>
          <TuiLayout.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiLayout.Col>
          <TuiLayout.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiLayout.Col>
        </TuiLayout.Row>
        <TuiLayout.Row>
          <TuiLayout.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiLayout.Col >
          <TuiLayout.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiLayout.Col >
        </TuiLayout.Row>

      </TuiLayout.Container>
      <TuiFlexPane >

      </TuiFlexPane>
      <TuiCode.Dark code={ `<TuiLayout.Container>
  <TuiLayout.Row>
    <TuiLayout.Col s={{ width: 12 }} m={{ width: 12}} l={{ width: 12 }}>12</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiLayout.Col>
  </TuiLayout.Row>
  <TuiLayout.Row>
    <TuiLayout.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiLayout.Col>
    <TuiLayout.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiLayout.Col>
  </TuiLayout.Row>
  <TuiLayout.Row>
    <TuiLayout.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiLayout.Col >
    <TuiLayout.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiLayout.Col >
  </TuiLayout.Row>

</TuiLayout.Container>` } />
    </>
  )
}
export default Layout;