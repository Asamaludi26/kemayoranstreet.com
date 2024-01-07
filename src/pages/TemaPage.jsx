import { Container, Row, Col } from "react-bootstrap";

import { temaGratis } from '../data/index'

const TemaPage = () => {
  return(
    <div className="homepage">

        {/* Tema */}
        <div className="tema w-100 min-vh-100">
        <Container>

          {/* Judul Tema */}
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Tema</h1>
              <p className="text-center">Pilihan tema sesuai dengan moda usahamu</p>
            </Col>
          </Row>
          {/* End Judul Tema*/}

          {/* Box Tema*/}
          <Row>
            {temaGratis.map((tema)=>
            {
              return <Col key={tema.id}>
                  <img src={tema.image}alt="unsplash.com" className="w-100 mb-5 rounded"/>
                  <div className="star mb-2 px-3">
                    <i className={tema.star1}></i>
                    <i className={tema.star2}></i>
                    <i className={tema.star3}></i>
                    <i className={tema.star4}></i>
                    <i className={tema.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{tema.title}</h5>
                  <div className="d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{tema.price}</p>
                    <button className="btn btn-danger arounded-1">{tema.buy}</button>
                  </div>
                </Col>
              }
            )}
          </Row>
          {/* End Box Tema*/}

          {/* Button Tema */}
          <Row>
            <Col className="text-center">
              <button className="btn btn-success btn-lg">Lihat Semua Tema
              <i className="fa-solid fa-chevron-right ms-3" />
              </button>
            </Col>
          </Row>
          {/* End Button Tema */}
        </Container>
    </div>
    {/* End Tema */}

    </div>
    )
}

export default TemaPage