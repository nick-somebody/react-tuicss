import React from "react";
import TuiGrid from "../composites/TuiGrid";
import TuiCode from "../components/TuiCode";

function Layout() {
  return (
    <>
      <TuiGrid.Container>
        <TuiGrid.Row>
          <TuiGrid.Col s={{ width: 12 }} m={{ width: 12}} l={{ width: 12 }}>12</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
        </TuiGrid.Row>
        <TuiGrid.Row>
          <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
          <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
        </TuiGrid.Row>
        <TuiGrid.Row>
          <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
          <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
        </TuiGrid.Row>

      </TuiGrid.Container>
      <TuiCode.Dark code={ `<TuiGrid.Container>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 12}} l={{ width: 12 }}>12</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 6 }} m={{ width: 6}} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 3 }} m={{ width: 3}} l={{ width: 3 }}>3</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 1 }} m={{ width: 1}} l={{ width: 1 }}>1</TuiGrid.Col>
  </TuiGrid.Row>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
    <TuiGrid.Col s={{ width: 12 }} m={{ width: 6 }} l={{ width: 6 }}>6</TuiGrid.Col>
  </TuiGrid.Row>
  <TuiGrid.Row>
    <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
    <TuiGrid.Col s={{ width: 12 }} m={{ offset: 3, width: 3 }} l={{ offset: 3, width: 3 }}>3</TuiGrid.Col >
  </TuiGrid.Row>

</TuiGrid.Container>` } />
    </>
  )
}
export default Layout;