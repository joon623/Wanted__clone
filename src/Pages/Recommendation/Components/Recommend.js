import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import SmsModal from './SmsModal';
import ContentsMap from './ContentsMap';

export default function Recommend() {
  useEffect(() => {
    fetch('http://localhost:3000/Data/Recommendation/FirstRecommend.json')
      .then((response) => response.json())
      .then((data) => setAllData(data.RecommendData));
  }, []);

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const setAllData = (data) => {
    setData(data);
    setFilteredData(data);
  };

  const [openModal, setOpenModal] = useState(false);

  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const HandleFilter = useCallback(() => {
    if (userInput === '') {
      setFilteredData(data);
    }
    const filterSearch = data.filter((filterData) => {
      return filterData.name.includes(userInput);
    });
    setFilteredData(filterSearch);
  }, [setFilteredData, userInput]);

  useEffect(() => {
    HandleFilter();
  }, [HandleFilter, userInput]);

  return (
    <>
      <SmsModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className='littleContainer'>
        <SearchFriend>
          <SearchButton type='submit' className='fa fa-search' />
          <SearchInput
            type='text'
            placeholder='친구 검색'
            name='search'
            value={userInput}
            onChange={handleChange}
          />
        </SearchFriend>
        <GuideBanner>
          <i className='fab fa-facebook'></i>
          <i className='fas fa-plus-circle'></i>
          <span>간단하게 네트워크 연결하고 지인들의 추천을 받아보세요.</span>
          <i className='fas fa-angle-right'></i>
        </GuideBanner>
        <ContentsWrapper>
          <SmsRecommend onClick={() => setOpenModal(true)}>
            <i className='fas fa-sms' />
            <div>SMS를 통해 추천</div>
          </SmsRecommend>
          {filteredData.map((FirstData, idx) => (
            <ContentsMap FirstData={FirstData} />
          ))}
        </ContentsWrapper>
      </div>
    </>
  );
}

const SearchFriend = styled.form`
  display: flex;
  width: 100%;
  vertical-align: middle;
  position: relative;
`;

const SearchButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 30%;
  margin-left: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 0 36px 0 46px;
  border: 0;
  border-radius: 3px;
  font-size: 15px;
  background-color: #e8e8e8;
  float: left;
`;

const GuideBanner = styled.div`
  display: flex;
  border-radius: 3px;
  background: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  cursor: pointer;
  span {
    margin: 19px 25px 19px 25px;
    font-size: 16px;
    color: #333;
  }
  i {
    color: #333;
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 1199px) and (min-width: 992px) {
    margin-bottom: 20px;
    width: calc(25%-25px);
  }
  button:nth-of-type(4n) {
    margin: 0;
  }
`;

const SmsRecommend = styled.button`
  position: relative;
  height: 250px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: center;
  cursor: pointer;
  background: white;
  width: 23.5%;
  margin-bottom: 20px;
  margin-right: 20px;
  i {
    color: #258bf7;
    font-size: 74px;
    margin: 60px auto 0;
  }
  div {
    color: #248bf7;
    font-size: 16px;
    font-weight: 500;
    margin: 27px auto 54px;
  }
`;
