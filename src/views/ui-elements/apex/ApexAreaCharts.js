// ** Third Party Components
import Chart from "react-apexcharts";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const areaColors = {
  series3: "#a4f8cd",
  series2: "#60f2ca",
  series1: "#2bdac7",
};

const ApexAreaCharts = ({ direction }) => {
  // ** Chart Options
  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      curve: "straight",
    },
    legend: {
      position: "top",
      horizontalAlign: "start",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: [areaColors.series3, areaColors.series2, areaColors.series1],
    xaxis: {
      categories: [
        "3/1",
        "3/2",
        "3/3",
        "3/4",
        "3/5",
        "3/6",
        "3/7",
        "3/8",
        "3/9",
        "3/10",
        "3/11",
        "3/12",
        "3/13",
        "3/14",
      ],
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    tooltip: {
      shared: false,
    },
    yaxis: {
      opposite: direction === "rtl",
    },
  };

  // ** Chart Series
  const series = [
    {
      name: "전문가",
      data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
    },
    {
      name: "평균",
      data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
    },
    {
      name: "당신",
      data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
    },
  ];
  return (
    <Card>
      <CardHeader className="d-flex flex-md-row flex-column align-items-md-center align-items-start">
        <div className="d-flex justify-content-end align-items-center">
          <Calendar size={17} />
          <Flatpickr
            className="form-control flat-picker bg-transparent border-0 shadow-none"
            options={{
              dateFormat: "m/d",
              mode: "range",
              // eslint-disable-next-line no-mixed-operators
              defaultDate: [
                new Date(),
                new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
              ],
            }}
          />
        </div>
        <div className="text-end">
          <h4 className="fw-bolder mb-75">심박수 그래프</h4>
          <CardSubtitle className="text-muted">
            전문가와 평균과 당신
          </CardSubtitle>
        </div>
      </CardHeader>

      <CardBody>
        <Chart options={options} series={series} type="area" height={400} />
      </CardBody>
    </Card>
  );
};
export default ApexAreaCharts;
