import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Title from "./components/Title";
import SearchBox from "./components/SearchBox";
import Chart from "./components/Chart";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 77px 0 71px 0;

  @media (max-width: 767px) {
    padding: 63px 20px;
  }
`;

const ChartWrapper = styled.div`
  min-width: 400px;
  min-height: 530px;
  background-color: #dbdfe1;
  border-radius: 4px;
  padding: 40px 40px 35px 40px;

  @media (max-width: 767px) {
    min-width: 400px;
    background-color: #fff;
    padding: 0;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Title />
        <ChartWrapper>
          <SearchBox />
          <Chart />
        </ChartWrapper>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
