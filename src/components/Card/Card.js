import datas from "../../assets/data/data.json";
import Time from "../Time/Time";
import ellipsis from "../../assets/images/icon-ellipsis.svg";
import { useState } from "react";

function Card(props) {
  
  // State
  const [timeframe, setTimeframe] = useState("weekly");
  
  // Comportement
  const handleChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

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
                current={props.data.timeframes[props.time].current}
                previous={props.data.timeframes[props.time].previous}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
