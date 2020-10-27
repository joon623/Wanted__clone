import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NeedLogin, ResumeState } from '../../../Store/Actions/index';

function ResumeIntro() {
  const dispatch = useDispatch();

  const handleWhichButton = (page) => {
    dispatch(NeedLogin());
    dispatch(ResumeState(page));
  };

  return (
    <Intro>
      <IntroHeader>
        <MainCopy>이력서 양식, 그 이상</MainCopy>
        <MainText>
          채용 전문가들의 조언을 얻어, 이력서를 잘 쓸 수 있는 도구를
          만들었습니다.
          <br />
          서류 통과가 잘 되는 원티드 이력서를 쉽고 빠르게 작성해 보세요.
        </MainText>
        <ButtonContainer>
          <ResumeButton
            backgroundColor={'white'}
            color={'#3a68f9'}
            onClick={() => {
              handleWhichButton('management');
            }}
          >
            이력서 관리
          </ResumeButton>
          <ResumeButton
            backgroundColor={'#3a68f9'}
            color={'#fff'}
            onClick={() => {
              handleWhichButton('writing');
            }}
          >
            새 이력서 작성
          </ResumeButton>
        </ButtonContainer>
      </IntroHeader>
      <IntroHeaderImg />
      <IntroContent>
        <IntroImg backgroundUrl={'/Images/Resume/resume_02.jpg'}>
          <MainCopy fontColor={'#fff'}>지원에 유리한</MainCopy>
          <MainText fontColor={'#fff'}>
            글로벌 기업에 보편적이고, 성별이나 가족관계 등 차별 금지 정책에
            맞춰서 제작하였습니다.
            <br />
            군더더기 없이, 당신의 진짜 경쟁력을 드러 내 보세요.
          </MainText>
        </IntroImg>
      </IntroContent>
      <IntroContent>
        <MainCopy>본질에 집중한</MainCopy>
        <MainText>
          보다 명확한 정보 설계로 당신의 커리어를 돋보이게 만들어 드립니다.
          <br />
          불필요한 정보 입력을 최소화하고 이력서 작성에 방해가 되는 UI 요소들을
          제거하였습니다.
        </MainText>
        <IntroImg backgroundUrl={'/Images/Resume/resume_03.png'} />
      </IntroContent>
      <IntroContent>
        <IntroImg backgroundUrl={'/Images/Resume/resume_04.jpg'}>
          <MainCopy fontColor={'#fff'}>활용이 자유로운</MainCopy>
          <MainText fontColor={'#fff'}>
            PC/모바일 어디에서나 작성할 수 있고, PDF 파일로 저장과 활용이
            쉽습니다.
            <br />
            가독성에 중점을 두고 설계하여, 파일 저장/출력시에도 돋보이는
            결과물을 얻을 수 있습니다.
          </MainText>
          <ResumeButton backgroundColor={'white'} color={'#3a68f9'} boderNone>
            <AmazonLink>샘플 다운로드</AmazonLink>
          </ResumeButton>
          <ResumeButton
            backgroundColor={'#3a68f9'}
            color={'#fff'}
            onClick={() => {
              dispatch(NeedLogin());
            }}
          >
            새 이력서 작성
          </ResumeButton>
        </IntroImg>
      </IntroContent>
    </Intro>
  );
}

export default ResumeIntro;

const Intro = styled.div`
  margin: 50px auto 0;
`;

const IntroHeader = styled.header`
  background-color: white;
`;

const MainCopy = styled.h1`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0 35px;
  word-break: keep-all;
  word-wrap: break-word;
  font-size: 56px;
  font-weight: bold;
  color: ${({ fontColor }) => (fontColor ? fontColor : 'black')};
`;

const MainText = styled.h2`
  width: 60%;
  margin: 0 auto 0px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ fontColor }) => (fontColor ? fontColor : 'black')};
`;

const ButtonContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  top: 20px;
`;

const ResumeButton = styled.button`
  margin: 0 5px;
  padding: 15px 50px;
  border: ${({ boderNone }) => (boderNone ? '' : '1px solid #3a68f9')};
  border-radius: 30px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  top: 20px;

  a {
    target: '_blank';
  }
`;

const IntroHeaderImg = styled.div`
  width: 100%;
  height: 284px;
  background: url('/Images/Resume/resume_01.png') no-repeat;
  background-size: cover;
`;

const IntroContent = styled.div`
  text-align: center;
  background-color: white;
`;

const IntroImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ backgroundUrl }) => backgroundUrl}) no-repeat;
  background-size: cover;
  padding-bottom: 20%;
`;

const ResumeSampleButton = styled.button`
  margin: 0 5px;
  padding: 15px 50px;
  border: 1px solid #3a68f9;
  border-radius: 30px;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const AmazonLink = styled.a.attrs(() => ({
  href:
    'https://s3.ap-northeast-2.amazonaws.com/wanted-public/sample_resume_ko.pdf',
  target: '_blank',
}))``;
