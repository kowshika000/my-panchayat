import React from "react";
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 25,  },
  { id: 1, value: 75,  },
 
];
const data1 = [
  { id: 0, value: 75, },
  { id: 1, value: 25,  },
 
];

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-lg-6 ">
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={100}
      />
      </div>
      <div className="col-lg-6">
      <PieChart
        series={[
          {
            data: data1,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={100}
      />
      </div>
    </div>
  );
};


export default Dashboard;
