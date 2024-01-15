import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const TrainerInterworking = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col className="d-flex justify-content-end">
              <Button className="btn-gradient-primary mx-3 fs-2 fw-bold">
                피트니스 센터 연결 설정
              </Button>
            </Col>
            <Col>
              <UncontrolledButtonDropdown>
                <DropdownToggle caret className="btn-gradient-primary fs-2">
                  리스트 드롭다운 메뉴
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
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-end">
              <Button className="btn-gradient-primary mx-3 fs-2 fw-bold">
                퍼스널트레이너 연결 설정
              </Button>
            </Col>
            <Col>
              <UncontrolledButtonDropdown>
                <DropdownToggle caret className="btn-gradient-primary fs-2">
                  리스트 드롭다운 메뉴
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
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="d-flex justify-content-end">
              <Button className="btn-gradient-primary mx-3 fs-2 fw-bold">
                설정 완료
              </Button>
            </Col>
            <Col className="d-flex justify-content-start">
              <Button className="btn-gradient-primary fs-2 fw-bold">
                연결 수정
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrainerInterworking;
