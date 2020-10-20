import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ApplySatus from './Components/ApplyStatus';
import LikeStaus from './Components/LikeSatus';
import BookMarkStatus from './Components/BookMarkSatus';
import { API } from '../../config';

export default function Profile() {
  const [currentPage, setCurrentPage] = useState(0);

  const [likeData, setLikeData] = useState([]);

  useEffect(() => {
    const testToken = localStorage.getItem('userToken');
    fetch(`${API}/account/like`, {
      headers: {
        Authorization: testToken,
      },
    })
      .then((response) => response.json())
      .then((res) => setLikeData(res.recruit_list));
  }, []);

  const content = {
    0: <ApplySatus />,
    1: <LikeStaus likeData={likeData} />,
    2: <BookMarkStatus likeData={likeData} />,
  };

  return (
    <>
      <backColor></backColor>
      <Container>
        <Nav>
          <NavBox color={currentPage === 0} onClick={() => setCurrentPage(0)}>
            지원현황
          </NavBox>
          <NavBox color={currentPage === 1} onClick={() => setCurrentPage(1)}>
            좋아요
          </NavBox>
          <NavBox color={currentPage === 2} onClick={() => setCurrentPage(2)}>
            북마크
          </NavBox>
        </Nav>
        <div>{content[currentPage]}</div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 30px;
  margin: 0 auto;
  background-color: #f8f8fa;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 40px 0;
  padding-right: 275px;
  padding-left: 74px;
`;

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 17px;
  color: #999;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  padding: 0 30px;
  height: 40px;
  background-color: ${(props) => (props.color ? 'white' : '')};
  border-radius: 50px;
  transition: 0.4s color, 0.4s background-color;
  cursor: pointer;
  :hover {
    background-color: #0064ff;
    color: white;
  }
`;
