import StatsChart from "./StatsChart";
// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** Third Party Components

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

import "@styles/react/libs/charts/recharts.scss";

const StatsCard2 = () => {
  const donut = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

  return (
    <Card>
      <CardBody>
        <StatsChart series1={donut.series1} series3={donut.series3} />
        <Row>
          <div className="d-flex justify-content-between mb-1">
            <div className="text-center">
              <CardText className="mb-50">종료시각</CardText>
              <CardText className="fs-5 fw-bold">11:41AM</CardText>
            </div>
            <div className="text-center">
              <CardText className="mb-50">운동시간</CardText>
              <CardText className="fs-5 fw-bold">0:20:03</CardText>
            </div>
            <div className="text-center">
              <CardText className="mb-50">이동거리</CardText>
              <CardText className="fs-5 fw-bold">4km</CardText>
            </div>
            <div className="text-center">
              <CardText className="mb-50">제목1</CardText>
              <CardText className="fs-5 fw-bold">064w</CardText>
            </div>
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-between">
            <div className="text-center">
              <CardText className="">평균rpm</CardText>
              <CardText className="fs-5 fw-bold">67rpm</CardText>
            </div>
            <div className="text-center">
              <CardText className="">평균속도</CardText>
              <CardText className="fs-5 fw-bold">13km/h</CardText>
            </div>
            <div className="text-center">
              <CardText className="">평균bpm</CardText>
              <span className="fs-5 fw-bold">117bpm</span>
            </div>
            <div className="text-center">
              <CardText className="">소모칼로리</CardText>
              <span className="fs-4 fw-bold">107kcal</span>
            </div>
          </div>
        </Row>
      </CardBody>
    </Card>
  );
};
export default StatsCard2;
