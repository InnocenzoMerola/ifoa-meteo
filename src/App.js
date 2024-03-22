import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MainCont from "./components/MainCont";
import Searched from "./components/Searched";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <Container>
      <MyNavbar />
      <Searched />
      <MainCont />
      <MyFooter />
    </Container>
  );
}

export default App;
