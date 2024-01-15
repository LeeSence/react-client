import { Fragment, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
} from "reactstrap";

import { Search } from "react-feather";

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
            className={""}
          >
            <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>
              코스 정보
            </ModalHeader>
            <ModalBody>
              <Card>
                <CardImg src={map_img} />
              </Card>
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
