import { FC } from "react";
import TuiWindow from "../components/TuiWindow";
import { TuiGrid, TuiGridBlock } from "../composites/TuiGrid"
import TuiLink from "../components/TuiLink";
import TuiFlexPane, { TuiFlexNode } from "../components/TuiFlexPane";
import { Color, MildColor } from "../types/enums";


const DocScreen: FC = () => {

  return (
    <div className="content">
      <TuiWindow heading="Welcome to React TuiCSS">
        This component library is based on <TuiLink href="https://github.com/vinibiavatti1/TuiCss">TuiCSS</TuiLink>
      </TuiWindow>

      <TuiGrid borderColor={ Color.Black} rowHeight="25px">
        <TuiGridBlock>1</TuiGridBlock>
        <TuiGridBlock rowSpan={2} colSpan={2}>2</TuiGridBlock>
        <TuiGridBlock colSpan={2}>3</TuiGridBlock>
        <TuiGridBlock>4</TuiGridBlock>
        <TuiGridBlock rowSpan={2}>5</TuiGridBlock>
        <TuiGridBlock>6</TuiGridBlock>
        <TuiGridBlock rowSpan={3}>7</TuiGridBlock>
        <TuiGridBlock rowSpan={2}>8</TuiGridBlock>
      </TuiGrid>
      <TuiGrid columnFlow rowHeight="50px">
        <TuiGridBlock bgColor={ MildColor.Blue} colSpan={1}>
          <span className="white-255-text">1</span>
        </TuiGridBlock>
        <TuiGridBlock bgColor={ MildColor.Blue} rowSpan={2}>
          <span className="white-255-text">2</span>
        </TuiGridBlock>
        <TuiGridBlock bgColor={ MildColor.Blue} colSpan={1}>
          <span className="white-255-text">3</span>
        </TuiGridBlock>
      </TuiGrid>
      <TuiFlexPane>
        <TuiFlexNode grow>1</TuiFlexNode>
        <TuiFlexNode grow>2</TuiFlexNode>
        <TuiFlexNode width="4rem">3</TuiFlexNode>

        <TuiFlexNode width="4rem">
          <TuiFlexPane vertical>
            <TuiFlexNode>1</TuiFlexNode>
            <TuiFlexNode>2</TuiFlexNode>
            <TuiFlexNode>3</TuiFlexNode>
            <TuiFlexNode>
              <TuiFlexPane>
                <TuiFlexNode grow>1</TuiFlexNode>
                <TuiFlexNode grow>2</TuiFlexNode>
              </TuiFlexPane>
            </TuiFlexNode>
          </TuiFlexPane>

        </TuiFlexNode>
      </TuiFlexPane>
    </div>
  );
}

export default DocScreen;