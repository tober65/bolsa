import React, { useEffect, useState } from "react";
import API from "../../utils/API";


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
    <div>
      {news.map((item) => (
        <a key={item.id} href={item.url} target="_blank">
          <div>{item.headline}</div>
        </a>
      ))}
    </div>
  );
}

export default CompanyNews;
