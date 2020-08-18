import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

import "./news.css";


function NewsColumn(props) {
  console.log(props);
  return (
        <div className="col-6" id="news">
          <div className="card-body">
            <h4 className="card-title">News</h4>
            <div className="table-rep-plugin">
              <div className="table-responsive mb-0" data-pattern="priority-columns">
                <table id="companies" className="table table-striped">
                  <tbody>
                    <tr>
                      <th>
                        <span className="date">8/16</span>
                      </th>
                      <td>Apple’s fall event 2020: Seven things to expect, including iPhone 12 and Watch Series 6</td>
                    </tr>
                    <tr>
                      <th>
                        <span className="date">8/16</span>
                      </th>
                      <td>Amazon considers moving employees out of Seattle amid COVID-19, violence</td>
                    </tr>
                    <tr>
                      <th>
                        <span className="date">
                          8/16
                              </span>
                      </th>
                      <td>Oracle Laying Off Staff At Underperforming Commerce Cloud: Report</td>
                    </tr>
                    <tr>
                      <th>
                        <span className="date">
                          8/16
                              </span>
                      </th>
                      <td>Microsoft: We’re Not Trying To Sell More Consoles Than Sony And The PS5, We’re Doing Something Else </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  );
}

export default NewsColumn;