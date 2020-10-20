import React from 'react';
import styled from 'styled-components';

const DetailTemplateBlock = styled.div`
  padding-top: 20px;
  margin-right: 20px;
`;

function DetailTemplate({ children }) {
  return <DetailTemplateBlock>{children}</DetailTemplateBlock>;
}

export default DetailTemplate;
