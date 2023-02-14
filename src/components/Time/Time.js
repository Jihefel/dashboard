
export default function Time(props) {

    return (
      <div className="d-flex align-items-center justify-content-between d-md-block">
        <div className="card-time">{props.current}hrs</div>
        <small className="recent mb-0">Last {props.time} - {props.previous}hrs</small>
      </div>
    );
  }