import React from "react";
import styled from "styled-components";

function Underline({children}) {
  return <Container>{children}</Container>;
}

export default Underline;

const Container = styled.span`
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  line-height: 43px;
  position: relative;
  letter-spacing: 1px;
  background: transparent;
  text-transform: capitalize;
  position: relative;
  padding: 5px 0;
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    width: 0%;
    left: 0;
    height: 2px;
    background-color: var(--gray-color);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &:hover::before {
    width: 100%;
  }
`;
