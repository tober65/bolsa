import React, { useEffect, useState } from "react";
import "./news.css";
import API from "../../utils/API";
import moment from "moment"

function NewsColumn(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.getMarketNews()
      .then((response) => {
        setNews(response.data.slice(0, 10));
      })
      .catch((err) => console.log("Error!", err));
  }, []);

  return (
    <div id="news">
      <div className="card-body">
        <h4 className="card-title">News</h4>
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
    </div>
  );
}

export default NewsColumn;
