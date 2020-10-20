import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ActiveRecruitment() {
  const [companyData, setCompanyData] = useState([]);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    fetch(
      "http://localhost:3000/data/CompanyLists/ActiveRecruitmentCompanyData.json"
    )
      .then((response) => response.json())
      .then((companyData) =>
        setCompanyData(companyData.ActiveRecruitmentCompanyData)
      );
  }, []);

  return (
    <Container>
      <Title>적극 채용 중인 회사</Title>
      <CompanyLists>
        {companyData.map((el) => (
          <CompanyItem
            key={el.id}
            onMouseEnter={() => setCurrent(el.id)}
            onMouseLeave={() => setCurrent("-1")}
          >
            <ImgBox>
              <Img
                src={el.img}
                alt="적극 채용 중인 회사"
                index={el.id}
                current={current}
              />
            </ImgBox>
            <Content>
              <CompanyName index={el.id} current={current}>
                {el.companyName}
              </CompanyName>
              <Position>{el.positionNum}개 포지션</Position>
            </Content>
          </CompanyItem>
        ))}
      </CompanyLists>
    </Container>
  );
}

export default ActiveRecruitment;

const Container = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 12px;
`;

const Title = styled.div`
  margin-top: 20px;
  margin-bottom: 14px;
  color: #333333;
  font-size: 21px;
  font-weight: bolder;
`;

const CompanyLists = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 271px;
  margin-top: 17px;
`;

const CompanyItem = styled.div`
  position: relative;
  width: 196px;
  height: 271px;
  border-radius: 5px;
  border: 1px solid #ececec;
  cursor: pointer;
`;

const ImgBox = styled.div`
  width: 100%;
  height: 148px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
`;

const Img = styled(ImgBox.withComponent("img"))`
  transition: ${({ current, index }) => (current === index ? "1s" : "1s")};
  transform: scale(${({ current, index }) => (current === index ? 1.1 : 1)});
`;

const Content = styled.div`
  width: 100%;
  height: 123px;
  padding-top: 34px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
`;

const CompanyName = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: ${({ current, index }) => (current === index ? "#3366FF" : "black")};
`;

const Position = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #999999;
`;
