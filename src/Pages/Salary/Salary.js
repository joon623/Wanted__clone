import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataChart from './Components/DataChart';
import SelecterTab from './Components/SelecterTab';
import MapCompany from './Components/MapCompany';
import { API } from '../../config';

function Salary() {
  const [currentJob, setCurrentJob] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [currentMoney, setCurrentMoney] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [currentLabel, setCurrentLabel] = useState('');
  const [currentCalcSalary, setCurrentCalcSalary] = useState(0);

  const job = {
    0: '',
    1: '서버 개발자',
    2: '웹 개발자',
    3: '프론트 개발자',
  };

  const handleSalary = (e) => {
    const salaryInput = e.target.value;
    calculateSalary(salaryInput);
  };

  const handleYearColor = (e) => {
    setCurrentColor(e.target.value);
  };

  const handleOptionClick = (e) => {
    setCurrentJob(e.target.value);
  };
  useEffect(() => {
    chartNew();
  }, [currentColor]);

  useEffect(() => {
    jobChange();
  }, [currentJob]);

  useEffect(
    () => {
      averageSalary();
      calculateSalary();
    },
    [currentColor],
    [currentJob]
  );

  const calculateSalary = (salaryValue) => {
    fetch(`${API}/recruit/salary`)
      .then((res) => res.json())
      .then((res) => {
        const xValue =
          res.series[Number(currentJob)].data[Number(currentColor)].salary;
        const calcEquation =
          salaryValue < xValue ? xValue - salaryValue : salaryValue - xValue;
        const calcValue = (100 * calcEquation) / xValue;
        setCurrentCalcSalary(calcValue);
      });
  };

  const jobChange = () => {
    if (Number(currentJob) === 0) {
      setCurrentStatus(job[Number(currentJob)]);
    }
    if (Number(currentJob) === 1) {
      setCurrentStatus(job[Number(currentJob)]);
    }
    if (Number(currentJob) === 2) {
      setCurrentStatus(job[Number(currentJob)]);
    }
    if (Number(currentJob) === 3) {
      setCurrentStatus(job[Number(currentJob)]);
    }
  };

  const averageSalary = () => {
    fetch(`http://localhost:3000/Data/Salary/CurrentLabel.json`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentLabel(
          res.label[Number(currentJob)].data[Number(currentColor)]
        );
      });
  };

  const chartNew = () => {
    fetch(`${API}/recruit/salary`)
      .then((res) => res.json())
      .then((res) => {
        setCurrentMoney(
          res.series[Number(currentJob)].data[Number(currentColor)].salary
        );
      });
  };

  return (
    <>
      <Wrapper>
        <BackgroundColor>
          <ChartContainer>
            <DataChart currentJob={currentJob} currentColor={currentColor} />
            <InfoContainer>
              <TwoButtons>
                <JobGroupBtn>개발</JobGroupBtn>
                <JobBtn handleOptionClick={handleOptionClick}>
                  {currentStatus}
                </JobBtn>
              </TwoButtons>
              <CalcSalary>
                <span handleOptionClick={handleOptionClick}>
                  {currentLabel} 개발자 예상 연봉
                </span>
                <p handleYearColor={handleYearColor}> {currentMoney} 만원</p>
                <div
                  onKeyUp={(e) => {
                    handleSalary(e);
                  }}
                >
                  * 예상 연봉 대비 {Math.round(currentCalcSalary)} %
                </div>
              </CalcSalary>
            </InfoContainer>
          </ChartContainer>
          <SelecterTab
            setCurrentJob={setCurrentJob}
            handleOptionClick={handleOptionClick}
            handleYearColor={handleYearColor}
            handleSalary={handleSalary}
          />
        </BackgroundColor>
      </Wrapper>
      <MapCompany />
    </>
  );
}

export default Salary;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-color: #22bd79;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ChartContainer = styled.div`
  margin: 20px auto 30px;
  display: flex;
  position: relative;
  max-width: 1060px;
  @media (min-width: 1200px) {
    width: 87.72%;
  }
`;

const BackgroundColor = styled.body`
  @media (min-width: 768px) {
    max-height: 400px;
  }
  position: relative;
  min-height: 350px;
  padding-top: 40px;
`;

const InfoContainer = styled.div`
  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-bottom: 20px;
    width: calc(25%-25px);
  }
`;

const TwoButtons = styled.div`
  display: flex;
`;

const JobGroupBtn = styled.button`
  padding: 8px 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  outline: none;
  color: #22bd79;
  background-color: #ffffff;
  cursor: pointer;
`;

const JobBtn = styled(JobGroupBtn)``;

const CalcSalary = styled.div`
  span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    white-space: pre-wrap;
  }
  p {
    line-height: 1.4;
    color: #ffffff;
    font-size: 40px;
    font-weight: 700;
  }
  div {
    line-height: 1.4;
    color: red;
    font-size: 15px;
    font-weight: 700;
  }
`;
