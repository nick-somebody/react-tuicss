import type { FC } from "react";
import TuiModal from "../composites/TuiModal";

const Modals: FC<{ parent?: HTMLElement }> = ({ parent }) => {

  return (
    <>
      <h3>Modals</h3>
      <TuiModal modalTitle="STEVE" parent={parent}>
        content
      </TuiModal>
    </>
  )
}

export default Modals;