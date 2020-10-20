import React from 'react';
import styled from 'styled-components';

function RecommendYou() {
  return (
    <>
      <Title>추천한 지인이 없습니다</Title>
    </>
  );
}

export default RecommendYou;

const Title = styled.div`
  height: 100vh;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #999999;
`;
