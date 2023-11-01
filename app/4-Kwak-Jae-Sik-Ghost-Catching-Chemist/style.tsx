"use client"

import styled from "@emotion/styled";

const StyledContent = styled.div(({ theme }) => `
  width: 100%;
  height: 100%;
  color: ${theme.colors.white(100)};
  background-color: #8F81BE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 60px;
  }

  .first {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #8F81BE;

    .first-container {
      width: 100%;
      max-width: 1000px;
      height: 90vh;
      max-height: 780px;
      padding: 0 30px;
      position: relative;

      & svg:nth-of-type(1) {
        position: absolute;
        left: 5%;
        top: 10%;
      }

      & svg:nth-of-type(2) {
        position: absolute;
        left: 30%;
        top: 3%;
      }

      & svg:nth-of-type(3) {
        position: absolute;
        left: 78%;
        top: 17%;
        transform: translate(-50%, -50%);
      }

      & svg:nth-of-type(4) {
        position: absolute;
        top: 63%;
        left: 10%;
        transform: translate(-50%, -50%);
      }

      & svg:nth-of-type(5) {
        position: absolute;
        top: 70%;
        left: 58%;
        transform: translate(-50%, -50%);
      }

      & svg:nth-of-type(6) {
        position: absolute;
        top: 43%;
        left: 90%;
        transform: translate(-50%, -50%);
      }

      .text {
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
    background-color: #9D91C6;

    & .second-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      & .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h1 {
          font-size: 60px;
        }
      }

      & .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        & p {
          font-size: 24px;
          text-wrap: pretty;
        }

        & div {
          display: flex;
          flex-direction: row;
          justify-content: center;

          & p {
            font-weight: bold;
          }
        }
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
    background-color: #9D91C6;

    .third-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      padding: 0 30px;
  
      & .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & h1 {
          font-size: 60px;
        }

        & p {
          font-size: 24px;
          text-wrap: pretty;
          text-align: center;
        }
      }

      & .icon {
        position: absolute;
        top: 70%;
        left: 78%;
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
    background-color: #9D91C6;

    & .fourth-container {
      width: 100%;
      max-width: 1000px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0 30px;

      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .fifth {
    top: 360vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #9D91C6;

    & .fifth-container {
      width: 100%;
      max-width: 700px;
      height: 90vh;
      max-height: 780px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 30px;

      & h1 {
        font-size: 60px;
      }
    }
  }
`)

export default StyledContent