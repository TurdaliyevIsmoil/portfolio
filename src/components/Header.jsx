import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import Underline from "./underline";

function Header() {
  const [menu, setmenu] = useState(true);
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setTimeout(() => {
        if (window.scrollY > 80) {
          setscrolled(true);
          console.log(scrolled);
        } else {
          setscrolled(false);
        }
        return;
      }, 100);
    });
  }, []);

  return (
    <Container className={`${scrolled ? "active" : ""}`}>
      <div className="inner container">
        <a href="/" className="logo">
          <img src={logo} alt="Ismoil" />
        </a>
        <menu className={`${menu ? "active" : ""}`}>
          <li>
            <a href="#">
              <Underline>home</Underline>
            </a>
          </li>
          <li>
            <a href="#">
              <Underline>about</Underline>
            </a>
          </li>
          <li>
            <a href="#">
              <Underline>portfolio</Underline>
            </a>
          </li>
          <li>
            <a href="#">
              <Underline>contact</Underline>
            </a>
          </li>
        </menu>
        <div
          className={`burger ${menu ? "active" : ""}`}
          onClick={() => setmenu(!menu)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  transition: all 0.7s;
  &.active {
    background-color: #fff;
    height: 60px;
    box-shadow: 0 0 10px #c9c9c9b2;
  }
  .inner {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      img {
        height: 40px;
      }
    }
    menu {
      padding-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      gap: 40px;
      overflow: hidden;
      height: 38px;
      transition: transform 0.5s;
      &.active {
        transform: rotateX(90deg);
      }
      @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        left: 0;
        flex-direction: column;
        height: auto;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 0;
        background: #fffffffa;
        width: 100%;
        margin-top: 0;
        gap: 20px;
        border-bottom: 1px solid var(--gray-color);
        border-top: 1px solid var(--gray-color);
        backdrop-filter: blur(2px);
        box-sizing: border-box;
        transform-origin: 0% 0%;
        transition: all 0.5s cubic-bezier(0.3, 1.54, 0.8, 0.85);
        &.active {
          transform: rotate(90deg);
        }
        a {
          font-size: 18px !important;
        }
      }
    }
    .burger {
      cursor: pointer;
      span {
        display: block;
        width: 40px;
        height: 2px;
        margin: 10px auto;
        background-color: var(--main-color);
        transition: all 0.7s;
      }
      span:first-child {
        transform: translateY(6px) rotate(45deg);
      }
      span:last-child {
        transform: translateY(-6px) rotate(-45deg);
      }
      &.active {
        span:first-child {
          transform: translateY(0) rotate(0);
        }
        span:last-child {
          transform: translateY(0) rotate(0);
        }
      }
    }
  }
`;
