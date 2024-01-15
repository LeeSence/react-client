// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardBody,
  Badge,
  InputGroup,
  InputGroupText,
  Input,
  Button,
  CardFooter,
  Row,
  Col,
} from "reactstrap";

import ReactPaginate from "react-paginate";
import { Search } from "react-feather";

import NewsList from "./NewsList";
import NewsModal from "./NewsModal";

import Breadcrumbs from "@components/breadcrumbs";

// ** Styles
import "@styles/react/apps/app-users.scss";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const NewsBoard = () => {
  return (
    <Fragment>
      <Breadcrumbs title="뉴스보드" data={[{ title: "뉴스보드" }]} />
      <Row>
        <Card>
          <CardHeader>
            <Row className="d-flex vw-100">
              <Col className="d-flex justify-content-start">
                <InputGroup className="w-auto me-50">
                  <InputGroupText>
                    <Search size={14} />
                  </InputGroupText>
                  <Input placeholder="검색어를 입력하세요" />
                </InputGroup>
                <Button color="primary">검색</Button>
              </Col>
              <Col className="d-flex justify-content-end">
                <NewsModal />
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <NewsList />
          </CardBody>
          <CardFooter>
            <Row>
              <Col lg="6" md="6" className="d-flex align-items-center">
                <ReactPaginate
                  nextLabel=""
                  pageCount={1}
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
                      2
                    </Badge>
                    개 입니다.
                  </span>
                </div>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Row>
    </Fragment>
  );
};

export default NewsBoard;
