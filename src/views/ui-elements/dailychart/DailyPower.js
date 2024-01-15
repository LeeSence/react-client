// ** Third Party Components
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";

// ** Chart Data
const data = [
  {
    name: "7/12",
    Average: 20,
    Max: 100,
  },
  {
    name: "8/12",
    Average: 40,
    Max: 120,
  },
  {
    name: "9/12",
    Average: 30,
    Max: 90,
  },
  {
    name: "10/12",
    Average: 70,
    Max: 170,
  },
  {
    name: "11/12",
    Average: 40,
    Max: 130,
  },
  {
    name: "12/12",
    Average: 60,
    Max: 160,
  },
  {
    name: "13/12",
    Average: 50,
    Max: 140,
  },
  {
    name: "14/12",
    Average: 140,
    Max: 240,
  },
  {
    name: "15/12",
    Average: 120,
    Max: 220,
  },
  {
    name: "16/12",
    Average: 100,
    Max: 180,
  },
  {
    name: "17/12",
    Average: 140,
    Max: 270,
  },
  {
    name: "18/12",
    Average: 180,
    Max: 280,
  },
  {
    name: "19/12",
    Average: 220,
    Max: 375,
  },
];

const CustomTooltip = (data) => {
  if (data.active && data.payload) {
    return (
      <div className="recharts-custom-tooltip">
        <p className="fw-bold mb-0">{data.label}</p>
        <hr />
        <div className="active">
          {data.payload.map((i) => {
            return (
              <div className="d-flex align-items-center" key={i.dataKey}>
                <span
                  className="bullet bullet-sm bullet-bordered me-50"
                  style={{
                    backgroundColor: i.fill,
                  }}
                ></span>
                <span className="text-capitalize me-75">
                  {i.dataKey} : {i.payload[i.dataKey]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

const DailyPower = () => {
  return (
    <Card className="border">
      <CardHeader className="flex-sm-row flex-column justify-content-sm-between justify-content-center align-items-sm-center align-items-start">
        <CardTitle className="d-flex align-items-center">
          <Button.Ripple
            color="flat-warning"
            className="btn-icon rounded-circle ps-0"
          >
            <FontAwesomeIcon icon={faBoltLightning} size="2x" />
          </Button.Ripple>
          <span className="fs-2">Power</span>
        </CardTitle>
      </CardHeader>

      <CardBody style={{ height: "210px" }}>
        <div className="d-flex align-items-center mb-2">
          <div className="me-2">
            <span
              className="bullet bullet-sm bullet-primary bullet-bordered me-50"
              style={{ backgroundColor: "rgba(255, 175, 100, .5)" }}
            ></span>
            <span className="align-middle">Average</span>
          </div>
          <div>
            <span
              className="bullet bullet-sm bullet-bordered me-50"
              style={{ backgroundColor: "rgba(255, 175, 100, .2)" }}
            ></span>
            <span className="align-middle">Max</span>
          </div>
        </div>
        <div className="recharts-wrapper">
          <ResponsiveContainer className="h-50">
            <AreaChart height={400} data={data}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Area
                dataKey="Average"
                stackId="Average"
                stroke="0"
                fill="rgba(255, 175, 100, .5)"
              />
              <Area
                dataKey="Max"
                stackId="Max"
                stroke="0"
                fill="rgba(255, 175, 100, .2)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};
export default DailyPower;
