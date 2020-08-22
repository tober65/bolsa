import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


//Get the labels for the chart by mapping through the user's stocks and getting the symbols 
//Data = the amount of shares the user has
//Find a way to generate a random background color

function UserChart(props) {
  let labels = [];
  let data = [];
  for (let i = 0; i < props.stocks.length; i++) {
    labels.push(props.stocks[i].symbol);
    data.push(props.stocks[i].amount);
  };
  
  let tableData = {
    dataDoughnut: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#3D3D75", "#16162A", "#6565C2"],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#3D3D75",
            "#16162A",
            "#6565C2",
          ]
        }
      ]
    }
  };


  return (<MDBContainer>
    <Doughnut className="mt-3" data={tableData.dataDoughnut} options={{ responsive: true, maintainAspectRatio: true, }} />
  </MDBContainer>)
}


export default UserChart;