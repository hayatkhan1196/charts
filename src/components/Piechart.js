import React from "react";
import { Pie } from "react-chartjs-2";

function Piechart() {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "sales 2019 (m)",
        data: [2, 3, 4, 6, 3],
        backgroundColor: [
          "rgba(255, 0, 0 )",
          "rgba(1, 255, 232  )",
          "rgba(200, 205, 107  )",
          "rgba(25, 45, 244 )",
          "rgba(101, 245, 127  )",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
}

export default Piechart;
