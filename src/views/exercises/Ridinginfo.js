import { useState } from "react";
import { MoreVertical, Edit, Trash } from "react-feather";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Badge,
  InputGroup,
  InputGroupText,
  Input,
  UncontrolledButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import Avatar from "@components/avatar";
import avatar1 from "@src/assets/images/portrait/small/avatar-s-1.jpg";

import ModalFormContent from "./RidingContentModal";
import ModalFormCourse from "./RidingCourseModal";
import ModalFormState from "./RidingStateModal";

import "@styles/react/libs/flatpickr/flatpickr.scss";
import "@styles/react/apps/app-users.scss";

import ReactPaginate from "react-paginate";
import { Search } from "react-feather";

const RidingList = () => {
  return (
    <Card>
      <CardHeader>
        <div className="d-flex justify-content-between">
          <InputGroup className="w-auto me-50">
            <InputGroupText>
              <Search size={14} />
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
              <th className="px-1 fs-5">IDX</th>
              <th className="px-0 fs-5">관광지명</th>
              <th className="px-0 fs-5">콘텐츠ID/VIMEO ID</th>
              <th className="px-0 fs-5">지도(위도/경도)</th>
              <th className="px-1 fs-5">구분(시간/계절/날씨/도로구분/도로)</th>
              <th className="px-0 fs-5">조회수</th>
              <th className="px-0 fs-5">코스확인</th>
              <th className="px-0 fs-5">기록일자/기록IP</th>
              <th className="px-0 fs-5">상태</th>
              <th className="px-0 fs-5 text-center">관리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1 px-1">1</td>
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
                    <h6 className="mb-0 fw-bolder">1_영산강자전거길_59</h6>
                    <small className="text-muted">함평군 함평읍</small>
                  </div>
                </div>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">38129-213123-32-23232</h6>
                <small className="text-muted">798293</small>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">34.700295</h6>
                <small className="text-muted">126.347548</small>
              </td>
              <td className="py-1 px-0">
                <div className="my-auto px-1 d-flex justify-content-start flex-row align-items-center">
                  <h5 className="mb-25 fw-bolder me-1">
                    오전/여름/흐림/일반도로/완만{"   "}
                  </h5>
                  <ModalFormContent />
                </div>
              </td>
              <td className="py-1 px-1">0</td>
              <td className="py-1 px-0">
                <div className="ms-75">
                  <ModalFormCourse />
                </div>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">2023.03.19_11:18:19</h6>
                <small className="text-muted">220.80.168.197</small>
              </td>
              <td className="py-1 px-0">
                <div className="d-flex justify-content-center">
                  <ModalFormState />
                </div>
              </td>
              <td className="py-1 px-0">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="icon-btn hide-arrow"
                    color="transparent"
                    size="sm"
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Edit className="me-50" size={15} />{" "}
                      <span className="align-middle">수정</span>
                    </DropdownItem>

                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Trash className="me-50" size={15} />{" "}
                      <span className="align-middle">삭제</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
            <tr>
              <td className="py-1 px-1">1</td>
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
                    <h6 className="mb-0 fw-bolder">1_영산강자전거길_59</h6>
                    <small className="text-muted">함평군 함평읍</small>
                  </div>
                </div>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">38129-213123-32-23232</h6>
                <small className="text-muted">798293</small>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">34.700295</h6>
                <small className="text-muted">126.347548</small>
              </td>
              <td className="py-1 px-0">
                <div className="my-auto px-1 d-flex justify-content-start flex-row align-items-center">
                  <h5 className="mb-25 fw-bolder me-1">
                    오전/여름/흐림/일반도로/완만{"   "}
                  </h5>
                  <ModalFormContent />
                </div>
              </td>
              <td className="py-1 px-1">0</td>
              <td className="py-1 px-0">
                <div className="ms-75">
                  <ModalFormCourse />
                </div>
              </td>
              <td className="py-1 px-0">
                <h6 className="mb-0 fw-bolder">2023.03.19_11:18:19</h6>
                <small className="text-muted">220.80.168.197</small>
              </td>
              <td className="py-1 px-0">
                <div className="d-flex justify-content-center">
                  <ModalFormState />
                </div>
              </td>
              <td className="py-1 px-0">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="icon-btn hide-arrow"
                    color="transparent"
                    size="sm"
                    caret
                  >
                    <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Edit className="me-50" size={15} />{" "}
                      <span className="align-middle">수정</span>
                    </DropdownItem>

                    <DropdownItem href="/" onClick={(e) => e.preventDefault()}>
                      <Trash className="me-50" size={15} />{" "}
                      <span className="align-middle">삭제</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      <CardFooter>
        <Row>
          <Col lg="6" md="6">
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
          <Col lg="6" md="6">
            <div className="d-flex justify-content-end">
              검색된 콘텐츠는 총{" "}
              <Badge className="text-primary fw-bolder" color="light">
                2
              </Badge>
              개 입니다.
            </div>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default RidingList;
