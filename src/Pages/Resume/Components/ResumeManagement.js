import React from 'react';
import styled from 'styled-components';
import { Background } from '../Resume';

function ResumeManagement({
  resumeListData,
  delteResumeList,
  handleNewResume,
}) {
  return (
    <>
      <Container>
        <RecentDocBar>
          <p>최근 문서</p>
          <span>
            원티드 이력서 소개
            <i className="fas fa-info-circle" />
          </span>
        </RecentDocBar>
        <ContentsWrapper>
          <NewResume
            onClick={(e) => {
              handleNewResume(e);
            }}
          >
            <i className="far fa-copy" />
            <div> 새 이력서 작성 </div>
          </NewResume>
          <UploadFiles>
            <i className="fas fa-file-upload" />
            <UploadLabel for="file">파일 업로드</UploadLabel>
            <UploadInput type="file" for="file" />
          </UploadFiles>
          {resumeListData?.map((el, idx) => {
            return (
              <ResumeList key={idx}>
                <ResumeTitleWrapper>
                  <ResumeTitle>
                    {el.title} {el.id}
                  </ResumeTitle>
                  <ResumeCreateDate>{el.created_at}</ResumeCreateDate>
                </ResumeTitleWrapper>
                <ResumeStatusContainer>
                  <div>
                    <i className="far fa-address-book" />
                    <ResumeStatusText>{el.resume_status}</ResumeStatusText>
                  </div>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => delteResumeList(el.id)}
                  />
                </ResumeStatusContainer>
              </ResumeList>
            );
          })}
        </ContentsWrapper>
      </Container>
      <Background />
    </>
  );
}

export default ResumeManagement;

const Container = styled.div`
  position: relative;
  margin: 80px auto 0;
  max-width: 1060px;
`;

const RecentDocBar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 15px 0px;
  p {
    font-size: 16px;
    font-weight: 600;
    color: #333333;
  }
  span {
    line-height: 1.4;
    color: #258bf7;
    font-size: 16px;
    font-weight: 600;
    i {
      margin-left: 8px;
    }
  }
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const NewResume = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 190px;
  position: relative;
  border: 1px solid #dbdbdb;
  background-color: white;
  cursor: pointer;
  width: calc(25% - 10px);
  padding: 6px 12px;
  margin: 20px 10px 0px 0px;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 26px;
    background-color: #258bf7;
    border-radius: 50%;
    width: 74px;
    height: 74px;
  }
  div {
    position: relative;
    font-size: 16px;
    color: #333333;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const UploadFiles = styled(NewResume)`
  margin-right: 10px;
  i {
    background-color: #f8f8fa;
    color: #333333;
  }
`;

const UploadLabel = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  vertical-align: middle;
  margin-top: 15px;
  border: none;
  cursor: pointer;
`;

const UploadInput = styled.input`
  position: absolute;
  top: 120px;
  left: 80px;
  opacity: 0;
  width: 100px;
  height: 100px;
  padding: 0;
  margin: -1px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ResumeList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 12px;
  margin: 20px 10px 0px 0px;
  width: calc(25% - 10px);
  height: 190px;
  position: relative;
  border: 1px solid #dbdbdb;
  background-color: white;
  cursor: pointer;
  color: #999;
`;

const ResumeTitle = styled.h3`
  text-align: left;
  overflow: hidden;
  margin-bottom: 10px;
  max-height: 46px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
`;

const ResumeCreateDate = styled.p`
  margin-top: 5px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: normal;
  text-align: left;
`;

const ResumeStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid #dbdbdb;
  padding: 5px;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 17px;
    }

    div:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const ResumeStatusText = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: normal;
  text-align: left;
`;

const ResumeTitleWrapper = styled.div``;
