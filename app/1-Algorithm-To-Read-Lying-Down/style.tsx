"use client"

import styled from "@emotion/styled";

const StyledHome = styled.main (({ theme }) => `
  height: 100%;
  color: ${theme.colors.white(100)}; 
  background-color: ${theme.colors.purple(100)};

  article {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.purple(100)};
    display: flex;
    flex-direction: column;
    padding: 0 30px 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  p {
    font-size: 24px;
  }

  .first {
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .second {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .third {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fourth {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .fifth {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`)

export default StyledHome