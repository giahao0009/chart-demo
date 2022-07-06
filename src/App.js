import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Title from "./components/Title";
import SearchBox from "./components/SearchBox";
import Chart from "./components/Chart";
import FWDCircularWebBold from "./font/FWDCircularWeb-Bold.d03e103c.woff2";
import FWDCircularWebBook from "./font/FWDCircularWeb-Book.d91e43e3.woff2";
import FWDCircularWebMedium from "./font/FWDCircularWeb-Medium.b45786fe.woff2";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "FWDCirCularVietTT";
    src: url(${FWDCircularWebBook} format('woff2'));
  }

  @font-face{
    font-family: "FWDCirCularVietTT";
    src: url(${FWDCircularWebMedium} format('woff2'));
  }

  @font-face {
    font-family: "FWDCirCularVietTT";
    src: url(${FWDCircularWebBold} format('woff2'));
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'FWDCirCularVietTT', sans-serif;
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
