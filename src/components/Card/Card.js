import data from "../../assets/data/data.json"

function Card(props) {
  // State


  // Comportement


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
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div className="card-time">32hrs</div>
          <p className="recent">Last Week-36hrs</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
