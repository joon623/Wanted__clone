import React, { useState } from 'react';
import styled from 'styled-components';
import Recommend from './Components/Recommend';
import RecommendMe from './Components/RecommendMe';
import RecommendYou from './Components/RecommendYou';
import Settings from './Components/Settings';

const content = {
  0: <Recommend />,
  1: <RecommendMe />,
  2: <RecommendYou />,
  3: <Settings />,
};

const Recommendation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Container>
      <AllContents>
        <NavBar>
          <Tabs>
            <FirstNavItem
              color={currentIndex === 0}
              onClick={() => setCurrentIndex(0)}
            >
              추천하기
            </FirstNavItem>
            <SecondNavItem
              color={currentIndex === 1}
              onClick={() => setCurrentIndex(1)}
            >
              내가 받은 추천
            </SecondNavItem>
            <ThirdNavItem
              color={currentIndex === 2}
              onClick={() => setCurrentIndex(2)}
            >
              내가 한 추천
            </ThirdNavItem>
            <SettingNavItem
              color={currentIndex === 3}
              onClick={() => setCurrentIndex(3)}
            >
              설정
            </SettingNavItem>
          </Tabs>
          <WantedRecommend>
            원티드 추천 소개<i className="fas fa-info-circle"></i>
          </WantedRecommend>
        </NavBar>
        <div>{content[currentIndex]}</div>
      </AllContents>
    </Container>
  );
};

export default Recommendation;

const Container = styled.body`
  background-color: #f8f8fa;
  background-size: cover;
  height: 100%;
  margin-top: 40px;
`;

const AllContents = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1060px;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Tabs = styled.ul`
  display: flex;
  margin-top: 40px;
`;

const WantedRecommend = styled.span`
  font-size: 16px;
  color: #3399ff;
  margin-top: 40px;
  font-weight: 600;
  i {
    margin-left: 8px;
  }
`;

const FirstNavItem = styled.button`
  margin-right: 40px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.color ? '#176fd8' : '#999999')};
`;

const SecondNavItem = styled.button`
  margin-right: 40px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.color ? '#176fd8' : '#999999')};
`;

const ThirdNavItem = styled.button`
  margin-right: 40px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.color ? '#176fd8' : '#999999')};
`;

const SettingNavItem = styled.button`
  margin-right: 40px;
  font-size: 18px;
  cursor: pointer;
  color: ${(props) => (props.color ? '#176fd8' : '#999999')};
`;
