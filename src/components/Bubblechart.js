import React from "react";
import { Bubble } from "react-chartjs-2";

function Bubblechart() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "sales 2019 (m)",
        data: [{ x: 4, y: 8, r: 6 }],
        borderColor: ["rgba(213, 245, 227  )"],
        backgroundColor: ["rgba(213, 245, 227  )"],
        pointBackgroundColor: ["rgba(213, 245, 227 )"],
        ponitBorderColor: ["rgba(213, 245, 227 )"],
      },
      {
        label: "sales 2020 (m)",
        data: [{ x: 3, y: 5, r: 7 }],
        borderColor: ["rgba(250, 219, 216)"],
        backgroundColor: ["rgba(250, 219, 216  )"],
        pointBackgroundColor: ["rgba(250, 219, 216)"],
        ponitBorderColor: ["rgba(250, 219, 216)"],
      },
      {
        label: "sales 2021 (m)",
        data: [{ x: 2, y: 5, r: 10 }],
        borderColor: ["rgba(174, 214, 241)"],
        backgroundColor: ["rgba(174, 214, 241 )"],
        pointBackgroundColor: ["rgba(174, 214, 241)"],
        ponitBorderColor: ["rgba(174, 214, 241 )"],
      },
    ],
  };
  const option = {
    title: {
      display: true,
      text: "Bubble chart",
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
      <Bubble data={data} options={option} />
    </div>
  );
}

export default Bubblechart;
