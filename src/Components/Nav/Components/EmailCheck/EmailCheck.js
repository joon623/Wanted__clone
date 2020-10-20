import React from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import { useSelector, useDispatch } from 'react-redux';
import { NeedLogin, ExitLogin } from '../../../../Store/Actions/index';

export default function EmailCheck({
  floatSignUp,
  setFloatSignUp,
  handleEmail,
  checkEmail,
  emailValidation,
  kakaoData,
  responseFail,
  responseKakao,
}) {
  const needLogin = useSelector((store) => store.needLoginReducer);

  const dispatch = useDispatch();

  return (
    <>
      <SignUpModal floatSignUp={floatSignUp} needLogin={needLogin}>
        <SignUpHeader>
          <img src="/Images/Nav/cuted_text.png" alt="cutedLogo" />
          <ExitButton>
            <i
              className="fas fa-times"
              onClick={() => {
                setFloatSignUp(false);
                dispatch(ExitLogin());
              }}
            />
          </ExitButton>
        </SignUpHeader>
        <SignUpBody>
          <CopyContainer>
            <BodyCopy>
              당신의 커리어 여정,
              <br />
              큐티드에서 행복하게
            </BodyCopy>
            <BodySubCopy>
              지금 큐티드와
              <br /> 커리어 여정을 시작하세요!
            </BodySubCopy>
          </CopyContainer>
          <SubmitForm
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InformationLabel htmlFor="email">이메일</InformationLabel>
            <InformationInput
              type="email"
              placeholder="이메일을 입력해 주세요."
              emailValidation={emailValidation}
              onChange={handleEmail}
            />
            {!emailValidation && (
              <NotCorrectedEmail>
                올바른 이메일 형식을 입력해주세요.
              </NotCorrectedEmail>
            )}
            <StartButton onClick={checkEmail}>
              <i className="far fa-envelope" />
              이메일로 시작하기
            </StartButton>
            <Or>or</Or>
            <KaKaoBtn
              jsKey={'6e900d75159996680a12acc974680b85'}
              buttonText="Kakao"
              onSuccess={responseKakao}
              onFailure={responseFail}
              getProfile="true"
            >
              Kakao로 시작하기
            </KaKaoBtn>
          </SubmitForm>
          <PreventUserInfomation>
            걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
            <br /> 회원가입 시 <span>개인정보 처리방침</span>과
            <span>이용약관</span>을 확인하였으며, 동의합니다.
          </PreventUserInfomation>
        </SignUpBody>
      </SignUpModal>
      <TranparentBackground
        floatSignUp={floatSignUp}
        needLogin={needLogin}
        onClick={() => {
          setFloatSignUp(false);
          dispatch(ExitLogin());
        }}
      />
    </>
  );
}

const SignUpModal = styled.div`
  width: 400px;
  height: ${({ floatSignUp, needLogin }) =>
    floatSignUp || needLogin ? '604px' : '0'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const SignUpHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 16px 20px;

  img {
    position: relative;
    left: 20px;
    width: 70px;
    height: 24px;
  }
`;

const ExitButton = styled.button`
  position: relative;
  top: -2px;
  left: 130px;

  i {
    font-size: 20px;
    color: rgb(153, 153, 153);
    cursor: pointer;
  }
`;

const SignUpBody = styled.section`
  padding: 20px;
`;

const CopyContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const BodyCopy = styled.h1`
  line-height: 1.54;
  font-size: 26px;
  font-weight: bold;
  color: #333;
`;

const BodySubCopy = styled.h2`
  margin-top: 16px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

const SubmitForm = styled.form``;

export const InformationLabel = styled.label`
  color: #767676;
  font-size: 14px;
  font-weight: normal;
`;

const InformationInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 5px;
  border: 1px solid
    ${({ emailValidation }) => (emailValidation ? '#e1e2e3' : 'red')};
  background-color: #fff;
  font-size: 15px;
  color: #333;

  :focus {
    border: 1px solid
      ${({ emailValidation }) => (emailValidation ? '#36f' : 'red')};
  }
`;

const NotCorrectedEmail = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 6px;
  font-size: 12px;
  color: #fe415c;
`;

const StartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-top: 15px;
  border: 0;
  border-radius: 27px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  :hover {
    opacity: 0.8;
  }
`;

const Or = styled.div`
  margin: 10px 0 10px 0;
  text-align: center;
  color: #969696;
  font-size: 14px;
  font-weight: 500;
`;

const KaKaoBtn = styled(KaKaoLogin)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 54px;
  color: #783c00;
  background-color: #ffeb00;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 27px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const PreventUserInfomation = styled.div`
  margin-top: 26px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  color: #999;

  span {
    text-decoration: underline;
    color: #3336ff;
  }
`;

const TranparentBackground = styled.div`
  width: 100%;
  height: ${({ floatSignUp, needLogin }) =>
    floatSignUp || needLogin ? '100%' : '0'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  background-color: rgba(0, 0, 0, 0.4);
`;
