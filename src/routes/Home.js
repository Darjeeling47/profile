//css
import "./Home/Home.css";
import { Col, Container, Row, Card, CardHeader, Button } from "react-bootstrap";

//json
import Data from "./Home/Home.json";
import { useNavigate } from "react-router-dom";

export default function main() {
  return (
    <>
      <Title />
      <Contact />
      <AboutMe />
      <Menu />
    </>
  );
}

//title
function Title() {
  let data = Data.Header;

  return (
    <Container className="mt-5-0 home-title">
      <Row className="justify-content-md-center">
        <Col xl className="text-center">
          <img src="images/profile.jpeg" className="rounded"></img>
        </Col>
        <Col>
          <h1>{data}</h1>
        </Col>
      </Row>
    </Container>
  );
}

//contact
function Contact() {
  let contact = Data.Contact;

  return (
    <Container className="contact">
      <div className="color-line color-bg-orange-500"></div>
      <Row className="text-center mt-1-0">
        <Col xl>
          <p>
            <i className="bi bi-telephone-fill me-2 color-txt-emerald-500"></i>
            {contact.tel}
          </p>
        </Col>
        <Col xl>
          <p>
            <i className="bi bi-envelope-fill me-2 color-txt-red-500"></i>
            {contact.email}
          </p>
        </Col>
        <Col xl>
          <p>
            <i className="bi bi-facebook me-2 color-txt-blue-600"></i>
            {contact.facebook}
          </p>
        </Col>
        <Col xl>
          <p>
            <i class="bi bi-line me-2 color-txt-green-600"></i>
            {contact.line}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

//about me
function AboutMe() {
  let aboutMe = Data.AboutMe;

  return (
    <Container className="mt-4-0 about-me">
      <Row className="text-center">
        <div className="px-0">
          <p className="about-me-topic d-inline color-txt-gray-700">
            {aboutMe.Topic.first}
          </p>
          <p className="about-me-topic d-inline color-txt-orange-500">
            {aboutMe.Topic.second}
          </p>
        </div>
      </Row>
      <Row className="mt-2-0 about-me-description text-center">
        <p>{aboutMe.Description.Paragraph1}</p>
        <p>{aboutMe.Description.Paragraph2}</p>
        <p>{aboutMe.Description.Paragraph3}</p>
      </Row>
    </Container>
  );
}

function Menu() {
  let data = Data.Menu.Topic;

  return (
    <Container className="mt-4-0">
      <h1>{data}</h1>
      <br></br>
      <Row>
        <LoopMenu />
      </Row>
    </Container>
  );
}

function LoopMenu() {
  let data = Data.Menu.Description;
  const navigate = useNavigate();

  return data.map((menu) => {
    // const handleClick = navigate(menu.path);

    return (
      <Col lg={3} md={6}>
        <Card className="home-card mb-3">
          <Card.Body>
            <Container fluid>
              <Row>
                <Col className="mb-3">
                  <h1 className="font mb-0">
                    <i className={menu.Icon + " " + menu.Color}></i>
                    {menu.Topic}
                  </h1>
                </Col>
                <Button href={"/profile/#" + menu.Path} className={menu.Varint}>
                  Visit
                </Button>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}
