import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RecruitList from './Components/RecruitList';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';

function Search() {
  const UserInputValue = useSelector((store) => store.userSearchInput);
  const searchedData = useSelector((store) => store.searchedDataReducer);
  return (
    <>
      <BackgroundDiv />
      <Nav />
      <SearchContainer>
        <InputValue>
          {UserInputValue ? UserInputValue : '검색어를 입력하세요'}
        </InputValue>
      </SearchContainer>
      <SearchedCompanyInformation>
        <RecruitList />
        <SearchedCompanyContent>
          <SearchedCompanyLength>
            <span>회원님이 좋아할 회사</span> <span>6</span>
          </SearchedCompanyLength>
          <CompanyCardContainer>
            {searchedData?.map((el) => (
              <CompanyCard key={el.id}>
                <ImgWrapper>
                  <img src={el.imgSrc} alt='CompanyImg' />
                  <TitleWrapper>
                    <CompanyName>{el.name}</CompanyName>
                    <CompanyCategory>{el.category}</CompanyCategory>
                  </TitleWrapper>
                </ImgWrapper>
                <FollowButton>팔로우</FollowButton>
              </CompanyCard>
            ))}
          </CompanyCardContainer>
        </SearchedCompanyContent>
      </SearchedCompanyInformation>
      <Footer />
    </>
  );
}

export default Search;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  margin-top: 50px;
  background: #fff;
  border-bottom: 1px solid #e1e2e3;
  z-index: 1;
`;

const InputValue = styled.button`
  font-size: 48px;
  color: #333;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
`;

const SearchedCompanyInformation = styled.div`
  width: 100vw;
  z-index: -10;
  background-color: #f8f8fa;
`;

const SearchedCompanyContent = styled.div`
  max-width: 1060px;
  margin: 60px auto 80px;

  @media (max-width: ${({ theme }) => theme.searchRecruitChangePoint}) {
    h2 {
      width: 90%;
      margin: 20px auto;
    }

    & > div {
      width: 90%;
      margin: 20px auto;

      div {
        width: 100%;
      }
    }
  }
`;

const SearchedCompanyLength = styled.h2`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 18px;
  color: #333;

  span:nth-child(2) {
    margin-left: 10px;
    font-weight: normal;
  }
`;

const BackgroundDiv = styled.div`
  position: fixed;
  background-color: #f8f8fa;
  z-index: -1;
  width: 100vw;
  height: 100%;
`;

const CompanyCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const CompanyCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(50% - 20px);
  margin: 10px 0px;
  padding: 21px 20px;
  background: #fff;
  border-radius: 2px;
  cursor: pointer;

  img {
    width: 58px;
    height: 58px;
  }
`;

const FollowButton = styled.button`
  width: 90px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #e1e2e3;
  background: #fff;
  color: #36f;
  font-size: 16px;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 5px 5px;
`;

const CompanyName = styled.h5`
  color: #333;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 13px;
`;

const CompanyCategory = styled.h6`
  color: #999;
  font-size: 14px;
  font-weight: 400;
`;
