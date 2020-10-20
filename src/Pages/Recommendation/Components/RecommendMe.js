import React from 'react';
import styled from 'styled-components';

function RecommendMe() {
  return (
    <TitleWrapper>
      <Title>
        <i class='fas fa-user-plus' />
        <span>추천 요청</span>
      </Title>
    </TitleWrapper>
  );
}

export default RecommendMe;

const TitleWrapper = styled.div`
  height: 100vh;
  margin-top: 20px;
  @media (max-width: 1199px) and (min-width: 992px) {
    width: calc(100%);
  }
`;

const Title = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: center;
  cursor: pointer;
  background: white;
  width: 25%;
  margin-bottom: 20px;
  i {
    font-size: 23px;
    color: white;
    border-radius: 9999px;
    background-color: #258bf7;
    width: 74px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 81.1719px 0px;
  }
  span {
    font-size: 16px;
    color: #258bf7;
    margin: 27px 0px 54px;
    font-weight: 500;
  }
`;
