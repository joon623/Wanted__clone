import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ResumeManagement from './Components/ResumeManagement';
import WritingResume from './Components/WritingResume';
import ResumeIntro from './Components/ResumeIntro';
import { API } from '../../config';
import { ResumeState } from '../../Store/Actions/index';

function Resume() {
  const isUserLogin = useSelector((store) => store.userLoggedReducer);

  const [resumeListData, setResumeListData] = useState([]);
  const [writingInput, setWritingInput] = useState({
    title: '',
    author: '',
    email: '',
    phone_number: '',
    textarea: '',
  });
  const [isEssentialInformation, setIsEssentialInformation] = useState(false);
  const [writingData, setWritingData] = useState([]);

  const [newWritingData, setNewWritingData] = useState([]);

  const titleElement = useRef(null);
  const authorElement = useRef(null);
  const emailElement = useRef(null);
  const phoneNumberElement = useRef(null);
  const textareaElement = useRef(null);

  const dispatch = useDispatch();

  const headerOffset = 40;

  const titleTop =
    titleElement.current?.offsetTop -
    titleElement.current?.offsetHeight -
    headerOffset;
  const authorTop =
    authorElement.current?.offsetTop -
    authorElement.current?.offsetHeight -
    headerOffset;
  const emailTop =
    emailElement.current?.offsetTop -
    emailElement.current?.offsetHeight -
    headerOffset;
  const phoneNumberTop =
    phoneNumberElement.current?.offsetTop -
    phoneNumberElement.current?.offsetHeight -
    headerOffset;
  const textareaTop =
    textareaElement.current?.offsetTop -
    textareaElement.current?.offsetHeight -
    headerOffset;

  useEffect(() => {
    const localToken = localStorage.getItem('userToken');
    fetch(`${API}/account/resumelist`, {
      headers: { Authorization: localToken },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'INVALID_TOKEN') {
          return console.warn('로그인이 필요합니다');
        }
        setResumeListData(result.data.my_resume);
      });
  }, [isUserLogin]);

  const delteResumeList = (id) => {
    const toDeleteToken = localStorage.getItem('userToken');
    const deletedResume = resumeListData.filter((el) => {
      return el.id !== id;
    });

    fetch(`${API}/account/resumedelet/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: toDeleteToken,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'SUCCESS') {
          setResumeListData(deletedResume);
        } else if (result.message === 'INVALID_TOKEN') {
          return alert('권한이 없습니다.');
        }
      });
  };

  const handleResumeInput = (e) => {
    const { name, value } = e.target;
    setWritingInput({ ...writingInput, [name]: value });
  };

  const writingValidation = (e) => {
    const { title, author, email, textarea, phone_number } = writingInput;
    const localToken = localStorage.getItem('userToken');
    const essentialValidation =
      title.length &&
      author.length &&
      email.length &&
      phone_number.length &&
      textarea.length &&
      true;

    setIsEssentialInformation(!essentialValidation);

    if (!title.length) {
      return window.scrollTo({
        top: titleTop,
        behavior: 'smooth',
      });
    }
    if (!author.length) {
      return window.scrollTo({
        top: authorTop,
        behavior: 'smooth',
      });
    }
    if (!email.length) {
      return window.scrollTo({ top: emailTop, behavior: 'smooth' });
    }
    if (!phone_number.length) {
      return window.scrollTo({ top: phoneNumberTop, behavior: 'smooth' });
    }
    if (!textarea.length) {
      return window.scrollTo({ top: textareaTop, behavior: 'smooth' });
    }
    fetch(`${API}/account/resumeupdate/118`, {
      method: 'PATCH',
      headers: {
        Authorization: localToken,
      },
      body: JSON.stringify({
        title: title,
        author: author,
        email: email,
        phone_number: phone_number,
        description: textarea,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(ResumeState('management'));
      });
  };

  const handleWriteResume = (e) => {
    const localToken = localStorage.getItem('userToken');
    fetch(`${API}/account/resumewrite`, {
      headers: {
        Authorization: localToken,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setWritingData(result.data);
      });
  };

  const resumestateReducer = useSelector((store) => store.resumestateReducer);

  const handleNewResume = async (e) => {
    const localToken = localStorage.getItem('userToken');
    await fetch(`${API}/account/resumewrite`, {
      headers: { Authorization: localToken },
    })
      .then((res) => res.json())
      .then((result) => {
        setNewWritingData(result.resume);
        dispatch(ResumeState('writing'));
      });
  };

  return (
    <>
      {resumestateReducer === 'intro' && !isUserLogin && <ResumeIntro />}
      {resumestateReducer === 'writing' && isUserLogin && (
        <WritingResume
          writingValidation={writingValidation}
          handleResumeInput={handleResumeInput}
          isEssentialInformation={isEssentialInformation}
          titleElement={titleElement}
          authorElement={authorElement}
          emailElement={emailElement}
          phoneNumberElement={phoneNumberElement}
          textareaElement={textareaElement}
          newWritingData={newWritingData}
        />
      )}
      {resumestateReducer === 'management' && isUserLogin && (
        <ResumeManagement
          delteResumeList={delteResumeList}
          handleWriteResume={handleWriteResume}
          handleNewResume={handleNewResume}
        />
      )}
    </>
  );
}

export default Resume;

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f8f8fa;
`;
