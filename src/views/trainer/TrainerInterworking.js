import { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
} from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";

import img1 from "@src/assets/images/pages/trainer-cycling1.jpg";
import img2 from "@src/assets/images/pages/trainer-cycling2.jpg";

const TrainerInterworking = () => {
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [canvasScroll, setCanvasScroll] = useState(false);
  const [canvasTitle, setCanvasTitle] = useState(null);

  const toggleCanvasScroll = () => {
    setCanvasScroll(true);
    setCanvasOpen(!canvasOpen);
  };
  const toggleCanvasTitle1 = () => {
    setCanvasScroll(true);
    setCanvasOpen(!canvasOpen);
    setCanvasTitle(true);
  };
  const toggleCanvasTitle2 = () => {
    setCanvasScroll(true);
    setCanvasOpen(!canvasOpen);
    setCanvasTitle(false);
  };

  return (
    <div>
      <Breadcrumbs
        title="트레이너 연동"
        data={[{ title: "연동" }, { title: "트레이너 연동" }]}
      />
      <Row className="match-height">
        <Col>
          <Card>
            <CardImg src={img2} className="h-100" />
            <CardBody className="d-flex justify-content-center">
              <Button
                color="primary"
                onClick={toggleCanvasTitle1}
                className="fs-4"
              >
                피트니스 센터 연결 설정
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardImg src={img1} className="h-100" />
            <CardBody className="d-flex justify-content-center">
              <Button
                color="primary"
                onClick={toggleCanvasTitle2}
                className="fs-4"
              >
                퍼스널트레이너 연결 설정
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Offcanvas
        scrollable={canvasScroll}
        direction="end"
        isOpen={canvasOpen}
        toggle={toggleCanvasScroll}
        backdrop={false}
      >
        <OffcanvasHeader toggle={toggleCanvasScroll}>
          <span className="fs-3 fw-bolder">
            {canvasTitle ? "피트니스 센터" : "퍼스널트레이너"} 연결 설정
          </span>
        </OffcanvasHeader>
        <OffcanvasBody className="my-auto mx-0 flex-grow-0">
          <UncontrolledButtonDropdown className="my-3 w-100">
            <DropdownToggle caret className="btn-gradient-success fs-4">
              선택하세요
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                href="/"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                Option A
              </DropdownItem>
              <DropdownItem
                href="/"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                Option B
              </DropdownItem>
              <DropdownItem
                href="/"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                Option C
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem
                href="/"
                tag="a"
                onClick={(e) => e.preventDefault()}
              >
                Option D
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <Button
            block
            color="primary"
            onClick={toggleCanvasScroll}
            className="mb-1 fs-4"
          >
            확인
          </Button>
          <Button
            block
            outline
            color="secondary"
            onClick={toggleCanvasScroll}
            className="fs-4"
          >
            취소
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default TrainerInterworking;
