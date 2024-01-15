// ** React Imports
import { Fragment } from "react";

import Breadcrumbs from "@components/breadcrumbs";

// ** Reactstrap Imports
import { Card, CardBody, Table, Badge } from "reactstrap";

// ** Deom Charts
import BarChart from "./BarChart";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Third Party Components
import "chart.js/auto";

// ** Styles
import "@styles/react/libs/flatpickr/flatpickr.scss";

import Avatar from "@components/avatar";

// ** Images
import avatar1 from "@src/assets/images/portrait/small/avatar-s-1.jpg";

const ContentStat = () => {
  // ** Context, Hooks & Vars
  const { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    primaryColorShade = "#7367F0";

  return (
    <Fragment>
      <Breadcrumbs
        title="콘텐츠 통계"
        data={[{ title: "콘텐츠" }, { title: "콘텐츠 통계" }]}
      />
      <Card className="p-1">
        <CardBody className="p-0">
          <BarChart
            primary={primaryColorShade}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
          />
        </CardBody>
        <CardBody className="border-bottom p-0">
          <Table responsive>
            <thead>
              <tr>
                <th className="px-1 fs-5">순번</th>
                <th className="px-0 fs-5">사진</th>
                <th className="px-0 fs-5">코스</th>
                <th className="px-0 fs-5">코스시간</th>
                <th className="px-0 fs-5">운동시간</th>
                <th className="px-0 fs-5">포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                    <small className="text-muted">함양군 함양읍</small>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1:25:36</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <h5 className="mb-25 fw-bolder">0:20:29</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-info">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                    <small className="text-muted">함양군 함양읍</small>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1:25:36</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <h5 className="mb-25 fw-bolder">0:20:29</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-info">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                    <small className="text-muted">함양군 함양읍</small>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1:25:36</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <h5 className="mb-25 fw-bolder">0:20:29</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-info">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                    <small className="text-muted">함양군 함양읍</small>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1:25:36</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <h5 className="mb-25 fw-bolder">0:20:29</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-info">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
              </tr>
              <tr>
                <td className="py-1 ps-1">163</td>
                <td className="py-1 px-0">
                  <div className="d-flex">
                    <Avatar
                      imgClassName="rounded"
                      className="me-75"
                      img={avatar1}
                      imgHeight="42"
                      imgWidth="42"
                    />
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1_해남화원반도_14</h5>
                    <small className="text-muted">함양군 함양읍</small>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto">
                    <h5 className="mb-0 fw-bolder">1:25:36</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <div className="my-auto d-flex-inline flex-column align-items-center">
                    <h5 className="mb-25 fw-bolder">0:20:29</h5>
                  </div>
                </td>
                <td className="py-1 px-0">
                  <Badge pill color="light-info">
                    <span className="fs-5">+ 5 P</span>
                  </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ContentStat;
