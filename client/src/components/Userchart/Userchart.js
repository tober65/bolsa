import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["TSLA", "AAPL", "MSFT", "NVDA", "DAL"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Portfolio Distribution</h3>
        <Doughnut className="mt-3" data={this.state.dataDoughnut} options={{ responsive: true, maintainAspectRatio: true, }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;