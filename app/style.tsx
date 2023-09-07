"use client"

import styled from "@emotion/styled";

const StyledHome = styled.main (({ theme }) => `
  margin: 0 auto;
  max-width: 972px;
  padding-top: 112px;
  
  .page-container {
    max-width: 972px;
    padding-top: 112px;
    width: 100%;
    min-height: 100%;
    height: 100%;
    padding: 0 30px;

    & .contents-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 20px;

      @media (max-width: 684px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }

      & article {
        background-color: ${theme.colors.text(3)};
        margin: 16px 0px;
        padding: 16px;
        border-radius: 8px;

        & a {
          text-decoration: none;
          color: inherit;
  
          &:hover {
            & .resource-title {
              text-decoration: underline;
            }
          }
        }
  
        & .resource-title {
          font-size: 18px;
          font-weight: 26px;
          margin-bottom: 4px;
        }
      }
    }
  }
`)

export default StyledHome