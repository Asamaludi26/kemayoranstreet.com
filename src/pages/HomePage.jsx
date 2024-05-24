import { Container, Row, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

import HeroImage from '../assets/img/hero.png';
import { temaGratis } from '../data/index';
import Role1 from "../assets/img/role/role-1.svg";
import Role2 from "../assets/img/role/role-2.svg";
import Role3 from "../assets/img/role/role-3.svg";
import Role4 from "../assets/img/role/role-4.svg";

// import { roleKamu } from '../data/index'
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
// } from 'mdb-react-ui-kit';

const HomePage = () => {
  let Navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Header */}
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 ">Promosi <br /> <span>Usaha</span> <br /> Jauh Lebih Mudah!</h1>
              <p className="mb-4 "><span>Kota Kite, Kampung Kite!</span> <br />Mari kite dukung usaha rakyat, tetangge, sodare. <br/><span>Produk Lokal</span> Kagak kalah saing !  </p>
              <button type="button" className="btn btn-danger btn-lg me-2 rounded-1 mb-xs-0 mb-2 ">Mulai Promosi</button>
              <button type="button" className="btn btn-success btn-lg rounded-1 mb-xs-0 mb-2 ">Mulai Belanja</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-10">
            <img src={HeroImage} alt="hero-img" />
            </Col>
        </Row>
        </Container>
      </header>
      {/* End Header */}

      {/* Role */}
      <div className="role w-100 min-vh-100">
        <Container>
          {/* Judul Role */}
            <Row>
                <Col>
                  <h1 className="text-center fw-bold">Role</h1>
                  <p className="text-center">Pilihan role sesuai dengan moda usahamu</p>
                </Col>
            </Row>
          {/* End Judul Role*/}
          <Row>
              {/* <div className="konten">
              {roleKamu.map((role)=>{  
                return<Col key={role.id}>
                  <div className="klik">
                    <a href="/">
                      <img 
                        src={role.image}
                        className='w-100 rounded mb-4'
                      />
                      <div className="overlay">
                        <h1>{role.text}</h1>
                      </div>
                  </a>
                  </div>
                  
              </Col>
            }
            )}
              </div> */}

            <div className="konten">
              <div className="klik">
                <a href="/" target="_blank">
                  <img src={Role1} alt="" srcset="" />
                  <div className="overlay">
                    <div className="text">Kuliner</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="konten">
              <div className="klik">
                <a href="/" target="_blank">
                  <img src={Role2} alt="" srcset="" />
                  <div className="overlay">
                  <div className="text">Perawatan</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="konten">
              <div className="klik">
                <a href="/" target="_blank">
                  <img src={Role3} alt="" srcset="" />
                  <div className="overlay">
                    <div Fashion className="text">Fashion</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="konten">
              <div className="klik">
                <a href="/" target="_blank">
                  <img src={Role4} alt="" srcset="" />
                  <div className="overlay">
                    <div Fashion className="text">Teknologi</div>
                  </div>
                </a>
              </div>
            </div>  
            
          </Row>
        </Container>
      </div>
      {/* End Role */}

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
                  {/* <img src={tema.image}alt="unsplash.com" className="w-100 mb-5 rounded"/>
                  <div className="star mb-2 px-3">
                    <i className={tema.star1}></i>
                    <i className={tema.star2}></i>
                    <i className={tema.star3}></i>
                    <i className={tema.star4}></i>
                    <i className={tema.star5}></i>
                  </div> */}
                  
                  <h5 className="m-1 p-3 text-center">{tema.title}</h5>
                 
                  

                  <div className="d-flex justify-content-between px-3 pb-3">
                  <p>Rp.</p>
                  <h1 className="m-0 p-3 text-center fw-bold">{tema.price}</h1>
                    
                  </div>
                  <p className="m-0 fw-bold">{tema.text1}</p>
                  <p className="m-0 fw-bold">{tema.text1}</p>
                  <p className="m-0 fw-bold">{tema.text1}</p>
                  <p className="m-0 fw-bold">{tema.text1}</p>
                  <button className="btn btn-danger arounded-1">{tema.buy}</button>
                </Col>
              }
            )}
          </Row>
          {/* End Box Tema*/}

          {/* Button Tema */}
          {/* <Row>
            <Col className="text-center">
              <button className="btn btn-success btn-lg" onClick={()=> Navigate("/tema")}>Lihat Semua Tema
              <i className="fa-solid fa-chevron-right ms-3" />
              </button>
            </Col>
          </Row> */}
          {/* End Button Tema */}

        </Container>
      </div>
      {/* End Tema */}
    </div>
  );
};

export default HomePage