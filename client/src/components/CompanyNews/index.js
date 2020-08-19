import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap"
import API from "../../utils/API";
import moment from "moment";

function CompanyNews(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getNewsBySymbol(props.selectedSymbol.symbol)
      .then((response) => {
        setNews(response.data.slice(0, 10));
      })
      .catch((err) => console.log("Error!", err));
  }, [props.selectedSymbol]);

  return (
    <div className="card-body my-2">
      <h4 className="card-title">{`${props.selectedSymbol.description} News`}</h4>
      <div className="table-rep-plugin">
        <div
          className="table-responsive mb-0"
          data-pattern="priority-columns"
        >
          <table id="companies" className="table table-striped">
            <tbody>
              {news.map((item) => (
                <tr>
                  <th>
                    <span className="date">
                      {moment(item.datetime * 1000).format("M/D")}
                    </span>
                  </th>
                  <td>
                    <a key={item.id} href={item.url} target="_blank">
                      <div>{item.headline}</div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
);
}

export default CompanyNews;
