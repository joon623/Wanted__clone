import React, { useState } from 'react';
import styled from 'styled-components';

function ContentsMap({ FirstData }) {
  const [userClick, setUserClick] = useState(false);

  const changeColor = () => {
    setUserClick(!userClick);
  };
  return (
    <FirstRecommend userClick={userClick}>
      <img src={FirstData.pic} alt='logo'></img>
      <div>{FirstData.name}</div>
      <span>첫 추천 해주기</span>
      <button onClick={() => changeColor()}>추천</button>
    </FirstRecommend>
  );
}

export default ContentsMap;

const FirstRecommend = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 250px;
  border-radius: 3px;
  border: solid 1px #e0e0e0;
  text-align: center;
  background: white;
  width: 23.5%;
  margin-bottom: 20px;
  margin-right: 20px;
  img {
    border-radius: 9999px;
    margin-top: 30px;
    width: 66px;
    height: 66px;
  }
  div {
    font-size: 18px;
    color: #333333;
    margin: 12px 20px 10px;
    font-weight: bold;
  }
  span {
    font-size: 13px;
    color: #999999;
    margin: 0px 11.8281px 24px 11.8125px;
  }
  button {
    background-color: ${({ userClick }) =>
      userClick ? 'lightgray' : '#258bf7;'};
    margin: 0px 63.3281px 30px;
    border-radius: 20px;
    width: 109.69px;
    height: 36px;
    cursor: pointer;
    color: ${(props) => (props.userClick ? 'black' : 'white')};
  }
`;
