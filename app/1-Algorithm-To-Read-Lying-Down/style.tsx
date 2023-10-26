"use client"

import styled from "@emotion/styled";

const StyledContent = styled.div (({ theme }) => `
  width: 100%  
  height: 100%;
  color: ${theme.colors.white(100)}; 
  background-color: ${theme.colors.purple(100)};

  article {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px 0;
    box-sizing: border-box;

    & h1 {
      font-size: 40px;
      font-weight: bold;
    }
  
    & p {
      font-size: 24px;
    }
  }

  .first {
    flex-direction: row;
    gap: 50px;
  }

  .fourth {
    gap: 10px;
  }
`)

export default StyledContent