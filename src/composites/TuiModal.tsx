import { FC, useState } from "react";
import { createPortal } from "react-dom";
import { ModalBase } from "../components/ModalBase";
import TuiButton, { TuiButtonProps } from "../components/TuiButton";
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
          <ModalBase modalTitle={modalTitle} close={() => setOpen(false)}>{children}</ModalBase>
        ),
        parent ?? document.body
      )}
    </>
  )
}

export default TuiModal;