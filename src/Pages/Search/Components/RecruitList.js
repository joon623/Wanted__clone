import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function RecruitList() {
  const recruitData = useSelector((store) => store.recruitListReducer);

  return (
    <RecruitListContainer>
      <RecruitTitle>
        <span>포지션</span> <span>{recruitData.length}</span>
      </RecruitTitle>
      <SearchedRecruitLists>
        {recruitData.map((el) => (
          <SearchedRecruitList key={el.id}>
            <ListHeader>
              <img src={el.thumbnail_url} alt="recruitImg" />
            </ListHeader>
            <ListRecruitTitle>{el.title}</ListRecruitTitle>
            <ListRecruitCompanyName>{el.company_name}</ListRecruitCompanyName>
            <ListLocation>{el.location} . 한국</ListLocation>
            <RecruitmentCompensation>
              채용보상금 1,000,000원
            </RecruitmentCompensation>
          </SearchedRecruitList>
        ))}
      </SearchedRecruitLists>
    </RecruitListContainer>
  );
}

export default RecruitList;

const RecruitListContainer = styled.div`
  max-width: 1060px;
  margin: 60px auto 80px;

  @media (max-width: ${({ theme }) => theme.searchRecruitChangePoint}) {
    h2 {
      width: 90%;
      margin: 20px auto;
    }

    ul {
      width: 90%;
      margin: 20px auto;

      li {
        width: calc(50% - 20px);
      }
    }
  }
`;

const RecruitTitle = styled.h2`
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

const SearchedRecruitLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  li:nth-of-type(4n) {
    margin: 0;
    position: relative;
    left: 9px;
  }
`;

const SearchedRecruitList = styled.li`
  width: calc(25% - 10px);
  margin-right: 10px;
  text-align: left;
  margin-bottom: 50px;

  header {
    width: 100%;
    margin-bottom: 10px;

    img {
      width: 100%;
      max-height: 170px;
    }
  }

  & > div {
    margin-bottom: 10px;
  }
`;

const ListHeader = styled.header`
  img {
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

const ListRecruitTitle = styled.div`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const ListRecruitCompanyName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const ListLocation = styled.div`
  font-weight: 400;
  margin-top: 6px;
  color: #999;
`;

const RecruitmentCompensation = styled.div`
  margin-top: 6px;
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;
