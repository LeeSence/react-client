// ** Third Party Components
import Chart from "react-apexcharts";

// ** Utils
import { kFormatter } from "@utils";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardText,
  Progress,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const AvgSessions = (props) => {
  const options = {
      chart: {
        sparkline: { enabled: true },
        toolbar: { show: false },
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      states: {
        hover: {
          filter: "none",
        },
      },
      colors: [
        "#ebf0f7",
        "#ebf0f7",
        props.primary,
        "#ebf0f7",
        "#ebf0f7",
        "#ebf0f7",
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          borderRadius: 8,
          borderRadiusApplication: "end",
        },
      },
      tooltip: {
        x: { show: false },
      },
      xaxis: {
        type: "numeric",
      },
    },
    series = [
      {
        name: "Sessions",
        data: [75, 125, 225, 175, 125, 75, 25],
      },
    ];

  return (
    <Card>
      <CardBody>
        <Row className="pb-50">
          <Col
            sm={{ size: 6, order: 1 }}
            xs={{ order: 2 }}
            className="d-flex justify-content-between flex-column mt-lg-0 mt-2"
          >
            <div className="session-info mb-1 mb-lg-0">
              <h2 className="fw-bold mb-40">11:11:11</h2>
              <CardText className="fw-bold mb-2">총 운동시간</CardText>
              <h5 className="font-medium-2">
                <span className="text-success me-50">+5.2%</span>
                <span className="fw-normal">vs 지난 7일 평균 운동시간</span>
              </h5>
            </div>
            <Button color="primary">자세히보기</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default AvgSessions;
