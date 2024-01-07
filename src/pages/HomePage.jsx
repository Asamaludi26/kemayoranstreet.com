import { Container, Row, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

import HeroImage from '../assets/img/hero.png';
import { temaGratis } from '../data/index'

import { roleKamu } from '../data/index'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

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

      <div className="homepage">
      <div className="testipage w-100 min-vh-100">
      <MDBContainer>
        {/* Judul Tema */}
        <Row>
            <Col>
              <h1 className="text-center fw-bold">Role</h1>
              <p className="text-center">Pilihan role sesuai dengan moda usahamu</p>
            </Col>
        </Row>
          {/* End Judul Tema*/}
        <MDBRow className='d-flex justify-content-center align-items-center px-3 pb-3'>
        {roleKamu.map((role)=>{  
          return<MDBCol lg={4} md={0} className='mb-4 mb-lg-0' key={role.id}>
            <a href="/">
              <img 
                src={role.image}
                className='w-100 shadow-1-strong rounded mb-4'
                alt='Boat on Calm Water'
              />
            </a>
        
              

              {/* <img
                src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
                className='w-100 shadow-1-strong rounded mb-4'
                alt='Wintry Mountain Landscape'
              /> */}
          </MDBCol>
        }
        )}
  
          {/* <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Mountains in the Clouds'
            />

            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Boat on Calm Water'
            />
          </MDBCol> */}

          {/* <MDBCol lg={4} className='mb-4 mb-lg-0'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Waves at Sea'
            />

            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
              className='w-100 shadow-1-strong rounded mb-4'
              alt='Yosemite National Park'
            />
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </div>
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
              <button className="btn btn-success btn-lg" onClick={()=> Navigate("/tema")}>Lihat Semua Tema
              <i className="fa-solid fa-chevron-right ms-3" />
              </button>
            </Col>
          </Row>
          {/* End Button Tema */}

        </Container>
      </div>
      {/* End Tema */}
    </div>
  );
};

export default HomePage