import React from 'react';
import styled from 'styled-components';

export default function UploadFile({
  selectedFile,
  currentColor,
  handleCheckValue,
  index,
}) {
  const day = new Date();
  const today = day.toLocaleDateString();

  return (
    <ResumeForm
      border={
        currentColor.includes(index) ? '1px solid #3366FF' : '1px solid #ececec'
      }
    >
      <input type="checkbox" onClick={() => handleCheckValue(index)} />
      <Resumecontent id="download" target="_blank">
        <p>{selectedFile}</p>
        <div>
          <span>{today}</span>
          <span>첨부파일</span>
        </div>
      </Resumecontent>
    </ResumeForm>
  );
}

const ResumeForm = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  border: ${(props) => props.border};
  border-radius: 5px;
  margin-bottom: 10px;
  input {
    width: 100px;
    height: 20px;
    margin: 20px -20px;
  }
`;

const Resumecontent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: calc(100% - 95px);
  color: #333;
  line-height: 20px;
  text-align: left;
  p {
    font-size: 15px;
    font-weight: bold;
  }
  span {
    font-size: 11px;
    margin-right: 5px;
    letter-spacing: -0.5px;
  }
`;
