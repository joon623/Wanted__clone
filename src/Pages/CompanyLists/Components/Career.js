import React from "react";
import styled from "styled-components";

function Career() {
  return (
    <Container>
      <span className="career">경력</span>
      <span className="Years">전체</span>
      <i className="fas fa-angle-down"></i>
    </Container>
  );
}

export default Career;

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

  .career {
    margin-right: 8px;
    font-size: 14px;
    color: #333333;
  }

  .Years {
    color: #3366ff;
    font-weight: bolder;
  }

  i {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 3px;
  }

  :hover {
    background-color: #f8f9fa;
  }
`;
