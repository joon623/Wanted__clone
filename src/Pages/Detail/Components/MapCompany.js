import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function MapCompany({ detailList }) {
  const [data, setData] = useState([]);
  const [items, setItems] = useState(8);
  const [preItems, setPreItems] = useState(0);

  useEffect(() => {
    getData();
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [items]);

  const getData = async () => {
    const res = await fetch('/Data/Detail/productList.json');
    const result = await res.json();
    const result2 = result.productList.slice(preItems, items);
    setData([...data, ...result2]);
  };

  const infiniteScroll = () => {
    const { documentElement, body } = document;
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );

    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPreItems(items);
      setItems(items + 10);
      getData();
    }
  };

  return (
    <>
      <FullContainer>
        <SpanContainer>
          <div>이 포지션을 찾고 계셨나요?</div>
        </SpanContainer>
        <CompanyContainer detailList={detailList}>
          {detailList.recommend_recruit?.map((company, idx) => (
            <CompanyWrapper key={idx}>
              <CompanyImage src={company.recommend_thumbnail}></CompanyImage>
              <CompanyInfo>
                <CompanyName>{company.recommend_title}</CompanyName>
                <span>{company.recommend_company}</span>
                <p>{company.recommend_location}·한국</p>
                <Compensation>채용보상금 1,000,000만원</Compensation>
              </CompanyInfo>
            </CompanyWrapper>
          ))}
        </CompanyContainer>
      </FullContainer>
    </>
  );
}
export default MapCompany;
const FullContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1060px;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    width: 90%;

    div:nth-child(2) {
      div {
        width: 48%;
        margin-bottom: 20px;
      }
    }
  }
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 15px;
  div {
    line-height: 1.4;
    font-size: 26px;
    font-weight: 700;
    color: #333333;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  :nth-of-type(4) {
    position: relative;
    right: 0;
  }
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
