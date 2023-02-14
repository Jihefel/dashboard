import Card from "./components/Card/Card";
import Menu from "./components/Menu/Menu";
import exercise from "./assets/images/icon-exercise.svg";
import play from "./assets/images/icon-play.svg";
import selfCare from "./assets/images/icon-self-care.svg";
import social from "./assets/images/icon-social.svg";
import study from "./assets/images/icon-study.svg";
import work from "./assets/images/icon-work.svg";
import avatar1 from "./assets/images/image-jeremy.png";
import datas from "./assets/data/data.json";
import { Container } from "react-bootstrap";
import { useState } from "react";

const images = [work, play, study, exercise, social, selfCare];

function App() {

  // State
  const [timeframe, setTimeframe] = useState("weekly");
  const [timeState, setTimeState] = useState("Week");

  // Comportement
  function handleTimeframe(timeframe,time) {
    setTimeframe(timeframe);
    setTimeState(time)
  }

  // Render
  return (
    <div className="App">
      <Container className="d-flex flex-md-nowrap">
        <div className="menu-cont me-md-3 mb-3 mb-md-0">
          <Menu
            avatar={avatar1}
            name={"Jeremy Robson"}
            handleTimeframe={handleTimeframe}
          />
        </div>
        <div className="cards d-flex flex-wrap gap-2 gap-md-2 gap-xl-3">
          {datas.map((data, index) => (
            <Card
              source={images[index]}
              nom={data.title}
              timeframe={timeframe}
              time={timeState}
              key={index}
              data={data}
            />
          ))}
        </div>
        ;
      </Container>
    </div>
  );
}

export default App;
