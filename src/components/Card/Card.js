import datas from "../../assets/data/data.json";
import Time from "../Time/Time";
import ellipsis from "../../assets/images/icon-ellipsis.svg";
import { useState } from "react";

function Card(props) {

  // Render
  return (
    <div className="Card">
      <div className="card">
        <div className={"img-section " + props.nom}>
          <img src={props.source} alt="" />
        </div>
        <div className="card-desc">
          <div className="cardheader">
            <div className="card-title">{props.nom}</div>
            <div className="card-menu">
              <img src={ellipsis} alt="" />
            </div>
          </div>
          <div>
              <Time
                current={props.data.timeframes[props.timeframe].current}
                previous={props.data.timeframes[props.timeframe].previous}
                time={props.time}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
