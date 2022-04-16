import React from "react";
import TuiBackground from "../components/TuiBackground";
import { TuiTable, TuiTBody, TuiTd, TuiTh, TuiTHead, TuiTr } from "../composites/TuiTable";
import { TableRowColor, DarkBackground } from "../types/enums";
import TuiCode from "../components/TuiCode";

function Table() {
  return (
    <div>
      <h3>Table</h3>
      <TuiBackground color={ DarkBackground.Blue}>
        <TuiTable stripeColor={TableRowColor.Blue} hoverColor={TableRowColor.Purple}>
          <TuiTHead>
            <TuiTr>
              <TuiTh>Name</TuiTh>
              <TuiTh>Age</TuiTh>
            </TuiTr>
          </TuiTHead>
          <TuiTBody>
            <TuiTr>
              <TuiTd>Steve</TuiTd>
              <TuiTd>40</TuiTd>
            </TuiTr>
            <TuiTr>
              <TuiTd>Fred</TuiTd>
              <TuiTd>55</TuiTd>
            </TuiTr>
            <TuiTr>
              <TuiTd>Gregor</TuiTd>
              <TuiTd>25</TuiTd>
            </TuiTr>
            <TuiTr>
              <TuiTd>Harry</TuiTd>
              <TuiTd>43</TuiTd>
            </TuiTr>
          </TuiTBody>
        </TuiTable>

      </TuiBackground>

      <TuiCode.Dark code={`<TuiTable
  stripeColor={TableRowColor.Blue}
  hoverColor={TableRowColor.Purple}
>
  <TuiTHead>
    <TuiTr>
      <TuiTh>Name</TuiTh>
      <TuiTh>Age</TuiTh>
    </TuiTr>
  </TuiTHead>
  <TuiTBody>
    <TuiTr>
      <TuiTd>Steve</TuiTd>
      <TuiTd>40</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Fred</TuiTd>
      <TuiTd>55</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Gregor</TuiTd>
      <TuiTd>25</TuiTd>
    </TuiTr>
    <TuiTr>
      <TuiTd>Harry</TuiTd>
      <TuiTd>43</TuiTd>
    </TuiTr>
  </TuiTBody>
</TuiTable>`} />
    </div>
  )
}

export default Table;