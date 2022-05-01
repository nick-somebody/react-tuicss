import type { FC } from "react";
import TuiModal from "../composites/TuiModal";
import { useModal } from "../hooks/useModal";
import TuiButton from "../components/TuiButton";

const Modals: FC<{ parent?: HTMLElement }> = ({ parent }) => {

  const { Dialog, open } = useModal()

  return (
    <>
      <h3>Modals</h3>
      <TuiModal modalTitle="STEVE" parent={parent}>
        content
      </TuiModal>

      <TuiButton onClick={open}>Hooky</TuiButton>
      <Dialog modalTitle="asdasdadasd">
        hooky
      </Dialog>
    </>
  )
}

export default Modals;