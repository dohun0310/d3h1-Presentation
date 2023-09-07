import StyledHome from "./style";

import { Header, PageList } from "@/components";

const Home = () => {

  return (
    <StyledHome>
      <Header />
      <div className="page-container">
        <h1 className="page-title">발표 자료 목록</h1>
        <PageList />
      </div>
    </StyledHome>
  );
};

export default Home;