import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";

const CityList = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [infoCity, setInfoCity] = useState(false);

  const cities = ["Maddaloni", "Caserta", "Milano", "Torino", "Londra", "Canada", "Sydney", "Parigi"];

  const API_KEY = "11f00c8f55206248cd7777ce8aba8062";

  const fetchCityData = (name) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        setCityData(data);

        setInfoCity(true);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  const handleCityClick = (name) => {
    setSelectedCity(name);
    fetchCityData(name);
  };

  const clickOnPage = () => {
    setInfoCity(false);
  };

  useEffect(() => {
    window.addEventListener("click", clickOnPage);

    return () => {
      window.removeEventListener("click", clickOnPage);
    };
  });

  return (
    <Container className="mt-5">
      <Row className="justify-content-between">
        <Col md={4} lg={3} className=" mb-2 mb-md-0">
          <h3>Le tue ricerche</h3>
          <ListGroup>
            {cities.map((city, i) => (
              <ListGroup.Item
                key={i}
                action
                onClick={(e) => {
                  e.stopPropagation();
                  handleCityClick(city);
                }}
              >
                {city}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        {!infoCity && (
          <Col md={8} lg={9}>
            <img
              src="https://w-content.meteosuper.it/2022/08/140822-pt_LUN-15-PREVISIONI-1.jpg"
              alt="mappa"
              className="italy-image"
            />
          </Col>
        )}
        {infoCity && selectedCity && cityData && (
          <>
            <Col md={8} lg={9}>
              <Row className="justify-content-between align-items-center">
                <Col md={12} lg={6}>
                  <img
                    src="https://www.ilmeteo.it/portale/files/giornale/medium/temperature-5123.jpg"
                    alt="ima"
                    className="logo"
                  />
                </Col>
                <Col md={12} lg={6}>
                  <ListGroup>
                    <h4 className="text-center">{selectedCity}</h4>
                    <ListGroup.Item>
                      Cielo: {cityData.weather[0].main} - {cityData.weather[0].description}{" "}
                    </ListGroup.Item>
                    <ListGroup.Item>Temperatura: {(cityData.main.temp - 273.15).toFixed(2)}°C</ListGroup.Item>
                    <h5 className="text-center mt-2">Maggiori dettagli</h5>
                    <ListGroup.Item>
                      Temperatura minima: {(cityData.main.temp_min - 273.15).toFixed(2)}°C
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Temperatura massima: {(cityData.main.temp_max - 273.15).toFixed(2)}°C
                    </ListGroup.Item>
                    <ListGroup.Item>Umidità: {cityData.main.humidity}%</ListGroup.Item>
                    <ListGroup.Item>Vento: {cityData.wind.speed}km/h</ListGroup.Item>
                    <ListGroup.Item>Latitudine: {cityData.coord.lat}</ListGroup.Item>
                    <ListGroup.Item>Longitudine: {cityData.coord.lon}</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default CityList;
