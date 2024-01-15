import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Search } from "react-feather";

import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard";
const ModalFormState = () => {
  const [scrollInnerModal, setScrollInnerModal] = useState(false);

  return (
    <div>
      <Button.Ripple
        className="btn-icon p-25"
        outline
        color="success"
        onClick={() => setScrollInnerModal(!scrollInnerModal)}
      >
        <Search size={18} />
      </Button.Ripple>
      <Modal
        scrollable
        isOpen={scrollInnerModal}
        toggle={() => setScrollInnerModal(!scrollInnerModal)}
      >
        <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>
          나의 운동 기록
        </ModalHeader>
        <ModalBody>
          <StatsCard cols={{ xl: "6", sm: "6" }} />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => setScrollInnerModal(!scrollInnerModal)}
          >
            확인
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ModalFormState;
