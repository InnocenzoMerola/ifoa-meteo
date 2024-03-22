import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";

const MyNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="lg" className="my-nav">
      <Container>
        <div className="logo-div">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikSQiqenvJ1acEMRvtrIchHm2g8b34D-dng&usqp=CAU"
            alt="logo"
            className="logo"
          />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/">Previsioni</Nav.Link>
            <Nav.Link href="#/">Radar</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contatti</Nav.Link>
            <Nav.Link href="#/">Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
