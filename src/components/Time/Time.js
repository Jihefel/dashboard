import datas from "../../assets/data/data.json";

export default function Time(props) {

    return (
      <div>
        <div className="card-time">{props.current}hrs</div>
        <p className="recent">Last Week - {props.previous}</p>
      </div>
    );
  }