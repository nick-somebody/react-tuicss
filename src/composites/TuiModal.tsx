import { FC, useState } from "react";
import { createPortal } from "react-dom";
import TuiButton, { TuiButtonProps } from "../components/TuiButton";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import { Color, MildColor } from "../types/enums";
import "./TuiModal.css";

interface TuiModalProps {
  buttonProps?: TuiButtonProps;
  children?: React.ReactNode;
  parent?: HTMLElement;
  modalTitle?: string;
}

const TuiModal: FC<TuiModalProps> = ({ children, buttonProps, parent, modalTitle }: TuiModalProps) => {

  const [open, setOpen] = useState(false)

  const clicker: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (buttonProps?.onClick) {
      buttonProps.onClick(e)
    }
    setOpen(!open)
  }

  return (
    <>
      <TuiButton onClick={clicker}>{ buttonProps?.children ?? "Open modal" }</TuiButton>
      { open && createPortal(
        (
          <div className="tui-modal-container active" aria-label={ modalTitle }>
            <div className="tui-modal"  role="alertdialog">
              <div className="tui-window red-168 left-align">
                <TuiFieldset title={ modalTitle } role="presentation">
                  <TuiLegend role="presentation">{ modalTitle }</TuiLegend>
                  { children }
                  <div className="tui-divider"></div>
                  <TuiButton onClick={ () => setOpen(false) } className="tui-modal-close-button right" color={MildColor.Cyan} textColor={Color.Black}>
                    Close
                  </TuiButton>
                </TuiFieldset>
              </div>
            </div>
          </div>
        ),
        parent ?? document.body
      )}
    </>
  )
}

export default TuiModal;