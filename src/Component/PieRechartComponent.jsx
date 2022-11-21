import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieRechartComponent extends React.Component {
   COLORS = ["#F7A691", "#F79E36", "#D8CCE2", "#D1E5E6", "#D0D6B0"];
   pieData = [
      {
         name: "1",
         value: 54.85
      },
      {
         name: "2",
         value: 47.91
      },
      {
         name: "3",
         value: 16.85
      },
      {
         name: "5",
         value: 16.14
      },
      {
         name: "6",
         value: 10.25
      }
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "10px",
               border: "5px solid #cccc"
            }}
         >
            
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
      
      <PieChart width={400} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={100}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
      );
   }
}
export default PieRechartComponent;