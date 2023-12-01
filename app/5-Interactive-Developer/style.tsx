"use client"

import styled from "@emotion/styled";

const StyledContent = styled.div(({ theme }) => `
  width: 100%;
  height: 100%;
  color: ${theme.colors.white(100)};
  background-color: #3369A0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .first {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #3369A0;

    .first-container {
      width: 100%;
      max-width: 1000px;
      height: 90vh;
      max-height: 780px;
      padding: 0 30px;
      position: relative;

      & span {
        font-size: 80px;
        font-weight: 900;
        position: absolute;
      }

      & span:nth-of-type(1) {
        top: 7%;
        left: 3%;
        animation-delay: 0.1s;
      }

      & span:nth-of-type(2) {
        top: 23%;
        left: 7%;
        animation-delay: 0.2s;
      }

      & span:nth-of-type(3) {
        top: 64%;
        left: 28%;
        animation-delay: 0.3s;
      }

      & span:nth-of-type(4) {
        top: 3%;
        left: 16%;
        animation-delay: 0.4s;
      }

      & span:nth-of-type(5) {
        top: 27%;
        left: 56%;
        animation-delay: 0.5s;
      }

      & span:nth-of-type(6) {
        top: 65%;
        left: 79%;
        animation-delay: 0.6s;
      }

      & span:nth-of-type(7) {
        top: 76%;
        left: 72%;
        animation-delay: 0.7s;
      }

      & span:nth-of-type(8) {
        top: 31%;
        left: 15%;
        animation-delay: 0.8s;
      }

      & span:nth-of-type(9) {
        top: 4%;
        left: 83%;
        animation-delay: 0.9s;
      }

      & span:nth-of-type(10) {
        top: 13%;
        left: 46%;
        animation-delay: 1s;
      }

      & span:nth-of-type(11) {
        top: 46%;
        left: 85%;
        animation-delay: 1.1s;
      }

      & span:nth-of-type(12) {
        top: 26%;
        left: 72%;
        animation-delay: 1.2s;
      }

      & span:nth-of-type(13) {
        top: 9%;
        left: 67%;
        animation-delay: 1.3s;
      }

      & span:nth-of-type(14) {
        top: 35%;
        left: 84%;
        animation-delay: 1.4s;
      }

      & span:nth-of-type(15) {
        top: 68%;
        left: 41%;
        animation-delay: 1.5s;
      }

      & span:nth-of-type(16) {
        top: 81%;
        left: 28%;
        animation-delay: 1.6s;
      }

      & span:nth-of-type(17) {
        top: 17%;
        left: 32%;
        animation-delay: 1.7s;
      }

      & span:nth-of-type(18) {
        top: 80%;
        left: 15%;
        animation-delay: 1.8s;
      }

      & span:nth-of-type(19) {
        top: 48%;
        left: 4%;
        animation-delay: 1.9s;
      }

      & span:nth-of-type(20) {
        top: 75%;
        left: 52%;
        animation-delay: 2s;
      }

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 100;
        height: 100%;

        & h1 {
          margin: 0;
          font-size: 55px;
        }
      }
    }
  }

  .second {
    top: 90vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #4E81B5;

    & .second-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      & h1 {
        font-size: 55px;
      }

      & p {
        margin: 0;
        font-size: 25px;
      }
    }
  }

  .third {
    top: 180vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #4E81B5;

    & .third-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      & h1 {
        font-size: 55px;
      }

      & p {
        margin: 0;
        font-size: 25px;
      }
    }
  }

  .fourth {
    top: 270vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #4E81B5;

    & .fourth-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      & h1 {
        font-size: 55px;
      }

      & p {
        margin: 0;
        font-size: 25px;
      }
    }
  }
`)

export default StyledContent