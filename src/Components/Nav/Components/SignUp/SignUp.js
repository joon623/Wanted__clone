import React from 'react';
import styled from 'styled-components';
import { InformationLabel } from '../EmailCheck/EmailCheck';

export default function SignUp({
  agreedChecked,
  selectAllCheckedBox,
  uploadUserInfo,
  selectEssentialCheckBox,
  selectOptionalCheckBox,
  checkValidation,
  idValidation,
  phoneValidation,
  pwdValidation,
  pwdReValidation,
  SignUpValidationButton,
  existPhoneNumber,
  setSignUpModal,
}) {
  return (
    <>
      <SignUpModal>
        <SecondModalHeader>
          <strong>회원 가입</strong>
          <SecondeExitButton>
            <i
              className="fas fa-times"
              onClick={() => setSignUpModal('emailCheck')}
            />
          </SecondeExitButton>
        </SecondModalHeader>
        <SecondModalBody
          onKeyUp={() => agreedChecked.essentialChecked && checkValidation()}
        >
          <InformationLabel htmlFor="name">이름</InformationLabel>
          <UserInput
            type="text"
            placeholder="이름을 입력해 주세요."
            name="name"
            onChange={uploadUserInfo}
            valid={idValidation}
          />
          {idValidation === false && (
            <ErrorText>이름은 필수정보 입니다.</ErrorText>
          )}
          <InformationLabel htmlFor="phoneNumber">휴대폰 번호</InformationLabel>
          <UserInput
            type="text"
            placeholder="(예시) 01034567890"
            name="phone_number"
            onChange={uploadUserInfo}
            valid={phoneValidation}
          />
          {phoneValidation === false && (
            <ErrorText>올바른 연락처 형식이 아닙니다.</ErrorText>
          )}
          {existPhoneNumber && (
            <ErrorText>이미 존재하는 전화번호입니다.</ErrorText>
          )}
          <InformationLabel htmlFor="password">비밀번호</InformationLabel>
          <UserInput
            type="password"
            placeholder="비밀번호를 6자 이상 입력해 주세요."
            name="password"
            onChange={uploadUserInfo}
            valid={pwdValidation}
          />
          {pwdValidation === false && (
            <ErrorText>비밀번호를 6자 이상 입력해 주세요.</ErrorText>
          )}
          <InformationLabel htmlFor="checkPassword">
            비밀번호 확인
          </InformationLabel>
          <UserInput
            type="password"
            placeholder="비밀번호를 다시 한번 입력해 주세요."
            name="pwdCheckValue"
            onChange={uploadUserInfo}
            valid={pwdReValidation}
          />
          {pwdReValidation === false && (
            <ErrorText>비밀번호가 일치하지 않습니다.</ErrorText>
          )}
          <UserCheckContainerBorder>
            <CheckBox
              name="entireChecked"
              checked={agreedChecked.entireChecked}
              onClick={selectAllCheckedBox}
            />
            전체 동의
          </UserCheckContainerBorder>
          <UserCheckContainer>
            <CheckBox
              name="essentialChecked"
              checked={agreedChecked.essentialChecked}
              onClick={selectEssentialCheckBox}
            />
            <GraySpan>개인정보 수집 및 이용 동의(필수)</GraySpan>
          </UserCheckContainer>
          <UserCheckContainer>
            <CheckBox
              name="optionalChecked"
              checked={agreedChecked.optionalChecked}
              onClick={selectOptionalCheckBox}
            />
            <GraySpan>이벤트 소식 등 알림 정보 받기</GraySpan>
          </UserCheckContainer>
          <StartingSignUpBox
            agreedChecked={agreedChecked}
            onClick={() => agreedChecked.essentialChecked && checkValidation()}
            ref={SignUpValidationButton}
          >
            회원가입하기
          </StartingSignUpBox>
        </SecondModalBody>
      </SignUpModal>
      <SecondTranparentBackground
        onClick={() => {
          setSignUpModal('');
        }}
      />
    </>
  );
}

const SignUpModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  z-index: 14;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SecondTranparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 13;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SecondModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px 20px;

  strong {
    position: relative;
    color: #333;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

const SecondeExitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  i {
    position: relative;
    top: 4px;
    left: 130px;
    font-size: 20px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const SecondModalBody = styled.section`
  padding: 20px;

  div:nth-child(9) {
    height: auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 15px;
  }
`;

const UserInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.valid === false ? 'red' : '#e1e2e3')};
  background-color: #fff;
  font-size: 15px;
  color: #333;

  :focus {
    border: 1px solid ${(props) => (props.valid === false ? 'red' : '#e1e2e3')};
  }
`;

const UserCheckContainer = styled.div`
  width: 100%;
  height: 21px;
  margin-bottom: 2px;
`;

const CheckBox = styled.input.attrs((props) => ({
  type: 'checkBox',
}))`
  margin-right: 10px;
`;

const StartingSignUpBox = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  width: 100%;
  height: 54px;
  margin-top: 30px;
  border: 0;
  border-radius: 27px;
  background-color: ${(props) =>
    props.agreedChecked.essentialChecked ? '#36f' : '#f2f4f7'};
  color: ${(props) =>
    props.agreedChecked.essentialChecked ? '#fff' : ' #cacaca'};
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) =>
    props.agreedChecked.essentialChecked ? 'pointer' : 'not-allowed'};
`;

const GraySpan = styled.span`
  color: #939393;
`;

const ErrorText = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  font-size: 12px;
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const UserCheckContainerBorder = styled(
  UserCheckContainer.withComponent('div')
)`
  height: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
  margin-bottom: 15px;
`;
