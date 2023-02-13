
export default function Menu(props) {
    // State
  
  
    // Comportement
  
  
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
            <li><a href="">Daily</a></li>
            <li><a href="">Weekly</a></li>
            <li><a href="">Monthly</a></li>
          </ul>
        </div>
      </div>
      </div>
    );
  }