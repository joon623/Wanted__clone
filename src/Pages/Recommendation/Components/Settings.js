import React from 'react';
import styled from 'styled-components';

function Settings() {
  return (
    <>
      <Title>설정이 없습니다.</Title>
    </>
  );
}

export default Settings;

const Title = styled.div`
  height: 100vh;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #999999;
`;
