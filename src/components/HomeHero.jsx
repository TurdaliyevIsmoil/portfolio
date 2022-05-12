import React from "react";
import styled from "styled-components";
import bg from "../images/banner-bg.png";
import image from "../images/banner-img.png";
import { useWindupString, WindupChildren } from "windups";

function HomeHero() {
  const [fullname] = useWindupString("Ismoil Turdaliyev");
  return (
    <Container style={{ background: `url(${bg})` }}>
      <div className="inner container">
        <div>
          <WindupChildren>
            <h1>
              {fullname} <br /> *React
              
            </h1>
            <p>
              I am Front End developer using React and I have experience in Web
              Designer
            </p>
            <div className="line"></div>
            <p>
              <a href="">See some of our latest projects below. </a>
            </p>
          </WindupChildren>
        </div>
        <div className="img">
          <img src={image} alt="Ismoil Turdaliyev Developer" />
        </div>
      </div>
    </Container>
  );
}

export default HomeHero;

const Container = styled.section`
  padding: 100px 0;
  background-attachment: fixed !important;
  background-size: cover;
  background-position: top;
  background-color: #f9f9f9 !important;
  .inner {
    display: flex;
    justify-content: space-between;
    @media (max-width: 1199px) {
      align-items: center;
    }
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  h1 {
    line-height: 90px;
  }
  p {
    color: var(--gray-color);
    width: 60%;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .img {
    width: 40%;
    @media (max-width: 991px) {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        box-sizing: border-box;
        width: 500px;
        max-width: 80%;
        margin-top: 40px;
      }
    }
    img {
      width: 100%;
    }
  }
`;
