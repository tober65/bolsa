import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import API from "../../utils/API";
import "./CompanyFinancials.css";

function CompanyFinancials(props) {
  const [financials, setFinancials] = useState({
    metric: {},
  });

  useEffect(() => {
    API.getCompanyFinancials(props.selectedSymbol.symbol)
      .then((response) => {
        setFinancials(response.data);
        props.onLoadedData('companyFinancials');
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <div className="companyfinancials p-1">
    <Table>
      <thead className="head">Company Financials</thead>
      <tbody className="financials">
        <tr className="high">
          <td>52-Wk High:</td>
          <td>{financials.metric["52WeekHigh"]}</td>
          <td>52-Wk Low:</td>
          <td>{financials.metric["52WeekLow"]}</td>
        </tr>
        <tr>
          <td>10-Day Vol:</td>
          <td>{financials.metric["10DayAverageTradingVolume"]}</td>
          <td>Dividend Yield:</td>
          <td>{financials.metric["currenttdidendYieldTTM"]}</td>
        </tr>
        <tr>
          <td>Annual ROI:</td>
          <td>{financials.metric["roiAnnual"]}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default CompanyFinancials;
