// ** Reactstrap Imports
import { Fragment } from "react";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

// ** Third Party Components
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// ** Chart Data
const data = [
  {
    subject: "운동시간",
    "my record": 41,
    "average record": 65,
  },
  {
    subject: "이동거리",
    "my record": 64,
    "average record": 46,
  },
  {
    subject: "파워",
    "my record": 81,
    "average record": 42,
  },
  {
    subject: "평균rpm",
    "my record": 60,
    "average record": 25,
  },
  {
    subject: "평균속도",
    "my record": 42,
    "average record": 58,
  },
  {
    subject: "평균bpm",
    "my record": 42,
    "average record": 63,
  },
  {
    subject: "소모칼로리",
    "my record": 33,
    "average record": 76,
  },
];

const StatsChart = ({ series1, series3 }) => {
  return (
    <Fragment>
      <div className="recharts-wrapper">
        <ResponsiveContainer>
          <RadarChart height={400} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            {/* <PolarRadiusAxis /> */}
            <Radar
              dataKey="my record"
              stroke={series1}
              fill={series1}
              fillOpacity={0.25}
            />

            <Radar
              dataKey="average record"
              stroke={series3}
              fill={series3}
              fillOpacity={0.25}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="me-2">
          <span className="bullet bullet-sm bullet-primary bullet-bordered me-50"></span>
          <span className="me-75">당신</span>
        </div>
        <div>
          <span
            className="bullet bullet-sm bullet-bordered me-50"
            style={{ backgroundColor: "#2B9BF4" }}
          ></span>
          <span className="me-75">평균</span>
        </div>
      </div>
    </Fragment>
  );
};
export default StatsChart;
