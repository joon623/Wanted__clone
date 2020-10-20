import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config';

function MapCompany() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState(8);
  const [preItems, setPreItems] = useState(0);

  useEffect(() => {
    getData();
    window.addEventListener('scroll', infiniteScroll);
    return () => window.removeEventListener('scroll', infiniteScroll);
  }, [items]);

  const getData = async () => {
    const res = await fetch(`${API}/recruit/salary`);
    const result = await res.json();
    const result2 = result.recruit_list.slice(preItems, items);
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

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(`${API}/recruit/salary`)
        .then((response) => response.json())
        .then((res) => {
          setSelected(res.recruit_list);
        });
    }, 1500);
  }, []);
  if (selected.length === 0)
    return (
      <LoadingImage>
        <img
          src='https://media1.tenor.com/images/9596d3118ddd5c600806a44da90c4863/tenor.gif?itemid=16014629'
          alt='Cuted Cat'
        />
      </LoadingImage>
    );

  return (
    <>
      <FullContainer>
        <SpanContainer>
          <div>연봉 업그레이드 포지션</div>
          <span>더 보기</span>
        </SpanContainer>{' '}
        <CompanyContainer>
          {data?.map((company, idx) => (
            <CompanyWrapper key={idx}>
              <CompanyImage src={company.thumbnail_url}></CompanyImage>
              <CompanyInfo>
                <CompanyName>{company.title}</CompanyName>
                <span>{company.company_name}</span>
                <p>{company.location}·한국</p>
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

const LoadingImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: auto;
  }
`;

const FullContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1060px;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
`;

const SpanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 15px;
  div {
    line-height: 1.4;
    font-size: 26px;
    font-weight: 700;
    color: #333333;
  }
  span {
    cursor: pointer;
    color: #b5b5b5;
    font-size: 16px;
    font-weight: 600;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CompanyWrapper = styled.div`
  width: 23%;
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
