import React from "react";
import styled from "styled-components";
import { BsFillCalendar2DateFill, BsBarChartFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: #ffffff;
  border-radius: 4px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 24px;
    width: 100%;
  }
`;

const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 14px;
  }
`;

const SelectInput = styled.select`
  color: #e87722;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 110px 10px 20px;
  border: 1px solid #dbdfe1;
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus {
    outline: none;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const InputWrapper = styled.span`
  padding: 10px 20px;
  margin-left: 24px;
  background-color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dbdfe1;
  border-radius: 4px;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 14px;
  }
`;

const InputDate = styled.input`
  font-size: 16px;
  font-weight: 400;
  height: 24px;
  line-height: 24px;
  color: #e87722;
  border: none;
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonSearch = styled.button`
  color: #ffffff;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  background-color: #e87722;
  padding: 10px 35px;
  border: none;
  border-radius: 4px;
  margin-left: 24px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ControlWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 27px;
`;

function SearchBox() {
  return (
    <Wrapper>
      <SearchWrapper>
        <SelectWrapper>
          <SelectInput>
            <option>Tất cả các quỹ</option>
            <option>Quý 1</option>
            <option>Quý 2</option>
            <option>Quý 3</option>
            <option>Quý 4</option>
          </SelectInput>
          <MdKeyboardArrowDown
            style={{
              position: "absolute",
              top: "13px",
              fontSize: "22px",
              right: "25.5px",
            }}
          />
        </SelectWrapper>

        <InputWrapper>
          <InputDate type="date" value="2020-07-01" />
          <InputDate type="date" value="2020-08-10" />
          <BsFillCalendar2DateFill />
        </InputWrapper>
        <ButtonSearch>Tra cứu</ButtonSearch>
      </SearchWrapper>
      <ControlWrapper>
        <BsBarChartFill style={{ color: "#E87722", marginRight: "28.3px" }} />
        <FaClipboardList />
      </ControlWrapper>
    </Wrapper>
  );
}

export default SearchBox;
