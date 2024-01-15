// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Badge,
  Collapse,
  Button,
  Table,
} from "reactstrap";

import {
  faCalendarCheck,
  faClock,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "@components/avatar";

import axios from "axios";
import qs from "qs";

// ** illustration import
import illustration from "@src/assets/images/pages/bicycle-with-balloons.png";

const SidebarLeft = () => {
  const [dayCount, setDayCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "/api/member/",
          qs.stringify({
            method: "INFO",
            ids: "matalcross@naver.com",
            subs: "118413609210214538557",
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setDayCount(response.data.results[0].log_count);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <Card className="sidebar-wrapper shadow-none">
        <CardBody>
          <Row>
            <Col className="d-grid mb-lg-0" lg="12" md="12">
              <Button.Ripple
                className="mb-2 fs-4 p-75"
                color="primary"
                onClick={toggle}
              >
                상세보기
              </Button.Ripple>
            </Col>
          </Row>
          <Card>
            <div>
              <Collapse horizontal isOpen={isOpen}>
                <div className="width-300 border rounded">
                  <div>
                    <Table size="sm" responsive>
                      <thead>
                        <tr>
                          <th></th>
                          <th className="text-center">
                            <Button
                              color="flat-dark"
                              className="fw-bolder fs-3 p-75"
                            >
                              누적
                            </Button>
                          </th>
                          <th className="text-center">
                            <Button
                              color="flat-dark"
                              className="fw-bolder fs-3 p-75"
                            >
                              월간
                            </Button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="table-success">
                          <td className="ps-0 py-50">
                            <div className="d-flex flex-column align-items-center text-center ps-50">
                              <Avatar
                                size="lg"
                                color="success"
                                icon={
                                  <FontAwesomeIcon
                                    icon={faCalendarCheck}
                                    size="lg"
                                  />
                                }
                              />
                              <Badge
                                className="fw-bolder mt-50"
                                color="success"
                              >
                                출석일
                              </Badge>
                            </div>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="success round"
                              className="fw-bolder fs-4 p-75"
                            >
                              {dayCount} 일차
                            </Button>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="success round"
                              className="fw-bolder fs-4 p-75"
                            >
                              25 일차
                            </Button>
                          </td>
                        </tr>
                        <tr className="table-warning">
                          <td className="ps-0 py-50">
                            <div className="d-flex flex-column align-items-center text-center ps-50">
                              <Avatar
                                size="lg"
                                color="warning"
                                icon={
                                  <FontAwesomeIcon icon={faBicycle} size="lg" />
                                }
                              />
                              <Badge
                                className="fw-bolder mt-50"
                                color="warning"
                              >
                                거리
                              </Badge>
                            </div>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="warning round"
                              className="fw-bolder fs-4 p-75"
                            >
                              20 km
                            </Button>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="warning round"
                              className="fw-bolder fs-4 p-75"
                            >
                              10 km
                            </Button>
                          </td>
                        </tr>
                        <tr className="table-primary">
                          <td className="ps-0 py-50">
                            <div className="d-flex flex-column align-items-center text-center ps-50">
                              <Avatar
                                size="lg"
                                color="primary"
                                icon={
                                  <FontAwesomeIcon icon={faClock} size="lg" />
                                }
                              />
                              <Badge
                                className="fw-bolder mt-50"
                                color="primary"
                              >
                                시간
                              </Badge>
                            </div>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="primary round"
                              className="fw-bolder fs-4 p-75"
                            >
                              5:28:36
                            </Button>
                          </td>
                          <td className="text-center">
                            <Button
                              outline
                              color="primary round"
                              className="fw-bolder fs-4 p-75"
                            >
                              0:53:41
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Collapse>
            </div>
          </Card>
        </CardBody>
      </Card>
      <div className="mt-auto">
        <img
          className="img-fluid w-100"
          src={illustration}
          alt="illustration"
        />
      </div>
    </Fragment>
  );
};

export default SidebarLeft;
