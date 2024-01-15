// ** React Imports
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// ** Third Party Components
import {
  Share2,
  GitHub,
  Gitlab,
  Twitter,
  Bookmark,
  Facebook,
  Linkedin,
  MessageSquare,
} from "react-feather";

// ** Custom Components
import Breadcrumbs from "@components/breadcrumbs";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

// ** Styles
import "@styles/base/pages/page-blog.scss";

function NewsAlert() {
  const { idx } = useParams();
  const [results, setResults] = useState(null);

  useEffect(
    function () {
      axios
        .get("/api/getmessages/view/118413609210214538557/alert/" + idx)
        .then(function (result) {
          setResults(result.data.results);
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [idx]
  );

  if (results === null) {
    return <h1>불러오는 중...</h1>;
  }

  if (results.length > 0) {
    return results.map((realdata) => (
      <>
        <div className="blog-wrapper">
          <div className="content-detached">
            <div className="content-body" key={realdata.idx}>
              <Row>
                <Col sm="12">
                  <Card className="mb-3">
                    {/* <CardImg src={data.blog.img} className="img-fluid" top /> */}
                    <CardBody>
                      <CardTitle tag="h4">{realdata.titles}</CardTitle>
                      <div className="d-flex">
                        <div>
                          <small className="text-muted me-25">by</small>
                          <small>
                            <a
                              className="text-body"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              관리자
                            </a>
                          </small>
                          <span className="text-muted ms-50 me-25">|</span>
                          <small className="text-muted">
                            {realdata.lastdates}
                          </small>
                        </div>
                      </div>
                      <div className="my-1 py-25">IDX : {realdata.idx}</div>
                      <div>{realdata.infos}</div>
                      <hr className="my-2" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="d-flex align-items-center me-1">
                            <a
                              className="me-50"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              <MessageSquare
                                size={21}
                                className="text-body align-middle"
                              />
                            </a>
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              <div className="text-body align-middle">10</div>
                            </a>
                          </div>
                          <div className="d-flex align-items-center">
                            <a
                              className="me-50"
                              href="/"
                              onClick={(e) => e.preventDefault()}
                            >
                              <Bookmark
                                size={21}
                                className="text-body align-middle"
                              />
                            </a>
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              <div className="text-body align-middle">50</div>
                            </a>
                          </div>
                        </div>
                        <UncontrolledDropdown className="dropdown-icon-wrapper">
                          <DropdownToggle tag="span">
                            <Share2
                              size={21}
                              className="text-body cursor-pointer"
                            />
                          </DropdownToggle>
                          <DropdownMenu end>
                            <DropdownItem className="py-50 px-1">
                              <GitHub size={18} />
                            </DropdownItem>
                            <DropdownItem className="py-50 px-1">
                              <Gitlab size={18} />
                            </DropdownItem>
                            <DropdownItem className="py-50 px-1">
                              <Facebook size={18} />
                            </DropdownItem>
                            <DropdownItem className="py-50 px-1">
                              <Twitter size={18} />
                            </DropdownItem>
                            <DropdownItem className="py-50 px-1">
                              <Linkedin size={18} />
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    ));
  }
}

export default NewsAlert;
