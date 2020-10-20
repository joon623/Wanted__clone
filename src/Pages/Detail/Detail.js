import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DetailTemplate from './Components/DetailTemplate';
import DetailContents from './Components/DetailContents';
import ApplyTemplate from './Components/ApplyTemplate';
import SubmitTemaplete from './Components/SubmitTemaplete';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MapCompany from './Components/MapCompany';
import { API } from '../../config';

function Detail() {
  const [recruitList, setRecruitList] = useState([]);
  const [goToApply, setGoToApply] = useState(false);

  const [likeToggle, setLikeToggle] = useState(true);
  const [likeNumber, setLikeNumber] = useState(1);
  const [followToggle, setFollowToggle] = useState(false);
  const [shareToggle, setShareToggle] = useState(true);

  const [modal, setModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const [checkSubmit, setCheckSubmit] = useState(false);

  const [nameValid, setNameValid] = useState(false);

  const [detailList, setDetailList] = useState({});
  const [submitList, setSubmitList] = useState([]);

  const [hideContent, setHideContent] = useState(false);

  const url = window.location.href;

  const [likeuser, setLikeUser] = useState(false);

  const [input, setInputs] = useState({
    nameValue: '',
    emailValue: '',
    phoneValue: '',
    recommendValue: '',
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/recruit/detail/${id}`)
      .then((response) => response.json())
      .then((res) => {
        console.log(res.detail_list);
        setDetailList(res.detail_list);
      });
  }, [id]);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    const testToken = localStorage.getItem('userToken');
    fetch(`${API}/account/like`, {
      headers: {
        Authorization: testToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res.recruit_list.filter((item) => {
          item.id === detailList.id && setLikeUser(!likeuser);
        });
      });
  }, [detailList]);

  const onLikeToggle = () => {
    const testToken = localStorage.getItem('userToken');
    setLikeUser(!likeuser);
    fetch(`${API}/account/like`, {
      method: 'POST',
      headers: {
        Authorization: testToken,
      },
      body: JSON.stringify({
        recruit_id: detailList.id,
      }),
    }).then((res) => res.json());
  };
  console.log(likeuser, '22222222');

  const handleMove = () => {
    setGoToApply(!goToApply);
    setHideContent(!hideContent);
  };

  const handleValid = () => {
    if (
      !input.nameValue.length &&
      !input.emailValue.length &&
      !input.phoneValue.length
    ) {
      setNameValid(!nameValid);
    }
  };

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('submitList'));
    setSubmitList(list);
  }, []);

  return (
    <Container>
      <Modal modalOn={modal}>
        <HideModal onClick={() => setModal(!modal)}></HideModal>
        <ModalBox>
          <div>
            <p>북마크에 저장되었습니다.</p>
            <button>저장된 포지션 보기</button>
          </div>
        </ModalBox>
      </Modal>
      <Modal shareModal={shareModal}>
        <HideModal onClick={() => setShareModal(!shareModal)}></HideModal>
        <ShareModalBox>
          <ShareHead>
            <span>공유하기</span>
            <p>
              이 포지션과 어울리는 사람을 알고 있다면, 공유해주세요!
              <br /> 공유 후 추천까지 완료하면, 지원자 최종합격시 보상금을
              지급해드립니다.
            </p>
          </ShareHead>
          <ShareFooter shareToggle={shareToggle}>
            <span>링크 공유</span>
            <div>
              <input value='http://cuted.co/MoBK5k' />
              <CopyToClipboard text={url}>
                <button onClick={() => setShareToggle(!shareToggle)}>
                  <i className='fas fa-check'></i>
                </button>
              </CopyToClipboard>
            </div>
            {shareToggle ? '' : <p>복사하였습니다.</p>}
          </ShareFooter>
        </ShareModalBox>
      </Modal>
      <Wrapper>
        <DetailTemplate>
          <DetailContents
            detailList={detailList}
            setFollowToggle={setFollowToggle}
            followToggle={followToggle}
          />
        </DetailTemplate>
        <ApplyTemplate
          likeuser={likeuser}
          goToApply={goToApply}
          likeToggle={likeToggle}
          likeNumber={likeNumber}
          shareToggle={shareToggle}
          modal={modal}
          handleMove={handleMove}
          handleModal={() => setModal(!modal)}
          handleShareModal={() => setShareModal(!shareModal)}
          onLikeToggle={onLikeToggle}
          recruitList={recruitList}
        />
        <SubmitTemaplete
          setSubmitList={setSubmitList}
          detailList={detailList}
          goToApply={goToApply}
          input={input}
          checkSubmit={checkSubmit}
          nameValid={nameValid}
          hideContent={hideContent}
          setCheckSubmit={setCheckSubmit}
          handleMove={handleMove}
          handleValue={handleValue}
          handleValid={handleValid}
          // nameValidHandler={nameValidHandler}
        />
      </Wrapper>
      <MapCompany detailList={detailList}></MapCompany>
    </Container>
  );
}
export default Detail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1060px;
  position: relative;

  @media (max-width: 992px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Modal = styled.div`
  display: ${({ modalOn, shareModal }) =>
    modalOn || shareModal ? 'flex' : 'none'};
  background-color: ${({ shareModal }) =>
    shareModal ? 'rgba(0,0,0,0.5)' : ''};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HideModal = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ModalBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 400px;
  height: 160px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  z-index: 9999;
  button {
    color: #36f;
    margin-top: 15px;
    cursor: pointer;
  }
`;

const ShareModalBox = styled.div`
  width: 500px;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  overflow: hidden;
`;

const ShareHead = styled.div`
  padding: 16px 20px;
  position: relative;
  border-bottom: 1px solid #eee;
  color: #333;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
  p {
    line-height: 1.4;
    word-wrap: break-word;
    margin: 10px 0 0;
    font-size: 14px;
    font-weight: 400;
    color: #b5b5b5;
  }
`;

const ShareFooter = styled.div`
  padding: 20px;
  margin-top: 30px;
  span {
    font-size: 15px;
    color: #b5b5b5;
  }
  p {
    padding: 10px 0 5px;
    color: ${({ shareToggle }) => (shareToggle ? '' : '#258bf7')};
    font-size: 14px;
  }
  i {
    color: ${({ shareToggle }) => (shareToggle ? '' : '#258bf7')};
  }
  input {
    width: calc(100% - 90px);
    height: 50px;
    border: 1px solid #dbdbdb;
    border-right: 0;
    border-radius: 3px 0 0 3px;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  button {
    width: 90px;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 0 3px 3px 0;
    font-size: 20px;
    font-weight: 600;
    color: #b5b5b5;
    cursor: pointer;
  }
  div {
    display: flex;
    margin-top: 10px;
  }
`;
