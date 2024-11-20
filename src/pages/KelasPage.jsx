import { Container, Row, Col } from "react-bootstrap";
// import HeroImage from '../assets/img/hero.png';
import { semuaKelas } from '../data/index';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";


const KelasPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {

    setSelectedCategory(category);
  };

  const handleButtonClick = (kelasId) => {
    // Redirect ke halaman baru berdasarkan ID kelas
    navigate(`/kelas/${kelasId}`);
  };
  // let navigate = useNavigate();


  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center header">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Top Up <br /> <span>Game Murah</span> <br />Cuma disini!!!
              </h1>
              <p className=" mb-4">Selamat datang di AaStore, destinasi utama untuk top up game dengan harga terbaik! Temukan beragam game favoritmu dan nikmati kemudahan top up tanpa ribet. Dapatkan pengalaman bermain game yang lebih seru dan lancar dengan layanan top up terpercaya dari AaStore!</p>
              {/* <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat List</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button> */}
            </Col>
            {/* <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col> */}
          </Row>
        </Container>
      </header>

      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="ragnarok text-center fw-bold">List Terbaru</h1>
              <p className="ragnarok2 text-center">Daftar Harga Top Up Termurah AaStore</p>
            </Col>
          </Row>

          <div className="button-containers">
            <button className="btn1" onClick={() => handleCategoryClick('game_populer')}>Game Populer</button>
            <button className="btn1" onClick={() => handleCategoryClick('game_android')}>Game Android</button>
            <button className="btn1" onClick={() => handleCategoryClick('game_pc')}>Game PC</button>
            <button className="btn1" onClick={() => handleCategoryClick('')}>Semua Game</button>
          </div>

          <Row>
            {semuaKelas
              .filter((kelas) => selectedCategory === 'all' || kelas.category.includes(selectedCategory))
              .map((kelas) => (
                <Col key={kelas.id}>
                  <button className="image-button" onClick={() => handleButtonClick(kelas.id)}>
                    <img src={kelas.image} alt={kelas.title} className="w-100 mb-3 rounded-top" />
                    <h5 className="mb-5 px-3" style={{ textAlign: 'left' }}>{kelas.title}</h5>
                    {/* Jika Anda ingin menambahkan tombol beli, Anda dapat melakukannya di sini */}
                    {/* <div className="ket d-flex justify-conten-between align-items-center px-3 pb-3">
              <button className="btn btn-success rounded-3" onClick={() => navigate("kelas")}>{kelas.buy}</button>
          </div> */}
                  </button>
                </Col>
              ))}
          </Row>

          <Row>
            <Col className="text-center">
              <button className="btn btn-danger rounded-5 btn-lg" onClick={() => navigate("/")}><i className="fa-solid fa-chevron-left ms"></i>Kembali</button>


            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />


    </div>
  )
};

export default KelasPage