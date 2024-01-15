// ** Third Party Components
import classnames from "classnames";
import React from "react";
import { TrendingUp, User, Box, DollarSign } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";
import avatar1 from "@src/assets/images/portrait/small/avatar-s-1.jpg";

import StatsChart from "./StatsChart";
import "@styles/react/libs/charts/recharts.scss";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { Fragment } from "react";

const StatsCard = ({ cols }) => {
  const donut = {
    // series1: "#ffe700",
    // series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    // series5: "#FFA1A1",
  };

  const data = [
    {
      fontSize: 10,
      title: "11:41",
      unit: "AM",
      subtitle: "종료시각",
      color: "light-danger",
      icon: <Box size={14} />,
    },
    {
      title: "0:20:03",
      unit: "",
      subtitle: "이동시간",
      color: "light-danger",
      icon: <Box size={14} />,
    },
    {
      title: "4",
      unit: "km",
      subtitle: "이동거리",
      color: "light-primary",
      icon: <TrendingUp size={14} />,
    },
    {
      title: "064",
      unit: "w",
      subtitle: "파워",
      color: "light-info",
      icon: <User size={14} />,
    },
    {
      title: "67",
      unit: "rpm",
      subtitle: "평균rpm",
      color: "light-danger",
      icon: <Box size={14} />,
    },
    {
      title: "13",
      unit: "km/h",
      subtitle: "평균속도",
      color: "light-success",
      icon: <DollarSign size={14} />,
    },
    {
      title: "117",
      unit: "bpm",
      subtitle: "평균bpm",
      color: "light-danger",
      icon: <Box size={14} />,
    },
    {
      title: "107",
      unit: "kcal",
      subtitle: "소모칼로리",
      color: "light-danger",
      icon: <Box size={14} />,
    },
  ];

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-1 mb-${margin}-0`]: index !== data.length - 1,
          })}
          style={{ display: "flex", justifyContent: "start" }}
        >
          <div className="d-flex align-items-center">
            <div className="my-auto">
              <span className="fw-bolder mb-0">{item.title}</span>
              <span classnames="text-muted mb-0">{item.unit}</span>
              <br />
              <small className="text-muted font-small-3 mb-0">
                {item.subtitle}
              </small>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Fragment>
      <Card className="card-statistics">
        <CardHeader className="d-flex pb-0">
          <h4 className="fw-bolder justify-content-around">
            가장 최근 운동기록
          </h4>
          <div className="d-flex justify-content-end align-items-center">
            <Avatar
              imgClassName="rounded"
              className=""
              img={avatar1}
              imgHeight="42"
              imgWidth="42"
            />
            <div className="ms-50 align-items-center">
              <span className="fw-bolder d-block">1_영산강자전거길_59</span>
              <small className="text-muted">2023.03.21</small>
            </div>
          </div>
        </CardHeader>
        <CardBody className="statistics-body">
          <Row>{renderData()}</Row>
          <Row>
            <Col>
              <StatsChart series1={donut.series3} series3={donut.series4} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default StatsCard;
