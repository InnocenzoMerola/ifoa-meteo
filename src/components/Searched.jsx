import { useState } from "react";

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
  const [cittàNonTrovata, setCittàNonTrovata] = useState(null);

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
        console.log("Dati della città", cityData);
        if (cityData.cod && cityData.cod === "404") {
          console.log("Città non trovata");
          setCittàNonTrovata(true);
        } else {
          setCurrentCity(cityData);
          setCittàNonTrovata(false);
        }
      })
      .catch((error) => {
        console.error("ERRORE", error);
      });
  };

  const searchedCity = () => {
    weatherFetch();
    setCity("");
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col md={5}>
          <InputGroup className="mb-3">
            <FormControl placeholder="Cerca una città" value={city} onChange={(e) => setCity(e.target.value)} />
            <Button variant="primary" onClick={searchedCity}>
              Cerca
            </Button>
          </InputGroup>
        </Col>
      </Row>
      {cittàNonTrovata && (
        <Row className="mt-3 justify-content-center">
          <Col md={5}>
            <Card>
              <Card.Body>
                <Card.Title>Città non trovata</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {currentCity && !cittàNonTrovata && (
        <Row className="mt-3 mb-5 justify-content-center">
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
        <Col md={3}>
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/temperature-5123.jpg"
              className="top-img"
            />
            <Card.Body>
              <Card.Title>Temperature in calo</Card.Title>
              <Card.Text>tutto quello che c'è da sapere sull'ONDATA di FREDDO che sta per arrivare</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              src="https://w-content.meteosuper.it/2023/04/140423-sommario-inizio-sett.jpg"
              className="top-img"
            />
            <Card.Body>
              <Card.Title>Bassa pressione</Card.Title>
              <Card.Text>
                Nei prossimi giorni insiste un vortice di bassa pressione: tempo instabile e aria fresca.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/temperature-210523.jpg"
              className="top-img"
            />
            <Card.Body>
              <Card.Title>Meteo: Temperature</Card.Title>
              <Card.Text>sarà caldo da inizio Estate con Zefiro, ma non per tutti! Gli ultimi Aggiornamenti</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Img
              src="https://www.ilmeteo.it/portale/files/giornale/medium/FOTO1_uragano-lun-mar_OK.jpeg"
              className="top-img"
            />
            <Card.Body>
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
