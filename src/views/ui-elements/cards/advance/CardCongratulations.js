import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

// ** Icons Imports
import { Award } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardTitle,
} from "reactstrap";

// ** Images
import decorationLeft from "@src/assets/images/elements/decore-left.png";
import decorationRight from "@src/assets/images/elements/decore-right.png";
import medal from "@src/assets/images/illustration/badge.svg";

const CardCongratulations = (props) => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    // 세션 스토리지에 값이 없는 경우
    return null; // 렌더링하지 않음
  }
  const nickname = user[0].nicknames;
  const levels = user[0].g_levels;

  const options = {
      chart: {
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1,
        },
      },
      colors: ["#51e5a8"],
      plotOptions: {
        radialBar: {
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: "77%",
          },
          track: {
            background: "#ebe9f1",
            strokeWidth: "50%",
          },
          dataLabels: {
            name: {
              offsetY: -20,
              fontSize: "1.2rem",
              fontColor: "#ffffff",
            },
            value: {
              fontColor: "#ffffff",
              fontSize: "1.8rem",
              fontWeight: "300",
            },
            total: {
              color: "#ffffff",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: [props.success],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      grid: {
        padding: {
          bottom: 30,
        },
      },
      labels: ["현재 경험치"],
    },
    series = [42.4];

  return (
    <Card className="card-congratulations-medal">
      <CardHeader className="pt-3">
        <CardTitle className="mb-1"></CardTitle>
      </CardHeader>
      <CardBody>
        <img className="congratulation-medal" src={medal} alt="Medal Pic" />
        <div className="mt-320 text-center pt-3 mb-3">
          <h1 className=" mb-1 pt-3"> {nickname} 님의 현재 레벨 </h1>
          <span className="fs-1 ">Lv. {levels}</span>
        </div>
        <CardText className="m-auto w-75 fs-4 text-center">
          다음 레벨까지
          <br />
          <strong>00.0%</strong>
          <br />
          남았습니다.
        </CardText>
        <Row>
          <Col className="d-flex justify-content-center">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={245}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CardCongratulations;
