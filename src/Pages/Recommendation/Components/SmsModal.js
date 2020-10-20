import React from "react";
import styled, { keyframes } from "styled-components";

function SmsModal({ openModal, setOpenModal }) {
  return (
    <>
      <BackScreen
        openModal={openModal}
        onClick={() => setOpenModal(false)}
      ></BackScreen>
      <ReferModal openModal={openModal}>
        <CloseBar>
          <CloseButton
            className="fas fa-times"
            onClick={() => setOpenModal(false)}
          />
        </CloseBar>
        <InfoContents>
          <InfoWrapper>
            <ReferText>
              아직 Cuted 회원이 아닌 <br />
              지인을 SMS로 추천합니다.
            </ReferText>
            <NameInput type="text" placeholder="지인의 이름" />
            <CountryNumber>
              <option value="">+82(South Korea)</option>
              <option value="japan">+81(Japan)</option>
              <option value="canada">+1(Canada)</option>
              <option value="usa">+1(United States)</option>
              <option value="china">+86(China)</option>
            </CountryNumber>
            <PhoneInput type="text" placeholder="지인의 전화번호" />
            <RelationshipSelect>
              <option value="">추천하실 분과의 관계를 선택해주세요.</option>
              <option value="pastCoWorker">(전)직장동료</option>
              <option value="coWorker">가까운 회사의 직원</option>
              <option value="friend">친한친구</option>
              <option value="mentor">멘토/멘티</option>
            </RelationshipSelect>
          </InfoWrapper>
          <ButtonWrapper>
            <ReferButton type="submit">추천하기</ReferButton>
          </ButtonWrapper>
        </InfoContents>
      </ReferModal>
    </>
  );
}

export default SmsModal;

const dropDown = keyframes`
from{
  transform: translate(0px, -100px);
}

to {
  transform: translate(0px, 0px);
}
`;

const BackScreen = styled.div`
  display: ${(props) => (props.openModal ? "block" : "none")};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;

const ReferModal = styled.div`
  display: ${(props) => (props.openModal ? "block" : "none")};
  overflow: auto;
  overflow-x: hidden;
  width: 500px;
  border-radius: 5px;
  position: absolute;
  z-index: 3;
  background-color: #ffffff;
  top: 30%;
  left: 30%;
  opacity: 1;
  animation: ${dropDown} 0.5s 0s;
  animation-fill-mode: ${dropDown}both;
`;

const CloseBar = styled.div`
  width: 100%;
  padding: 15px 20px;
  position: relative;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: right;
  min-height: 52px;
`;

const CloseButton = styled.button`
  cursor: pointer;
`;

const InfoContents = styled.div`
  position: relative;
  text-align: center;
`;

const InfoWrapper = styled.div`
  position: relative;
  padding: 20px;
`;

const ReferText = styled.p`
  margin-bottom: 30px;
  min-height: 24px;
  font-size: 24px;
  line-height: 1.5;
  color: #333;
`;

const NameInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 0 20px;
  appearance: none;
  border-radius: 3px;
  background-color: #f3f3f3;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #333;
`;

const CountryNumber = styled.select`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  padding: 0 20px;
  border-radius: 3px;
  background-color: #f3f3f3;
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: #333;
`;

const PhoneInput = styled(NameInput)``;

const RelationshipSelect = styled(CountryNumber)``;

const ButtonWrapper = styled.div`
  position: relative;
  padding: 20px;
  min-height: 50px;
  border-top: 1px solid #eeeeee;
`;

const ReferButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: white;
  background-color: #cbcbcb;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  cursor: pointer;
`;
