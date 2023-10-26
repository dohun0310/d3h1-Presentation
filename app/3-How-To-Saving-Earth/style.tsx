"use client"

import styled from "@emotion/styled";

const StyledContent = styled.div (({ theme }) => `
  width: 100%;
  height: 100%;
  color: ${theme.colors.black(100)};
  background-color: #FFFAEF;

  .first {
    top: 0;
    width: 100%;
    height: min(90vh, 900px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #FDF7E9;

    .first-container {
      width: 100%;
      max-width: 1000px;
      height: 90vh;
      max-height: 780px;
      display: grid;
      grid-template-columns: 1fr 3fr;
      padding: 0 30px;

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        & h1 {
          margin: 0;
          font-size: 55px;
        }

        & h1:nth-of-type(2) {
          margin-left: auto;
        }
      }

      .icon {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 75%;
        margin: auto 0px;
        z-index: 99;

        & div {
          display: flex;
          flex-direction: column;
          position: absolute;
        }

        & div:nth-of-type(1) {
          left: 35%;
          top: 67%;
          align-items: center;
          justify-content: center;
          will-change: transform;
          opacity: 1;
          transform: none;
        }

        & div:nth-of-type(2) {
          left: 71%;
          top: 10%;
          align-items: center;
          justify-content: center;
          will-change: transform;
          opacity: 1;
          transform: none;
        }

        & div:nth-of-type(3) {
          left: 25%;
          top: 20%;
          align-items: center;
          justify-content: center;
          will-change: transform;
          opacity: 1;
          transform: none;
        }

        & div:nth-of-type(4) {
          left: 66%;
          top: 40%;
          align-items: center;
          justify-content: center;
          will-change: transform;
          opacity: 1;
          transform: none;
        }

        & div:nth-of-type(5) {
          left: 1%;
          top: 1%;
          align-items: center;
          justify-content: center;
          will-change: transform;
          opacity: 1;
          transform: none;
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
    background-color: #FFFAEF;

    & .second-container {
      width: 100%;
      max-width: 1000px;
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
          font-size: 20px;
          text-wrap: pretty;
        }
      }

      & .icon {
        position: absolute;
        top: 70%;
        left: 78%;
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
    background-color: #FFFAEF;

    .third-container {
      width: 100%;
      max-width: 1000px;
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
          font-size: 20px;
          text-wrap: pretty;
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
    background-color: #FFFAEF;

    & .fourth-container {
      width: 100%;
      max-width: 1000px;
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
          font-size: 20px;
          text-wrap: pretty;
        }
      }

      & .icon {
        position: absolute;
        top: 70%;
        left: 78%;
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
    background-color: #FFFAEF;

    & .fifth-container {
      width: 100%;
      max-width: 1000px;
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
          font-size: 20px;
          text-wrap: pretty;
        }
      }

      & .icon {
        position: absolute;
        top: 70%;
        left: 78%;
      }
    }
  }
`)

export default StyledContent