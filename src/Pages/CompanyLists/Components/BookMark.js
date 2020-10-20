import React from "react";
import styled from "styled-components";

function BookMark() {
  return (
    <Container>
      <GotoBookMark>
        <i className="fas fa-bookmark bookMark" />
        <Text>북마크 모아보기</Text>
        <i className="fas fa-angle-right arrow" />
      </GotoBookMark>
    </Container>
  );
}

export default BookMark;

const Container = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 12px;
`;

const GotoBookMark = styled.button`
  position: relative;
  width: 140px;
  height: 24px;
  cursor: pointer;

  i {
    position: absolute;
    color: #3366ff;
    font-size: 15px;
  }

  .bookMark {
    top: 6px;
    left: 3px;
  }

  .arrow {
    top: 5px;
    right: 0px;
  }
`;

const Text = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #3366ff;
  font-weight: bolder;
`;
