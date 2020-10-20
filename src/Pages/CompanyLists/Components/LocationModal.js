import React, { useState, useEffect } from "react";
import styled from "styled-components";

function LocationModal({
  openModal,
  setOpenModal,
  locationId,
  setLocationId,
  detailLocationId,
  setDetailLoactionId,
  changeLocationfilter,
  setLocationTitle,
}) {
  const [locationData, setLocationData] = useState([]);
  const [locationName, setLocationName] = useState("전체");
  const [detailLocationName, setDetailLocationName] = useState("");
  const [tagInput, setTagInput] = useState(false);
  const [tag, setTag] = useState("전체");

  useEffect(() => {
    fetch("http://localhost:3000/data/CompanyLists/LocationData.json")
      .then((response) => response.json())
      .then((response) => setLocationData(response.LocationData));
  }, []);

  const handleClose = () => {
    setOpenModal(false);
    setLocationId(1);
    setDetailLoactionId(0);
  };

  const handleReset = () => {
    setLocationId(1);
    setDetailLoactionId(0);
    setLocationName("전국");
    setDetailLocationName("");
  };

  const handleSetLocation = (selectedLocationId, e) => {
    setLocationId(selectedLocationId);
    setLocationName(e.target.textContent);
  };

  const handleSetDetailLocation = (e, index) => {
    setDetailLoactionId(index);
    setDetailLocationName(e.target.textContent);
    setTagInput(true);
  };

  useEffect(() => {
    if (locationName == "전국") {
      setTagInput(true);
      setTag(`${locationName}`);
      setLocationTitle(`${locationName}`);
    }
  }, [locationName]);

  useEffect(() => {
    if (tagInput === true) {
      setTag(`${locationName} ${detailLocationName}`);
      setLocationTitle(`${locationName}`);
    }
  }, [detailLocationId]);

  return (
    <Container>
      <BackgroundModal
        openModal={openModal}
        onClick={() => setOpenModal(false)}
      />
      <Modal openModal={openModal}>
        <Header>
          <Reset onClick={handleReset}>
            <i className="fas fa-undo" />
            초기화
          </Reset>
          <Title>
            지역
            <div className="number">1</div>
          </Title>
          <Close onClick={handleClose}>
            <i className="fas fa-times" />
          </Close>
        </Header>
        <WrapFilter>
          <Location>
            <LocationTitle>지역</LocationTitle>
            <LocationFilter>
              {locationData.map((el) => (
                <LocationItem
                  key={el.id}
                  LocationName={el.Location}
                  current={locationId}
                  index={el.id}
                  onClick={(e) => handleSetLocation(el.id, e)}
                >
                  {el.Location}
                </LocationItem>
              ))}
            </LocationFilter>
          </Location>
          <DetailLocation>
            <DetailLocationTitle>상세 지역</DetailLocationTitle>
            <DetailLocationFilter>
              {locationData[locationId - 1]?.Detail_Location.map(
                (el, index) => (
                  <DetailLocationItem
                    key={index}
                    current={detailLocationId}
                    index={index}
                    onClick={(e) => handleSetDetailLocation(e, index)}
                  >
                    {el}
                  </DetailLocationItem>
                )
              )}
            </DetailLocationFilter>
          </DetailLocation>
        </WrapFilter>
        <ContentBox>
          <FilterContent>
            <Tags>
              {" "}
              <Tag>{tag}</Tag>
            </Tags>
            <p>최대 15개까지 선택 가능합니다.</p>
          </FilterContent>
        </ContentBox>
        <Button onClick={changeLocationfilter}>확인</Button>
      </Modal>
    </Container>
  );
}

export default LocationModal;

const Container = styled.div``;

const BackgroundModal = styled.div`
  display: ${({ openModal }) => (openModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;

const Modal = styled.div`
  display: ${({ openModal }) => (openModal ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 555px;
  background-color: white;
  opacity: 1;
  border-radius: 5px;
  z-index: 5;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  height: 54px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Reset = styled.button`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  height: 100%;
  font-size: 14px;
  color: #999999;
  cursor: pointer;
  i {
    margin-right: 5px;
    transform: rotate(60deg);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  color: #333333;
  text-align: center;

  .number {
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: white;
    background-color: #3366ff;
    padding-top: 1px;
    padding-right: 1px;
    margin-left: 7px;
  }
`;

const Close = styled.button`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 12px;
  font-size: 17px;
  color: #999999;
  cursor: pointer;
`;

const WrapFilter = styled.div`
  display: flex;
  padding: 20px;
  width: 500px;
  height: 276px;
`;

const FilterContent = styled.div`
  width: 460px;
  height: 135px;
`;

const Location = styled.div`
  width: 230px;
  height: 185.8px;
`;

const LocationTitle = styled.div`
  width: 230px;
  height: 22.4px;
  margin-bottom: 8px;
  color: #767676;
`;

const LocationFilter = styled.div`
  width: 230px;
  height: 200px;
  margin-bottom: 8px;
  border: 1px solid #767676;
  overflow-y: auto;
`;

const LocationItem = styled.button`
  width: 211px;
  height: 26px;
  font-weight: bolder;
  color: ${({ current, index }) => (current === index ? "blue" : "black")};
`;

const DetailLocation = styled.div`
  width: 230px;
  height: 185.8px;
`;

const DetailLocationTitle = styled.div`
  width: 230px;
  height: 22.4px;
  margin-bottom: 8px;
  color: #767676;
`;

const DetailLocationFilter = styled.div`
  width: 230px;
  height: 200px;
  margin-bottom: 8px;
  border: 1px solid #767676;
  overflow-y: auto;
`;

const DetailLocationItem = styled.button`
  width: 211px;
  height: 26px;
  font-weight: bolder;
  color: ${({ current, index }) => (current === index ? "blue" : "black")};
`;

const ContentBox = styled.div`
  width: 500px;
  height: 135px;
  padding: 0 20px 20px;
  margin-bottom: 20px;
  background-color: #f6f6f6;

  p {
    color: #a9a9a9;
    font-size: 12px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 460px;
  height: 88px;
  margin-bottom: 20px;
  padding-top: 5px;
`;

const Tag = styled.div`
  width: 100px;
  height: 30px;
  background-color: white;
  border: 1px solid blue;
  border-radius: 50px;
  margin-top: 5px;
  margin-right: 5px;
  padding-top: 6px;
  color: blue;
  text-align: center;
  font-size: 13px;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: bolder;
  color: white;
  background-color: #3366ff;
  border-radius: 50px;
  border: 1px solid gray;
  cursor: pointer;
`;
