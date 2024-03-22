import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

const MyFooter = function () {
  return (
    <Container fluid className="px-4">
      <Row className="justify-content-center mt-5 g-0">
        <Col sm={12} md={10} lg={6}>
          <Row>
            <Col className="mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>

          <Row xs={2} md={4} lg={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#i" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button type="button" className="btn btn-sm footer-button rounded-0 mt-3 bg-dark border-0">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
