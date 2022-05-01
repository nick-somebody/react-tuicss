import { useCallback, useMemo, useState } from "react";
import { ModalBase, ModalBaseProps } from "../components/ModalBase";
import TuiButton, { TuiButtonProps } from "../components/TuiButton";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import { Color, MildColor } from "../types/enums";

interface ModalBaseWrapperProps extends ModalBaseProps {
  isOpen?: any;
}

const ModalBaseWrapper = (
  { isOpen, ...props }: ModalBaseWrapperProps
) => {

  return (
    isOpen && <ModalBase {...props}/>
  )
}

// todo: prevent scroll on mouse over modal or container
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Dialog = useMemo(() => {
    return ({
      children,
      modalTitle,
    }: {
      children?: React.ReactNode;
      modalTitle?: string;
    }) => <ModalBaseWrapper close={close} isOpen={isOpen} modalTitle={modalTitle}>{children}</ModalBaseWrapper>;
  }, [isOpen, close]);

  return useMemo(
    () => ({
      isOpen,
      Dialog,
      open,
      close
    }),
    [isOpen, Dialog, open, close]
  );
};
