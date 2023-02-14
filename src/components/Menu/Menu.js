import { useState } from "react";

export default function Menu(props) {

  const [activeLink, setActiveLink] = useState(2);

  const active = (id) => {
    setActiveLink(id);
  }

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
              <a href="#" className={activeLink === 1 ? "active" : ""} onClick={() => {props.handleTimeframe("daily","Day"); active(1)}}>
                Daily
              </a>
            </li>
            <li>
              <a href="#" className={activeLink === 2 ? "active" : ""} onClick={(e) => {props.handleTimeframe("weekly","Week"); active(2)}}>
                Weekly
              </a>
            </li>
            <li>
              <a href="#" className={activeLink === 3 ? "active" : ""} onClick={() => {props.handleTimeframe("monthly","Month"); active(3)}}>
                Monthly
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
