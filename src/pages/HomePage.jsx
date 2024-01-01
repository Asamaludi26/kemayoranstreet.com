import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 ">Promosi <br /> <span>Usaha</span> <br /> Jauh Lebih Mudah!</h1>
              <p className="mb-4 ">Kota Kite, Kampung Kite! <br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem similique libero natus.</p>
              <button type="button" className="btn btn-danger btn-lg me-2 rounded-1 mb-xs-0 mb-2 ">Mulai Promosi</button>
              <button type="button" className="btn btn-outline-success btn-lg rounded-1 mb-xs-0 mb-2 ">Mulai Belanja</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="hero-img" />
            </Col>
        </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
};

export default HomePage