import Card from "./components/Card/Card";
import Menu from './components/Menu/Menu';
import ellipsis from "./assets/images/icon-ellipsis.svg";
import exercise from "./assets/images/icon-exercise.svg";
import play from "./assets/images/icon-play.svg";
import selfCare from "./assets/images/icon-self-care.svg";
import social from "./assets/images/icon-social.svg";
import study from "./assets/images/icon-study.svg";
import work from "./assets/images/icon-work.svg";
import avatar1 from "./assets/images/image-jeremy.png";
import data from "./assets/data/data.json";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="d-flex">
        <div className="menu-cont me-3">
          <Menu avatar={avatar1} name={"Jeremy Robson"} />
        </div>
        <div className="cards d-flex flex-wrap gap-3">
          {data.map(title => 
            <Card source={work} nom={title} />
          )}
          {/* <Card source={play} nom={data[1].title} />
          <Card source={study} nom={"Study"} />
          <Card source={exercise} nom={"Exercise"} />
          <Card source={social} nom={"Social"} />
          <Card source={selfCare} nom={"Self Care"} /> */}
        </div>
      </Container>
    </div>
  );
}

export default App;
