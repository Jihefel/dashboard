import { useState } from "react";

export default function Menu(props) {
  // Render
  return (
    <div className="Card Menu">
      <div className="card">
        <div className="img-section menu">
          <div className="img">
            <img src={props.avatar} alt="" />
          </div>
          <small>Report for</small>
          <h1>{props.name}</h1>
        </div>
        <div className="card-desc">
          <ul>
            <li>
              <a href="#" onClick={() => props.handleTimeframe("daily")}>
                Daily
              </a>
            </li>
            <li>
              <a href="#" onClick={() => props.handleTimeframe("weekly")}>
                Weekly
              </a>
            </li>
            <li>
              <a href="#" onClick={() => props.handleTimeframe("monthly")}>
                Monthly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
