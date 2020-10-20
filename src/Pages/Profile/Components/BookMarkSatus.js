import React from 'react';
import styled from 'styled-components';

function BookMarkSatus({ likeData }) {
  return (
    <FullContainer>
      <CompanyContainer>
        {likeData?.map((company, idx) => (
          <CompanyWrapper key={idx}>
            <CompanyImage src={company.thumbnail}></CompanyImage>
            <CompanyInfo>
              <CompanyName>{company.company_name}</CompanyName>
              <span>{company.title}</span>
              <p>{company.location}·한국</p>
              <Compensation>채용보상금 1,000,000만원</Compensation>
            </CompanyInfo>
          </CompanyWrapper>
        ))}
      </CompanyContainer>
    </FullContainer>
  );
}
export default BookMarkSatus;

const FullContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1060px;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CompanyWrapper = styled.div`
  width: 25%;
  padding-right: 10px;
  cursor: pointer;
`;
const CompanyImage = styled.img`
  width: 100%;
  height: 187.5px;
  object-fit: cover;
  border-radius: 5px;
  display: flex;
`;
const CompanyInfo = styled.div`
  padding: 13px 10px;
  width: 100%;
  height: 7.5em;
  span {
    color: #333;
    font-weight: 600;
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.6;
    text-align: left;
  }
  p {
    font-weight: 400;
    margin-top: 6px;
    color: #999;
    font-size: 14px;
    line-height: 1.6;
    text-align: left;
  }
`;
const CompanyName = styled.div`
  font-size: 18px;
  color: #333333;
  font-weight: bold;
`;
const Compensation = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #666;
  margin-top: 6px;
  text-align: left;
`;
