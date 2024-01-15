// ** Reactstrap Imports
import {
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardImg,
  Button,
  Row,
  Col,
  Table,
  Badge,
} from "reactstrap";

import Breadcrumbs from "@components/breadcrumbs";

import Rating from "react-rating";
import { Star } from "react-feather";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "@components/avatar";

// ** Images
import img1 from "@src/assets/images/slider/04.jpg";
import img2 from "@src/assets/images/slider/03.jpg";
import img3 from "@src/assets/images/slider/06.jpg";
import avatar1 from "@src/assets/images/portrait/small/avatar-s-1.jpg";

const CourseStat = () => {
  return (
    <>
      <Breadcrumbs
        title="코스 통계"
        data={[{ title: "콘텐츠" }, { title: "코스 통계" }]}
      />
      <div>
        <Row className="match-height">
          <Col lg="6" md="6">
            <Card>
              <div className="d-flex flex-direction-column">
                <div className="m-1" style={{ width: "22.5em" }}>
                  <CardImg src={img1} className="h-100" />
                </div>
                <div>
                  <CardBody>
                    <CardSubtitle className="text-muted">
                      해남군 해남읍
                    </CardSubtitle>
                    <CardTitle tag="h2" className="fw-bolder">
                      1_해남화원반도_3
                    </CardTitle>
                    <div>
                      <div className="d-flex">
                        <Avatar
                          imgClassName="rounded"
                          className="me-75"
                          img={avatar1}
                          imgHeight="42"
                          imgWidth="42"
                        />
                        <div className="my-auto">
                          <small>우비크</small>
                          <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                        </div>
                      </div>
                      <div className="d-flex my-1">
                        <Avatar
                          imgClassName="rounded"
                          className="me-75"
                          img={avatar1}
                          imgHeight="42"
                          imgWidth="42"
                        />
                        <div className="my-auto">
                          <small>콘텐츠 고유 ID</small>
                          <h6 className="mb-0">71d32a4e</h6>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-3 p-1 d-flex flex-column justify-content-center align-items-center">
                      <div className="text-muted fw-bolder">운동칼로리</div>
                      <div className="display-6 fw-bolder">71 Cal</div>
                      <div className="text-muted fs-4 fw-bolder">
                        평균속도 : 6 ㎧
                      </div>
                      <br />
                      <div className="text-muted fw-bolder">운동일자</div>
                      <div className="fs-4 fw-bolder">2023-03-10 02:18:21</div>
                    </div>
                  </CardBody>
                  <CardFooter className="border-0">
                    <div className="d-flex justify-content-between">
                      <Button
                        className="me-1 font-small-3"
                        color="primary"
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        09:26 ~ 10:06
                      </Button>
                      <Button
                        outline
                        className="font-small-3"
                        color="secondary"
                        href="/"
                        onClick={(e) => e.preventDefault()}
                      >
                        해남군 해남읍
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="3" md="3">
            <Card>
              <CardBody>
                <img
                  className="h-75 img-fluid mb-1"
                  src={img2}
                  alt="Card cap"
                />
                <CardTitle tag="h4" className="fw-bolder">
                  1_여수돌산로_30
                </CardTitle>
                <div className="d-flex justify-content-between">
                  <div className="text-muted d-inline">2023-03-04 10:06:15</div>
                  <div className="fw-bolder">306 cal</div>
                </div>
              </CardBody>
              <CardFooter className="border-0">
                <div className="d-flex justify-content-between">
                  <Button
                    color="primary"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    09:26 ~ 10:06
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    여수시 돌산로
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="3" md="3">
            <Card>
              <CardBody>
                <img
                  className="h-75 img-fluid mb-1"
                  src={img3}
                  alt="Card cap"
                />
                <CardTitle tag="h4" className="fw-bolder">
                  1_나주금성산_14
                </CardTitle>
                <div className="d-flex justify-content-between">
                  <div className="text-muted d-inline">2023-03-03 09:14:09</div>
                  <div className="fw-bolder">552 cal</div>
                </div>
              </CardBody>
              <CardFooter className="border-0">
                <div className="d-flex justify-content-between">
                  <Button
                    color="primary"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    09:26 ~ 10:06
                  </Button>
                  <Button
                    outline
                    color="secondary"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    나주시 과원길
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="5" md="5">
            <Card className="p-1">
              <CardTitle className="my-0">
                <h4 className="fw-bolder">회원가입 리스트</h4>
                <p className="text-muted fs-6 fw-bolder">총 50명</p>
              </CardTitle>
              <CardBody className="border-bottom p-0">
                <Table responsive>
                  <thead></thead>
                  <tbody>
                    <tr className="d-flex">
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="fw-bolder">우비크</h5>
                            <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0 d-flex align-items-center">
                        <span className="me-1 fs-4">20세</span>
                        <Badge
                          pill
                          color="light-success"
                          className="fs-4 d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="me-25" />
                          <span>15 P</span>
                        </Badge>
                      </td>
                    </tr>
                    <tr className="d-flex">
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="fw-bolder">우비크</h5>
                            <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0 d-flex align-items-center">
                        <span className="me-1 fs-4">20세</span>
                        <Badge
                          pill
                          color="light-success"
                          className="fs-4 d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="me-25" />
                          <span>15 P</span>
                        </Badge>
                      </td>
                    </tr>
                    <tr className="d-flex">
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="fw-bolder">우비크</h5>
                            <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0 d-flex align-items-center">
                        <span className="me-1 fs-4">20세</span>
                        <Badge
                          pill
                          color="light-success"
                          className="fs-4 d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="me-25" />
                          <span>15 P</span>
                        </Badge>
                      </td>
                    </tr>
                    <tr className="d-flex">
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="fw-bolder">우비크</h5>
                            <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0 d-flex align-items-center">
                        <span className="me-1 fs-4">20세</span>
                        <Badge
                          pill
                          color="light-success"
                          className="fs-4 d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="me-25" />
                          <span>15 P</span>
                        </Badge>
                      </td>
                    </tr>
                    <tr className="d-flex">
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="fw-bolder">우비크</h5>
                            <h6 className="mb-0">hyuk@oobik.co.kr</h6>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0 d-flex align-items-center">
                        <span className="me-1 fs-4">20세</span>
                        <Badge
                          pill
                          color="light-success"
                          className="fs-4 d-flex align-items-center"
                        >
                          <FontAwesomeIcon icon={faArrowUp} className="me-25" />
                          <span>15 P</span>
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg="7" md="7">
            <Card className="p-1">
              <CardTitle className="my-0">
                <h4 className="fw-bolder">새로 생성된 콘텐츠 리스트</h4>
                <p className="text-muted fs-6 fw-bolder">총 372 콘텐츠 생성</p>
              </CardTitle>
              <CardBody className="border-bottom p-0">
                <Table responsive>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="mb-0 fw-bolder">
                              1_영산강자전거길_59
                            </h5>
                            <small className="text-muted">
                              cicle.founder@gmail.com
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2D</h5>
                          <small className="text-muted">퀵</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2023-03-12</h5>
                          <small className="text-muted">해안도로</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <Rating
                            readonly
                            initialRating={1}
                            className="d-block"
                            emptySymbol={
                              <Star size={15} fill="#babfc7" stroke="#babfc7" />
                            }
                            fullSymbol={
                              <Star size={15} fill="#ffbb00" stroke="#ffbb00" />
                            }
                          />
                          <small className="text-muted">운동시간 20분</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <h5 className="mb-0 fw-bolder">나주시</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="mb-0 fw-bolder">
                              1_영산강자전거길_59
                            </h5>
                            <small className="text-muted">
                              cicle.founder@gmail.com
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2D</h5>
                          <small className="text-muted">퀵</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2023-03-12</h5>
                          <small className="text-muted">해안도로</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <Rating
                            readonly
                            initialRating={1}
                            className="d-block"
                            emptySymbol={
                              <Star size={15} fill="#babfc7" stroke="#babfc7" />
                            }
                            fullSymbol={
                              <Star size={15} fill="#ffbb00" stroke="#ffbb00" />
                            }
                          />
                          <small className="text-muted">운동시간 20분</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <h5 className="mb-0 fw-bolder">나주시</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="mb-0 fw-bolder">
                              1_영산강자전거길_59
                            </h5>
                            <small className="text-muted">
                              cicle.founder@gmail.com
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2D</h5>
                          <small className="text-muted">퀵</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2023-03-12</h5>
                          <small className="text-muted">해안도로</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <Rating
                            readonly
                            initialRating={1}
                            className="d-block"
                            emptySymbol={
                              <Star size={15} fill="#babfc7" stroke="#babfc7" />
                            }
                            fullSymbol={
                              <Star size={15} fill="#ffbb00" stroke="#ffbb00" />
                            }
                          />
                          <small className="text-muted">운동시간 20분</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <h5 className="mb-0 fw-bolder">나주시</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="mb-0 fw-bolder">
                              1_영산강자전거길_59
                            </h5>
                            <small className="text-muted">
                              cicle.founder@gmail.com
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2D</h5>
                          <small className="text-muted">퀵</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2023-03-12</h5>
                          <small className="text-muted">해안도로</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <Rating
                            readonly
                            initialRating={1}
                            className="d-block"
                            emptySymbol={
                              <Star size={15} fill="#babfc7" stroke="#babfc7" />
                            }
                            fullSymbol={
                              <Star size={15} fill="#ffbb00" stroke="#ffbb00" />
                            }
                          />
                          <small className="text-muted">운동시간 20분</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <h5 className="mb-0 fw-bolder">나주시</h5>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 px-0 flex-grow-1">
                        <div className="d-flex">
                          <Avatar
                            imgClassName="rounded"
                            className="me-75"
                            img={avatar1}
                            imgHeight="42"
                            imgWidth="42"
                          />
                          <div className="my-auto">
                            <h5 className="mb-0 fw-bolder">
                              1_영산강자전거길_59
                            </h5>
                            <small className="text-muted">
                              cicle.founder@gmail.com
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2D</h5>
                          <small className="text-muted">퀵</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <h5 className="mb-0 fw-bolder">2023-03-12</h5>
                          <small className="text-muted">해안도로</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <div className="my-auto">
                          <Rating
                            readonly
                            initialRating={1}
                            className="d-block"
                            emptySymbol={
                              <Star size={15} fill="#babfc7" stroke="#babfc7" />
                            }
                            fullSymbol={
                              <Star size={15} fill="#ffbb00" stroke="#ffbb00" />
                            }
                          />
                          <small className="text-muted">운동시간 20분</small>
                        </div>
                      </td>
                      <td className="py-1 px-0">
                        <h5 className="mb-0 fw-bolder">나주시</h5>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CourseStat;
