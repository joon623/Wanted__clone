import React from "react";
import styled from "styled-components";

function Tag() {
  return (
    <Container>
      <span className="tag">태그</span>
      <span className="grayColor">딱 맞는 기업찾기</span>
      <i className="fas fa-angle-down"></i>
    </Container>
  );
}

export default Tag;

const Container = styled.button`
  position: relative;
  width: 197.78px;
  height: 40px;
  padding-left: 15px;
  padding-right: 39px;
  border: 1px solid #ececec;
  border-radius: 5px;
  cursor: pointer;

  .tag {
    margin-right: 8px;
    font-size: 14px;
    color: #333333;
  }

  .grayColor {
    color: #999999;
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
