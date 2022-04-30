import type { FC } from "react";
import TuiModal from "../composites/TuiModal";
import { useModal } from "../hooks/useModal";

const Modals: FC<{ parent?: HTMLElement }> = ({ parent }) => {

  const { Dialog, open } = useModal()

  return (
    <>
      <h3>Modals</h3>
      <TuiModal modalTitle="STEVE" parent={parent}>
        content
      </TuiModal>

      <button type="button" onClick={open}>Hooky</button>
      <Dialog modalTitle="asdasdadasd">
        hooky
      </Dialog>
    </>
  )
}

export default Modals;