import ModalFormContent from "./UsedConModal";
import ModalFormCourse from "./UsedCourseModal";

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

const ContentItem = ({ content }) => {
  const [scrollInnerModal, setScrollInnerModal] = useState(false);
  const {
    idx,
    pics,
    titles,
    areas1,
    areas2,
    content_id,
    vimeo_id,
    gps_lat,
    gps_lng,
    cates,
    map_img,
    create_dates,
  } = content;
  return (
    <tr>
      <td className="py-1 ps-1">{idx}</td>
      <td className="py-1 px-0">
        <div className="d-flex">
          <img
            className="me-75 rounded"
            src={pics}
            style={{ width: "42px", height: "42px" }}
          />
          <div className="my-auto">
            <h5 className="mb-0 fw-bolder">{titles}</h5>
            <small className="text-muted">
              {areas1}
              {areas2}
            </small>
          </div>
        </div>
      </td>
      <td className="py-1 px-0">
        <div className="my-auto">
          <h5 className="mb-0 fw-bolder">{content_id}</h5>
          <small className="text-muted">{vimeo_id}</small>
        </div>
      </td>
      <td className="py-1 px-0">
        <div className="my-auto">
          <h5 className="mb-0 fw-bolder">{gps_lat}</h5>
          <small className="text-muted">{gps_lng}</small>
        </div>
      </td>
      <td className="py-1 px-0">
        <div className="my-auto d-flex flex-row align-items-center">
          <h5 className="mb-25 fw-bolder me-1">{cates}</h5>
          <ModalFormContent />
        </div>
      </td>
      <td className="py-1 px-0">
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
              코스 확인
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
      </td>
      <td className="py-1 px-0">
        <div className="my-auto">
          <h5 className="mb-0 fw-bolder">{create_dates}</h5>
          <h5 className="mb-0 fw-bolder">220.80.168.197</h5>
        </div>
      </td>
    </tr>
  );
};

export default ContentItem;
