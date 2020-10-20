import React from "react";
import styled from "styled-components";

function Area({ setOpenModal, locationTitle }) {
  return (
    <Container onClick={() => setOpenModal(true)}>
      <span className="area">지역</span>
      <span className="location">{locationTitle}</span>
      <i className="fas fa-angle-down"></i>
      <div className="number">1</div>
    </Container>
  );
}

export default Area;

const Container = styled.button`
  position: relative;
  width: 120px;
  height: 40px;
  padding-left: 15px;
  padding-right: 39px;
  border: 1px solid #ececec;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  .area {
    margin-right: 8px;
    font-size: 14px;
    color: #333333;
  }

  .location {
    color: #3366ff;
    font-weight: bolder;
  }

  i {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 3px;
  }

  .number {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    background-color: #3366ff;
    padding-top: 3px;
    padding-right: 1px;
    margin-left: 7px;
  }

  :hover {
    background-color: #f8f9fa;
  }
`;
