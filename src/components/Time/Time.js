
export default function Time(props) {

    return (
      <div>
        <div className="card-time">{props.current}hrs</div>
        <p className="recent">Last {props.time} - {props.previous}</p>
      </div>
    );
  }