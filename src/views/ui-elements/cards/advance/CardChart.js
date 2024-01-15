import { Fragment } from "react";

// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const CardChat2 = () => {
  const donutColors = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

  // ** Chart Options
  const options = {
    colors: [donutColors.series1],
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: "25%",
        },
        track: {
          margin: 15,
        },
        dataLabels: {
          name: {
            fontSize: "2rem",
            fontFamily: "Montserrat",
          },
          value: {
            fontSize: "1rem",
            fontFamily: "Montserrat",
          },
          total: {
            show: true,
            fontSize: "1rem",
            label: "Comments",
            formatter() {
              return "80%";
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      labels: {
        fontColor: "red",
        fontSize: 18,
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Comments"],
  };

  return (
    <Fragment>
      <Chart options={options} series={[80]} type="radialBar" height={350} />
    </Fragment>
  );
};

export default CardChat2;
