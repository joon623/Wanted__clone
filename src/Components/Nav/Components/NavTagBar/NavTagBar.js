import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NAV_TAG } from '../../Data/NAV_TAG';
import {
  UserSearchInput,
  SearchedData,
  RecruitList,
} from '../../../../Store/Actions/index';
import { API } from '../../../../config';

export default function NavTagBar({
  displayRecommend,
  handleRecommend,
  setDisplayRecommend,
}) {
  const container = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const submitValue = async (e) => {
    e.preventDefault();
    dispatch(UserSearchInput(searchValue));
    await fetch(`${API}/recruit/search?keyword=${searchValue}`)
      .then((res) => res.json())
      .then((result) => {
        dispatch(SearchedData());
        dispatch(RecruitList(result.recruit_list));
        history.push('/search');
        setDisplayRecommend(false);
      });
  };

  return (
    <TagNavigation
      displayRecommend={displayRecommend}
      onClick={(e) => {
        e.target === container.current && handleRecommend();
      }}
      ref={container}
    >
      <TagContainer>
        <TagContent>
          <SearchBar onSubmit={(e) => submitValue(e)}>
            <SubmitButton onClick={submitValue}>
              <i className="fas fa-search" />
            </SubmitButton>
            <SearchInput
              placeholder="#태그, 회사, 포지션 검색"
              onChange={handleSearchInput}
            />
          </SearchBar>
          <RecommendTag>
            <RecommendText>
              <div>추천태그로 검색해보세요</div>
              <Link to="/">
                <div>기업태그 홈</div>
              </Link>
            </RecommendText>
          </RecommendTag>
          <RecommendedTag>
            {NAV_TAG.map((el, idx) => (
              <RecommendList key={idx}>#{el}</RecommendList>
            ))}
          </RecommendedTag>
        </TagContent>
      </TagContainer>
    </TagNavigation>
  );
}

const TagNavigation = styled.div`
  display: ${({ displayRecommend }) => (displayRecommend ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 11;
`;

const TagContainer = styled.div`
  margin: 0 auto;
  padding-top: 5px;
  background-color: white;
`;

const TagContent = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  margin: 20px auto 0px;
  position: relative;
  background-color: #e8e8e8;
  border-radius: 4px;

  button {
    position: relative;
    i {
      position: absolute;
      top: -6px;
      left: 10px;
      font-size: 16px;
      color: #999;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 36px 0 46px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 300;
  color: #333;
  background-color: #e8e8e8;
  overflow: hidden;
`;

const RecommendTag = styled.div`
  margin-top: 40px;
`;

const RecommendText = styled.div`
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    display: inline-block;
    font-size: 16px;
    line-height: 1;
    font-weight: 400;
    color: #999;
  }

  a:nth-child(2) {
    div {
      font-size: 16px;
      font-weight: bold;
      color: #268bf7 !important;
    }
  }
`;

const RecommendedTag = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const RecommendList = styled.li`
  display: inline-block;
  height: 50px;
  line-height: 50px;
  margin-right: 15px;
  margin-bottom: 35px;
  padding: 0 26px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
`;
