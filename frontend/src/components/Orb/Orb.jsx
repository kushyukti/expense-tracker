import React from "react";
import { useWindowSize } from "../../utils/useWindow";
import styled, { keyframes } from "styled-components";

const orb = () => {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(${width / 1.2}px, ${height / 2}px);
  }
  100% {
    transform: translate(0, 0);
  }
  `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-top: -37vh;
    margin-left: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveOrb} 2s cubic-bezier(0.39, 0.575, 0.565, 1) infinite both;
  `;
  return (
    //  <div className="orb__container">Orb</div>;
    <OrbStyled></OrbStyled>
  );
};

export default orb;
