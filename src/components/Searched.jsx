import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MY_KEY = "11f00c8f55206248cd7777ce8aba8062";

const Searched = () => {
  const [city, setCity] = useState("");
  const [currentCity, setCurrentCity] = useState(null);

  const weatherFetch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata api");
        }
      })
      .then((cityData) => {
        setCurrentCity(cityData);
      })
      .catch((error) => {
        console.error("ERRORE", error);
      });
  };

  const searchedCity = () => {
    weatherFetch();
    setCity("");
  };

  const clickOnPage = () => {
    setCurrentCity(null);
  };

  useEffect(() => {
    window.addEventListener("click", clickOnPage);

    return () => {
      window.removeEventListener("click", clickOnPage);
    };
  });

  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col md={5}>
          <InputGroup>
            <FormControl placeholder="Cerca una città" value={city} onChange={(e) => setCity(e.target.value)} />
            <Button variant="primary" onClick={searchedCity}>
              Cerca
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {currentCity && (
        <Row className="mt-3 mb-5 justify-content-center">
          <Col md={7} className="mb-2 mb-md-0">
            <img
              src="data:image/jpeg;base64,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"
              alt="meteo"
              className="logo"
            ></img>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {currentCity.name}, {currentCity.sys.country}
                </Card.Title>
                <ListGroup.Item>Cielo: {currentCity.weather[0].main}</ListGroup.Item>
                <ListGroup.Item>Temperatura: {Math.round(currentCity.main.temp - 273.15)}°C</ListGroup.Item>
                <ListGroup.Item>Temperatura: {(currentCity.main.temp - 273.15).toFixed(2)}°C</ListGroup.Item>
                <hr />
                <h5 className=" mt-2">Maggiori dettagli</h5>
                <ListGroup.Item>Temperatura minima: {(currentCity.main.temp_min - 273.15).toFixed(2)}°C</ListGroup.Item>
                <ListGroup.Item>
                  Temperatura massima: {(currentCity.main.temp_max - 273.15).toFixed(2)}°C
                </ListGroup.Item>
                <ListGroup.Item>Umidità: {currentCity.main.humidity}%</ListGroup.Item>
                <ListGroup.Item>Vento: {currentCity.wind.speed}km/h</ListGroup.Item>
                <ListGroup.Item>Latitudine: {currentCity.coord.lat}</ListGroup.Item>
                <ListGroup.Item>Longitudine: {currentCity.coord.lon}</ListGroup.Item>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Row>
        <Col sm={6} md={4} lg={3} className="mb-2 mt-md-0">
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/temperature-5123.jpg"
              className="top-img"
            />
            <Card.Body className="body-text">
              <Card.Title>Temperature in calo</Card.Title>
              <Card.Text>tutto quello che c'è da sapere sull'ONDATA di FREDDO che sta per arrivare</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img
              src="https://w-content.meteosuper.it/2023/04/140423-sommario-inizio-sett.jpg"
              className="top-img"
            />
            <Card.Body className="body-text">
              <Card.Title>Bassa pressione</Card.Title>
              <Card.Text>
                Nei prossimi giorni insiste un vortice di bassa pressione: tempo instabile e aria fresca.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2 mt-md-0" sm={6} md={4} lg={3}>
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/temperature-210523.jpg"
              className="top-img"
            />
            <Card.Body className="body-text">
              <Card.Title>Meteo: Temperature</Card.Title>
              <Card.Text>sarà caldo da inizio Estate con Zefiro, ma non per tutti! Gli ultimi Aggiornamenti</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-md-none d-lg-block mt-2 mt-md-0" sm={6} lg={3}>
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/FOTO1_uragano-lun-mar_OK.jpeg"
              className="top-img"
            />
            <Card.Body className="body-text">
              <Card.Title>Ciclone POPPEA</Card.Title>
              <Card.Text>Sarà URAGANO MEDITERRANEO per la prima volta ad Agosto!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Searched;
