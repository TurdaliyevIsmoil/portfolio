import React from "react";
import styled from "styled-components";

function Modal({ img, close, open }) {
  return (
    <Container className={`${open ? "active" : ""}`}>
      <div className="image">
        <img src={img} alt="Image" />
      </div>
      <div className="backdrop" onClick={() => close()}></div>
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: all .3s;
  &.active {
    transform: translateY(0);
    .backdrop{
        opacity: 1;
    }
  }
  .backdrop {
    z-index: 1;
    position: absolute;
    transition: all .5s;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000bc;
  }
  .image {
    overflow-y: scroll;
    width: 70%;
    position: relative;
    z-index: 2;
    max-height: 90%;
    @media (max-width:767px) {
      width: 80%;
    }
    img {
      width: 100%;
    }
  }
`;
