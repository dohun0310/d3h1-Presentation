"use client"

import styled from "@emotion/styled";
import Link from "next/link";

const StyledPageList = styled.div(({ theme }) => `
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
        & .page-title {
          text-decoration: underline;
        }
      }
    }

    & .page-title {
      font-size: 18px;
      font-weight: 26px;
      margin-bottom: 4px;
    }

    & .page-description {
      font-size: 14px;
      line-height: 20px;
      color: ${theme.colors.text(60)};
    }
  }

`)

const PageList = () => {
  const data = require("/pages.json");

  return (
    <StyledPageList>
      {data.map((page: any) => (
        <article key={page.id}>
          <Link href={page.path}>
            <h1 className="page-title">{page.title}</h1>
            <p className="page-description">{page.description}</p>
          </Link>
        </article>
      ))}
    </StyledPageList>
  )
};

export default PageList;
