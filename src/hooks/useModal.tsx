import { ForwardedRef, forwardRef, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import TuiButton, { TuiButtonProps } from "../components/TuiButton";
import TuiFieldset from "../components/TuiFieldset";
import TuiLegend from "../components/TuiLegend";
import { Color, MildColor } from "../types/enums";

interface TuiModalProps {
  children?: React.ReactNode;
  modalTitle?: string;
  close?: any;
  isOpen?: any;
}

const ModalTemplate = forwardRef(({
    children,
    close,
    modalTitle,
    isOpen,
  }: TuiModalProps,
  ref: ForwardedRef<HTMLElement>
) => {

  return (
    isOpen && <div className="tui-modal-container active" aria-label={ modalTitle }>
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
  )
})

const useScroll = (ref: RefObject<HTMLElement>) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      setScroll(element?.scrollTop || 0);
    };

    element.addEventListener("scroll", handleScroll);
    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  });

  return scroll;
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const scroll = useScroll(ref);

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
    }) => <ModalTemplate close={close} isOpen={isOpen} ref={ref} modalTitle={modalTitle}>{children}</ModalTemplate>;
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
