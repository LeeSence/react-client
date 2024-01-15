// ** Third Party Components
import { Bar } from "react-chartjs-2";
import { Calendar } from "react-feather";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

// ** Reactstrap Imports
import { Card, CardHeader, CardBody, Button } from "reactstrap";
import React, { useState } from "react";

const BarChart = ({ primary, gridLineColor, labelColor }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        min: 0,
        max: 12,
        grid: {
          color: null,
          borderColor: null,
        },
        ticks: { color: labelColor },
      },
      y: {
        min: 0,
        max: 40,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          stepSize: 10,
          color: labelColor,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  // ** Chart data
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        maxBarThickness: 100,
        backgroundColor: primary,
        borderColor: "transparent",
        borderRadius: { topRight: 10, topLeft: 10 },
        data: [30, 35, 15],
      },
    ],
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <Card>
      <CardHeader className="d-flex align-items-start flex-column ps-1">
        <div className="d-flex align-items-center">
          <Calendar size={30} />
          <DatePicker
            className="form-control border-0 text-center fs-4"
            style={{ display: "inline" }}
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy MM"
            showMonthYearPicker
            showTwoColumnMonthYearPicker
          />
          <Button color="primary" style={{ width: "6em" }}>
            검색
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: "400px" }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default BarChart;
