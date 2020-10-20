import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { companyAddress } from "../../../config";
import { useHistory } from "react-router-dom";

function RecruitCompanyLists({ filterValue, locationFilterAddress }) {
  const [changeValue, setChangeValue] = useState(false);
  const [recruitCompanydata, setRecruitCompanydata] = useState([]);
  const [items, setItems] = useState(8);
  const [preItems, setPreItems] = useState(0);

  useEffect(() => {
    fetch(locationFilterAddress)
      .then((response) => response.json())
      .then((response) => setRecruitCompanydata(response.data.recruit_list));
  }, [locationFilterAddress]);

  const history = useHistory();

  useEffect(() => {
    fetch(`${companyAddress}`)
      .then((response) => response.json())
      .then((response) => setRecruitCompanydata(response.data.recruit_list));
  }, []);

  const sortFliter = () => {
    if (filterValue === "response") {
      setRecruitCompanydata(
        recruitCompanydata.sort(function (a, b) {
          return b.response_rate - a.response_rate;
        })
      );
      setChangeValue(true);
    } else {
      setRecruitCompanydata(
        recruitCompanydata.sort(function (a, b) {
          return a.id - b.id;
        })
      );
      setChangeValue(false);
    }
  };

  useEffect(() => {
    sortFliter();
  }, [filterValue]);

  return (
    <Container>
      {recruitCompanydata.map((el) => (
        <CompanyListItem
          key={el.id}
          onClick={() => history.push(`/Detail/${el.id}`)}
        >
          <ImgContainer>
            <Img src={el.thumbnail_url} alt="회사 이미지" />
          </ImgContainer>
          <ContentBox>
            <Title>{el.title}</Title>
            <CompanyName>{el.company_name}</CompanyName>
            <ResponseRate percent={el.response_rate}>
              응답률 매우 높음
            </ResponseRate>
            <Location>
              <City>{el.location}</City>
              <Area>한국</Area>
            </Location>
            <Reward>채용보상금 1,000,000원</Reward>
          </ContentBox>
        </CompanyListItem>
      ))}
    </Container>
  );
}

export default RecruitCompanyLists;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 50px;
`;

const CompanyListItem = styled.div`
  width: 250px;
  height: 355px;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 250px;
  height: 187.5px;
`;

const Img = styled.img`
  position: absolute;
  width: 250px;
  height: 187.5px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid #5f5f5f;
`;

const ContentBox = styled.div`
  width: 250px;
  height: 148px;
  padding: 14px 10px;
`;

const Title = styled.div`
  width: 230px;
  height: auto;
  color: #333333;
  line-height: 1.3;
  font-size: 18px;
  font-weight: bolder;
`;

const CompanyName = styled.div`
  width: 230px;
  height: 22px;
  margin-top: 10px;
  color: #333333;
  font-size: 15px;
  font-weight: bolder;
`;

const ResponseRate = styled.div`
  width: 100px;
  height: 19px;
  margin-top: 2px;
  margin-bottom: 5px;
  padding: 2px 6px;
  color: #00aead;
  font-size: 11px;
  font-weight: bolder;
  border: 1px solid #00aead;
  border-radius: 2px;
  display: ${({ percent }) => (percent >= 95 ? "block" : "none")};
`;

const Location = styled.div`
  position: relative;
  width: 230px;
  height: 22px;
  padding-top: 1px;
`;

const City = styled.span`
  color: #999999;
  font-size: 12px;
`;

const Area = styled(City.withComponent("span"))`
  :before {
    content: "・";
  }
`;

const Reward = styled.div`
  width: 230px;
  height: 18px;
  margin-top: 6px;
  color: #5f5f5f;
  font-size: 12px;
`;
