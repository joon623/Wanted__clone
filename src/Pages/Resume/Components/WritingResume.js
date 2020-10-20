import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ResumeState } from '../../../Store/Actions/index';

function WritingResume({
  writingValidation,
  isEssentialInformation,
  handleResumeInput,
  titleElement,
  authorElement,
  emailElement,
  phoneNumberElement,
  textareaElement,
  displayWritingResume,
  displayResumeManagement,
  newWritingData,
}) {
  const isUserLogin = useSelector((store) => store.userLoggedReducer);
  const displayWritingReducer = useSelector(
    (store) => store.displayResumeWriting
  );
  const dispatch = useDispatch();
  const { title, author, email, phone_number } = newWritingData;

  return (
    <WritingResumeContainer
      isUserLogin={isUserLogin}
      displayWritingResume={displayWritingResume}
      displayResumeManagement={displayResumeManagement}
      displayWritingReducer={displayWritingReducer}
    >
      <WritingBoundary
        onKeyUp={(e) => {
          handleResumeInput(e);
        }}
      >
        <ResumeInput placeholder={title} name="title" ref={titleElement} />
        <EtcInput placeholder={author} name="author" ref={authorElement} />
        <EtcInput placeholder={email} name="email" ref={emailElement} />
        <EtcInput
          placeholder="연락처(필수) ex) 010-0000-0000"
          color="#f94460"
          name="phone_number"
          ref={phoneNumberElement}
        />
        <LetMeIntroduce>간단 소개글</LetMeIntroduce>
        <IntroduceTextArea
          name="textarea"
          placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
          ref={textareaElement}
        />
      </WritingBoundary>
      <ToDoScrollContainer />
      <EssentialInforamtion isEssentialInformation={isEssentialInformation}>
        필수 정보를 입력해주세요
      </EssentialInforamtion>
      <FixedContainer>
        <FixedContent>
          <TemporarySaveButton
            onClick={(e) => {
              writingValidation(e);
            }}
          >
            임시 저장
          </TemporarySaveButton>
          <CompleteButton
            onClick={(e) => {
              writingValidation(e);
            }}
          >
            작성 완료
          </CompleteButton>
        </FixedContent>
      </FixedContainer>
    </WritingResumeContainer>
  );
}

export default WritingResume;

const WritingResumeContainer = styled.div`
  margin-top: 180px;
  display: block;
`;

const WritingBoundary = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`;

const ResumeInput = styled.input`
  width: 100%;
  color: #3b3d40;
  font-size: 36px;
  line-height: 36px;
  font-weight: 500;
  margin: 70px 0 50px;
`;

const EtcInput = styled.input`
  width: 100%;
  height: 24px;
  padding: 0;
  margin-bottom: 10px;
  font-size: 16px;

  &::placeholder {
    color: ${({ color }) => color};
  }
`;

const LetMeIntroduce = styled.div`
  width: 100%;
  margin: 15px 0;
  padding: 15px 0;
  border-bottom: 1px solid gray;
`;

const IntroduceTextArea = styled.textarea`
  width: 100%;
  margin-top: 30px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const FixedContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
`;

const FixedContent = styled.div`
  max-width: 1060;
  display: flex;
  justify-content: flex-end;
  max-width: 1060px;
  padding: 10px 5px;
  margin: 0 auto;
`;

const TemporarySaveButton = styled.button`
  width: 174px;
  height: 50px;
  border: 1px solid #258bf7;
  border-radius: 5px;
  color: #258bf7;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

const CompleteButton = styled.button`
  width: 174px;
  height: 50px;
  color: #fff;
  border: 1px solid #258bf7;
  border-radius: 5px;
  font-size: 15px;
  background-color: #258bf7;
  cursor: pointer;
`;

const EssentialInforamtion = styled.div`
  display: ${({ isEssentialInformation }) =>
    isEssentialInformation ? 'block' : 'none'};
  position: fixed;
  bottom: 73px;
  left: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: #f94460;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

const ToDoScrollContainer = styled.div`
  height: 1000px;
`;
