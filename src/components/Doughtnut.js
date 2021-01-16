import React from "react";
import { Doughnut } from "react-chartjs-2";

function Doughnutchart() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "sales 2019 (m)",
        data: [1, 2, 4, 6, 5],

        backgroundColor: [
          "rgba(255, 0, 0  )",
          "rgba(91, 44, 111   )",
          "rgba(22, 60, 250   )",
          "rgba(250, 15, 172  )",
          "rgba(218, 250, 15  )",
        ],
      },
    ],
  };

  const option = {
    title: {
      display: true,
      text: "Doughnut chart",
    },
  };
  return (
    <div>
      <Doughnut data={data} options={option} />
    </div>
  );
}

export default Doughnutchart;
