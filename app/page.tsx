"use client"

import StyledHome from "./style";

import { Header } from "@/components";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <div className="contents-container">
        <h1 className="page-title">발표 자료 목록</h1>
      </div>
    </StyledHome>
  );
};

export default Home;