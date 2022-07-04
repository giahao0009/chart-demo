import React from "react";
import styled from "styled-components";

const TitleH1 = styled.h1`
  text-align: center;
  font-weight: 400;
  color: #e87722;
  font-size: 26px;
  margin-bottom: 18px;
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #0a3b32;
  width: 819px;
  display: inline-flex;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    width: 335px;
    height: 74px;
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

function Title() {
  return (
    <Wrapper>
      <TitleH1>Tra cứu giá đơn vị</TitleH1>
      <Desc>
        Nhằm cung cấp cho bạn đầy đủ thông tin về giá trị quỹ trong cả hiện tại
        và quá khứ, bạn có thể tùy chọn thời điểm tra cứu theo khung thời gian
        bạn muốn
      </Desc>
    </Wrapper>
  );
}

export default Title;
