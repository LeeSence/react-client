// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardHeader,
  InputGroup,
  InputGroupText,
  Input,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  CardFooter,
  Row,
  Col,
  Table,
  Badge,
} from "reactstrap";

import Avatar from "@components/avatar";
import Breadcrumbs from "@components/breadcrumbs";
import ReactPaginate from "react-paginate";

// ** Images
import avatar1 from "@src/assets/images/portrait/small/avatar-s-1.jpg";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EarnPoints = () => {
  return (
    <div>
      <Breadcrumbs
        title="포인트 획득 내역"
        data={[{ title: "포인트 현황" }, { title: "포인트 획득 내역" }]}
      />
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between">
            <InputGroup className="w-auto me-50">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </InputGroupText>
              <Input placeholder="검색어를 입력하세요" />
            </InputGroup>
            <UncontrolledButtonDropdown className="me-50">
              <DropdownToggle outline color="secondary" caret>
                선택하세요
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#" tag="a">
                  Option 1
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 2
                </DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 3
                </DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#" tag="a">
                  Option 4
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Button color="primary">검색</Button>
          </div>
        </CardHeader>
        <CardBody className="pb-0">
          <Table responsive>
            <thead>
              <tr>
                <th className="px-1 fs-5">순번</th>
                <th className="px-0 fs-5">획득 일자</th>
                <th className="px-0 fs-5">획득 콘텐츠</th>
                <th className="px-0 fs-5">포인트 금액</th>
                <th className="px-0 fs-5">누적 포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">2022-11-08 23:25:58</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                    <div className="my-auto">
                      <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                      <small className="text-muted">함양군 함양읍</small>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-success">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <Badge pill color="light-success">
                      <span className="fs-5">150 P</span>
                    </Badge>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">2022-11-08 23:25:58</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                    <div className="my-auto">
                      <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                      <small className="text-muted">함양군 함양읍</small>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-success">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <Badge pill color="light-success">
                      <span className="fs-5">150 P</span>
                    </Badge>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">2022-11-08 23:25:58</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                    <div className="my-auto">
                      <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                      <small className="text-muted">함양군 함양읍</small>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-success">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <Badge pill color="light-success">
                      <span className="fs-5">150 P</span>
                    </Badge>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">2022-11-08 23:25:58</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                    <div className="my-auto">
                      <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                      <small className="text-muted">함양군 함양읍</small>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-success">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <Badge pill color="light-success">
                      <span className="fs-5">150 P</span>
                    </Badge>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">2022-11-08 23:25:58</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                    <div className="my-auto">
                      <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                      <small className="text-muted">함양군 함양읍</small>
                    </div>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-success">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <Badge pill color="light-success">
                      <span className="fs-5">150 P</span>
                    </Badge>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
        <CardFooter>
          <Row>
            <Col lg="6" md="6" className="d-flex align-items-center">
              <ReactPaginate
                nextLabel=""
                pageCount={5}
                breakLabel="..."
                previousLabel=""
                activeClassName="active"
                pageClassName="page-item"
                breakClassName="page-item"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                breakLinkClassName="page-link"
                nextClassName="page-item next"
                previousLinkClassName="page-link"
                previousClassName="page-item prev"
                containerClassName="pagination react-paginate justify-content-start"
              />
            </Col>
            <Col lg="6" md="6" className="d-flex justify-content-end pt-50">
              <div>
                <span>
                  검색된 콘텐츠는 총{" "}
                  <Badge className="text-primary fw-bolder" color="light">
                    163
                  </Badge>
                  개 입니다.
                </span>
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EarnPoints;
