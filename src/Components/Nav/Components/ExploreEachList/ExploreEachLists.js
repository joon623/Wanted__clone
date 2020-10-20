import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function ExploreEachLists({ title, subcategory }) {
  const history = useHistory();

  return (
    <ExploreEachList>
      {title?.map((el, idx) => (
        <h2
          key={idx}
          onClick={() => {
            idx === 0 && history.push('/');
          }}
        >
          {el}
          <i className="fas fa-angle-right" />
        </h2>
      ))}
      {subcategory?.map((el, idx) => (
        <h3
          key={idx}
          onClick={() => {
            idx === 1 && history.push('/');
          }}
        >
          {el}
        </h3>
      ))}
    </ExploreEachList>
  );
}

const ExploreEachList = styled.div`
  box-sizing: border-box;
  width: 16.666666%;
  max-height: 318px;
  padding: 40px 20px 0 0;
  text-align: left;
  cursor: pointer;

  h2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px 15px 0px;
    font-size: 17px;
    color: #333;
    font-weight: normal;

    i {
      color: #999;
    }
  }

  h3 {
    width: 100%;
    padding: 5px 13px 5px 0px;
    font-size: 13px;
    color: #999999;
  }
`;
