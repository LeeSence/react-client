import { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Search } from "react-feather";

import WizardModern from "@src/views/forms/wizard/steps-with-validation/WizardModern";
const ModalFormCourse = () => {
  const [scrollInnerModal, setScrollInnerModal] = useState(false);

  return (
    <Fragment>
      <div>
        <div>
          <Button.Ripple
            className="btn-icon p-25"
            outline
            color="info"
            onClick={() => setScrollInnerModal(!scrollInnerModal)}
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
              코스 정보
            </ModalHeader>
            <ModalBody>
              <WizardModern />
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
      </div>
    </Fragment>
  );
};
export default ModalFormCourse;
