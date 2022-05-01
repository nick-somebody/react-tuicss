import { Color, MildColor } from "../types/enums";
import TuiButton from "./TuiButton";
import TuiFieldset from "./TuiFieldset";
import TuiLegend from "./TuiLegend";

export interface ModalBaseProps {
  children?: React.ReactNode;
  modalTitle?: string;
  close?: any;
}

export const ModalBase = ({
  children,
  close,
  modalTitle,
}: ModalBaseProps) => {
  return <div className="tui-modal-container active" aria-label={ modalTitle }>
    <div className="tui-modal"  role="alertdialog">
      <div className="tui-window red-168 left-align">
        <TuiFieldset title={ modalTitle } role="presentation">
          <TuiLegend role="presentation">{ modalTitle }</TuiLegend>
          { children }
          <div className="tui-divider"></div>
          <TuiButton onClick={ close } className="tui-modal-close-button right" color={MildColor.Cyan} textColor={Color.Black}>
            Close
          </TuiButton>
        </TuiFieldset>
      </div>
    </div>
  </div>
}