import { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import DailyResult from "@src/views/ui-elements/dailychart/index";
import { Search } from "react-feather";
const ModalFormContent = () => {
  const [scrollInnerModal, setScrollInnerModal] = useState(false);

  return (
    <Fragment>
      <Button.Ripple
        outline
        color="danger"
        onClick={() => setScrollInnerModal(!scrollInnerModal)}
        className="btn-icon p-25"
      >
        <Search size={18} />
      </Button.Ripple>
      <Modal
        scrollable
        isOpen={scrollInnerModal}
        toggle={() => setScrollInnerModal(!scrollInnerModal)}
        className={"modal-xl"}
      >
        <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>
          운동정보 분석
        </ModalHeader>
        <ModalBody>
          <DailyResult />
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
    </Fragment>
  );
};
export default ModalFormContent;
