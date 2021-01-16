import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "sales 2019 (m)",
        data: [1, 2, 4, 6, 5],
        borderColor: [
          "rgba(213, 245, 227  )",
          'rgba(213, 245, 227  )"',
          'rgba(213, 245, 227  )"',
          'rgba(213, 245, 227  )"',
          'rgba(213, 245, 227  )"',
        ],
        backgroundColor: [
          "rgba(213, 245, 227  )",
          "rgba(213, 245, 227  )",
          "rgba(213, 245, 227  )",
          "rgba(213, 245, 227  )",
          "rgba(213, 245, 227  )",
        ],
      },
      {
        label: "sales 2020 (m)",
        data: [6, 7, 9, 5, 4],
        borderColor: [
          "rgba(250, 219, 216)",
          "rgba(250, 219, 216)",
          "rgba(250, 219, 216)",
          "rgba(250, 219, 216)",
          "rgba(250, 219, 216)",
        ],
        backgroundColor: [
          "rgba(250, 219, 216  )",
          "rgba(250, 219, 216  )",
          "rgba(250, 219, 216  )",
          "rgba(250, 219, 216  )",
          "rgba(250, 219, 216  )",
        ],
      },
      {
        label: "sales 2021 (m)",
        data: [3, 7, 4, 9, 2],
        borderColor: ["rgba(174, 214, 241)"],
        backgroundColor: [
          "rgba(174, 214, 241 )",
          "rgba(174, 214, 241 )",
          "rgba(174, 214, 241 )",
          "rgba(174, 214, 241 )",
          "rgba(174, 214, 241 )",
        ],
      },
    ],
  };
  const option = {
    title: {
      display: true,
      text: "Bar chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Bar data={data} options={option} />
    </div>
  );
}

export default BarChart;
