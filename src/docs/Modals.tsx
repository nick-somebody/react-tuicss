import React from "react";
import TuiModal from "../composites/TuiModal";

function Modals({ parent }: { parent?: HTMLElement}) {

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