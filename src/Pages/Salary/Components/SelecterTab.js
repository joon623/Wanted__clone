import React from 'react';
import styled from 'styled-components';

function SelecterTab({ handleOptionClick, handleYearColor, handleSalary }) {
  return (
    <>
      <Wrapper>
        <JobCategory>
          <option value=''>개발</option>
          <option value='game'>게임제작</option>
          <option value='bussiness'>경영·비지니스</option>
          <option value='cs'>고객서비스·리테일</option>
        </JobCategory>
        <JobName onChange={handleOptionClick}>
          <option value='0'>전체</option>
          <option value='1'>서버 개발자</option>
          <option value='2'>웹 개발자</option>
          <option value='3'>프론트 개발자</option>
        </JobName>
        <Career onChange={handleYearColor}>
          <option value=''>경력</option>
          <option value='0'>신입</option>
          <option value='1'>1년</option>
          <option value='2'>2년</option>
          <option value='3'>3년</option>
          <option value='4'>4년</option>
          <option value='5'>5년</option>
          <option value='6'>6년</option>
          <option value='7'>7년</option>
          <option value='8'>8년</option>
          <option value='9'>9년</option>
          <option value='10'>10년</option>
        </Career>
        <Income placeholder='연봉' onChange={handleSalary}></Income>
      </Wrapper>
    </>
  );
}

export default SelecterTab;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1060px;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
`;

const JobCategory = styled.select`
  color: #333333;
  font-size: 16px;
  padding: 13px 15px;
  border: 1px solid rgba(192, 192, 192, 0.5);
  width: 100%;
`;

const JobName = styled(JobCategory)``;

const Career = styled(JobCategory)``;

const Income = styled.input`
  background-color: white;
  outline: none;
  color: #333333;
  font-size: 16px;
  padding: 13px 15px;
  border: 1px solid rgba(192, 192, 192, 0.5);
  width: 100%;
`;
