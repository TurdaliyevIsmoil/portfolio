import React, { useState } from "react";
import styled from "styled-components";
import Underline from "./underline";
import profit from "../images/profit.jpg";
import visitgalaxy from "../images/visitgalaxy.jpg";
import cubolanding from "../images/cubolanding.jpg";
import cuboapp from "../images/cuboapp.jpg";
import Modal from "./Modal";

function Portfolio() {
  const [image, setimage] = useState({});
  const [open, setopen] = useState(false);
  const data = [
    {
      img: require("../images/profit.jpg"),
      title: "Profit",
      link: "#",
    },
    {
      img: require("../images/visitgalaxy.jpg"),
      title: "VisitGalaxy",
      link: "https://visitgalaxy.uz",
    },
    {
      img: require("../images/cubolanding.jpg"),
      title: "Cubo Landing",
      link: "https://cubo.money",
    },
    {
      img: require("../images/cuboapp.jpg"),
      title: "Cubo App",
      link: "https://cubo.money/app",
    },
  ];
  const openImageModal = (i) => {
    setimage(i);
    setopen(true);
  };
  return (
    <Container className="container">
      <div className="tabs">
        <Underline>All</Underline>
        <Underline>Front end</Underline>
        <Underline>React</Underline>
        <Underline>Design</Underline>
      </div>
      <div className="images">
        {data.map((i) => {
          return (
            <div className="image" onClick={() => openImageModal(i)}>
              <img src={i.img} alt="" />
            </div>
          );
        })}
      </div>

      <Modal img={image.img} open={open} link={image.link} close={() => setopen(false)} />
    </Container>
  );
}

export default Portfolio;
const Container = styled.section`
  margin: 100px auto;
  .tabs {
    margin-bottom: 60px;
    display: flex;
    color: #666666;
    font-size: 14px;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Playfair Display";
    letter-spacing: 1px;
    gap: 20px;
    span {
      cursor: pointer;
      line-height: 24px;
    }
  }
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    .image > img {
      width: 100%;
      border: 1px solid #fdfdfd;
      box-shadow: 0 0 10px #f3f3f3;
      aspect-ratio: 16 / 12;
      object-fit: cover;
      object-position: top;
    }
  }
`;
