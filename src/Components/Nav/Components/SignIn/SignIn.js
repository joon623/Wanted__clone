import React from 'react';
import styled from 'styled-components';

export default function SignIn({
  floatSignInModal,
  setFloatSignInModal,
  invalidPassword,
  handleSignInPassword,
  checkLogin,
}) {
  return (
    <>
      <SignInModal floatSignInModal={floatSignInModal}>
        <SignInHeader>
          <strong>비밀번호 입력</strong>
          <SignInExitButton>
            <i
              className="fas fa-times"
              onClick={() => setFloatSignInModal(false)}
            />
          </SignInExitButton>
        </SignInHeader>
        <SignInModalBody>
          <SignInForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <SignInLabel htmlFor="password">비밀번호</SignInLabel>
            <SignInInput
              type="password"
              placeholder="비밀번호"
              invalidPassword={invalidPassword}
              onChange={handleSignInPassword}
            />
            {invalidPassword === false ? (
              <InvaildPassword>올바르지 않은 비밀번호입니다.</InvaildPassword>
            ) : (
              ''
            )}
            <LoginButton onClick={checkLogin}>로그인</LoginButton>
          </SignInForm>
          <InitializeText>비밀번호 초기화/변경</InitializeText>
        </SignInModalBody>
      </SignInModal>
      <HideBackground floatSignInModal={floatSignInModal} />
    </>
  );
}

const SignInModal = styled.div`
  width: 400px;
  height: ${({ floatSignInModal }) => (floatSignInModal ? '330px' : '0')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  border-radius: 5px;
  z-index: 14;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #fff;
`;

const SignInHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px 20px;

  strong {
    font-weight: bold;
  }
  img {
    position: relative;
    left: 20px;
    width: 70px;
  }
`;

const SignInExitButton = styled.div`
  position: relative;
  top: -5px;
  left: 130px;

  i {
    font-size: 20px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const SignInModalBody = styled.div`
  padding: 20px;
`;

const SignInForm = styled.form``;

const SignInLabel = styled.label`
  color: #767676;
  font-size: 14px;
  font-weight: normal;
`;

const SignInInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid
    ${({ invalidPassword }) => (invalidPassword === false ? 'red' : '#e1e2e3 ')};
  background-color: #fff;
  font-size: 15px;
  color: #333;

  :focus {
    border: 1px solid
      ${({ invalidPassword }) => (invalidPassword === false ? 'red ' : '#36f')};
  }
`;

const HideBackground = styled.div`
  width: 100%;
  height: ${({ floatSignInModal }) => (floatSignInModal ? '100%' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  background-color: rgba(0, 0, 0, 0.4);
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 35px;
  border: 0;
  border-radius: 27px;
  background-color: #36f;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const InitializeText = styled.button`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  background-color: transparent;
  font-size: 14px;
  font-weight: bold;
  color: #36f;
`;

const InvaildPassword = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #fe415c;
`;
