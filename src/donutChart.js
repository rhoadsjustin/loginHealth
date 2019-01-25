import React, { Component } from "react";
import { Chart } from "primereact/chart";

export class DoughnutChartDemo extends Component {
  render() {
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <div>
        <div className="content-section introduction">
          <div className="feature-intro">
            <h1>Tim's Donut Chart of Login Success vs. Failure</h1>
            <p>
              a small fried cake of sweetened dough, typically in the shape of a
              ball or ring.
            </p>
            <p>a ring-shaped object, in particular a vacuum chamber in some types of particle accelerator.</p>
          </div>
        </div>

        <div className="content-section implementation">
          <Chart type="doughnut" data={data} />
        </div>
      </div>
    );
  }
};

export default DoughnutChartDemo;
