import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ExploreEachLists from './Components/ExploreEachList/ExploreEachLists';
import NavTagBar from './Components/NavTagBar/NavTagBar';
import EmailCheck from './Components/EmailCheck/EmailCheck';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import UserSelectBox from './Components/UserSelectBox/UserSelectBox';
import { NAVIGATION_MENU_Tab } from './Data/NAVIGATION_MENU_TAB';
import { NAVIGATION_ASIDE } from './Data/NAVIGATION_ASIDE';
import { EXPLORE_CONTENT } from './Data/EXPLORE_CONTENT';
import { SignUpAddress } from '../../config';
import {
  UserLogin,
  UserLogOut,
  NeedLogin,
  ExitLogin,
  ResumeState,
} from '../../Store/Actions';

function Nav() {
  const [displayExplore, setDisplayExplore] = useState(false);
  const [displayRecommend, setDisplayRecommend] = useState(false);
  const [floatSignUp, setFloatSignUp] = useState(false);
  const [floatSecondSingUp, setFloatSecondSingUp] = useState(false);
  const [floatSignInModal, setFloatSignInModal] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [agreedChecked, setAgreedChecked] = useState({
    entireChecked: false,
    essentialChecked: false,
    optionalChecked: false,
  });
  const [input, setInput] = useState({
    name: '',
    phone_number: '',
    password: '',
    pwdCheckValue: '',
  });
  const [idValidation, setIdValidation] = useState(null);
  const [phoneValidation, setPhoneValidation] = useState(null);
  const [existPhoneNumber, setExistPhoneNumber] = useState(false);
  const [pwdValidation, setPwdValidation] = useState(null);
  const [pwdReValidation, setRePwdValidation] = useState(null);
  const [singnUpValidation, setSingnUpValidation] = useState(null);
  const [invalidPassword, setInvalidPassword] = useState(null);
  const [signInPassword, setSignInPassword] = useState('');
  const [email, setEmail] = useState('');
  const [kakaoData, setKakaoData] = useState('');
  const [clickUserButton, setClickUserButton] = useState(false);
  const [windowPath, setWindowPath] = useState(null);

  const history = useHistory();
  const SignUpValidationButton = useRef(null);

  const [userLogged, setUserLogged] = useState(false);
  const dispatch = useDispatch();
  const isUserLogin = useSelector((store) => store.userLoggedReducer);
  const UserclickedButton = useSelector((store) => store.clickedButton);

  const handleExplore = (idx) => {
    idx === 0 ? setDisplayExplore(true) : setDisplayExplore(false);
  };

  const handleRecommend = () => {
    setDisplayRecommend(!displayRecommend);
    setDisplayExplore(false);
    window.scrollTo(0, 0);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const checkEmail = async () => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    if (email.match(emailRegExp) === null) {
      return setEmailValidation(false);
    }

    await fetch(`${SignUpAddress}`, {
      method: 'POST',
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'ALEADY_EXISTS') {
          setFloatSignUp(false);
          dispatch(ExitLogin());
          setFloatSecondSingUp(false);
          setFloatSignInModal(true);
        } else if (result.message === 'NEED_SIGNUP') {
          setFloatSignUp(false);
          dispatch(ExitLogin());
          setFloatSecondSingUp(true);
          setFloatSignInModal(false);
        }
      });
  };

  const selectAllCheckedBox = () => {
    agreedChecked.entireChecked
      ? setAgreedChecked({
          entireChecked: false,
          essentialChecked: false,
          optionalChecked: false,
        })
      : setAgreedChecked({
          entireChecked: true,
          essentialChecked: true,
          optionalChecked: true,
        });
  };

  const selectEssentialCheckBox = (e) => {
    setAgreedChecked({
      essentialChecked: !agreedChecked.essentialChecked,
    });
  };

  const selectOptionalCheckBox = (e) => {
    setAgreedChecked({
      optionalChecked: !agreedChecked.optionalChecked,
    });
  };

  const uploadUserInfo = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const checkValidation = () => {
    const { name, phone_number, password, pwdCheckValue } = input;
    const phoneExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
    const phoneValid =
      name.length &&
      phone_number.match(phoneExp) !== null &&
      phone_number.length === 11;
    const pwdValid = phoneValid && password.length > 6;
    const pwdCheckValid = pwdValid && password === pwdCheckValue;
    setIdValidation(!!name);
    setPhoneValidation(phoneValid);

    if (pwdValid) {
      setPwdValidation(true);
    } else if (!phoneValid) {
      setPwdValidation(null);
    } else {
      setPwdValidation(false);
    }

    if (pwdCheckValid) {
      setRePwdValidation(true);
    } else if (!pwdValid) {
      setRePwdValidation(null);
    } else {
      setRePwdValidation(false);
    }
    setSingnUpValidation(pwdCheckValid);

    SignUpValidationButton.current.addEventListener('click', async () => {
      await fetch(`${SignUpAddress}/signup`, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
          name,
          phone_number,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === 'SUCCESS') {
            setFloatSecondSingUp(false);
            dispatch(UserLogin());
            pwdCheckValid && history.push('/');
          } else if (result.message === 'ALREADY_EXISTS_PHONE_NUMBER') {
            setExistPhoneNumber(true);
          }
        });
    });
  };

  const handleSignInPassword = (e) => {
    const { value } = e.target;
    setSignInPassword(value);
    setInvalidPassword(null);
  };

  const checkLogin = async () => {
    await fetch(`${SignUpAddress}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password: signInPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('userToken', result.ACCESS_TOKEN);
          setFloatSignInModal(false);
          dispatch(UserLogin());
        } else if (result.message === 'INVALID_PASSWORD') {
          setInvalidPassword(false);
        }
      });
  };

  const responseKakao = (res) => {
    if (res.response.access_token) {
      fetch(`${SignUpAddress}/kakaosignin`, {
        method: 'POST',
        headers: {
          Authorization: res.response.access_token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.token) {
            localStorage.setItem('kakaoToken', result.token);
            setFloatSignUp(false);
            dispatch(ExitLogin());
            dispatch(UserLogin());
          }
        });
    }
  };

  const responseFail = (err) => {
    alert(err);
  };

  const logOut = (e) => {
    localStorage.clear();
    dispatch(UserLogOut());
    dispatch(ResumeState('intro'));
  };

  useEffect(() => {
    localStorage.getItem('userToken') && dispatch(dispatch(UserLogin()));
  }, []);

  return (
    <>
      <Navigation
        displayExplore={displayExplore}
        displayRecommend={displayRecommend}
      >
        <NavigationContainer>
          <CutedLogo
            src="/Images/Nav/cuted_text.png"
            alt="CutedLogo"
            onClick={() => {
              history.push('/');
            }}
          />
          <NavigationMenuTab
            onClick={() => {
              setWindowPath(window.location.pathname);
            }}
          >
            {NAVIGATION_MENU_Tab?.map(({ id, link, url, name }, idx) => (
              <Link
                key={id}
                to={link}
                onMouseOver={() => {
                  handleExplore(idx);
                }}
                onClick={() => {
                  isUserLogin
                    ? dispatch(ResumeState('management'))
                    : dispatch(ResumeState('intro'));
                }}
                style={{
                  borderBottom: `${
                    window.location.pathname === url ? '2px solid #258bf7' : ''
                  }`,
                }}
              >
                <li>{name}</li>
              </Link>
            ))}
          </NavigationMenuTab>
          <NavigationAside>
            {isUserLogin ? (
              <LoggedAsideList>
                <i className="fas fa-search" onClick={handleRecommend} />
                <LoggedUserList>
                  <AlarmButton>
                    <i className="far fa-bell" />
                  </AlarmButton>
                </LoggedUserList>
                <LoggedUserList>
                  <LoggedUserButton clickUserButton={clickUserButton}>
                    <i
                      className="fas fa-user"
                      onClick={() => {
                        isUserLogin && setClickUserButton(!clickUserButton);
                      }}
                    />
                    <UserSelectBox
                      clickUserButton={clickUserButton}
                      logOut={logOut}
                    />
                  </LoggedUserButton>
                </LoggedUserList>
                <LoggedUserList>
                  <CompanyService>기업 서비스</CompanyService>
                </LoggedUserList>
              </LoggedAsideList>
            ) : (
              <AsideList>
                <i className="fas fa-search" onClick={handleRecommend} />
                {NAVIGATION_ASIDE.map((el, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      idx === 0 && setFloatSignUp(true);
                    }}
                  >
                    {el}
                  </li>
                ))}
              </AsideList>
            )}
          </NavigationAside>
        </NavigationContainer>
        <ExploreContent
          displayExplore={displayExplore}
          onMouseOver={() => setDisplayExplore(true)}
          onMouseOut={() => setDisplayExplore(false)}
        >
          <ExploreContainer>
            {EXPLORE_CONTENT.map((el) => (
              <ExploreEachLists
                key={el.id}
                title={el.category}
                subcategory={el.name}
              />
            ))}
          </ExploreContainer>
        </ExploreContent>
      </Navigation>
      <NavTagBar
        displayRecommend={displayRecommend}
        handleRecommend={handleRecommend}
        setDisplayRecommend={setDisplayRecommend}
      />
      <HideMain displayExplore={displayExplore} />
      <EmailCheck
        floatSignUp={floatSignUp}
        setFloatSignUp={setFloatSignUp}
        handleEmail={handleEmail}
        checkEmail={checkEmail}
        emailValidation={emailValidation}
        kakaoData={kakaoData}
        responseKakao={responseKakao}
        responseFail={responseFail}
      />
      <SignUp
        floatSecondSingUp={floatSecondSingUp}
        setFloatSecondSingUp={setFloatSecondSingUp}
        agreedChecked={agreedChecked}
        selectAllCheckedBox={selectAllCheckedBox}
        uploadUserInfo={uploadUserInfo}
        input={input}
        selectEssentialCheckBox={selectEssentialCheckBox}
        selectOptionalCheckBox={selectOptionalCheckBox}
        checkValidation={checkValidation}
        idValidation={idValidation}
        phoneValidation={phoneValidation}
        pwdValidation={pwdValidation}
        pwdReValidation={pwdReValidation}
        SignUpValidationButton={SignUpValidationButton}
        existPhoneNumber={existPhoneNumber}
      />
      <SignIn
        floatSignInModal={floatSignInModal}
        setFloatSignInModal={setFloatSignInModal}
        invalidPassword={invalidPassword}
        handleSignInPassword={handleSignInPassword}
        checkLogin={checkLogin}
      />
    </>
  );
}

const Navigation = styled.nav`
  display: ${(props) => (props.displayRecommend ? 'none' : 'block')};
  width: 100%;
  position: fixed;
  top: 0;
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  color: #333333;
  z-index: 10;
`;

const NavigationContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.navChangePoint}) {
    width: 100%;

    img:nth-child(1) {
      display: none;
    }

    ul:nth-child(2) {
      width: 80%;

      a:nth-child(3) {
        display: none;
      }

      a:nth-child(4) {
        display: none;
      }

      a:nth-child(5) {
        display: none;
      }
    }

    aside:nth-child(3) {
      width: 50%;
      padding: 0;

      ul {
        justify-content: flex-end;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.navMiniChangePoint}) {
    justify-content: center;

    ul {
      justify-content: center;

      a:nth-child(6) {
        display: none;
      }
    }

    aside:nth-child(3) {
      display: none;
    }
  }
`;

const CutedLogo = styled.img`
  width: 64px;
  height: 22px;
  cursor: pointer;
`;

const NavigationMenuTab = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: #333333;
    padding: 17px 13px;
    cursor: pointer;
    border-bottom: ${({ idx, tabActive }) =>
      idx !== tabActive && '1px solid blue'};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
  }
`;

const NavigationAside = styled.aside`
  padding: 17px 13px;

  li {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const AsideList = styled.ul`
  display: flex;

  i {
    height: 15px;
    margin-right: 20px;
    padding: 0 10px;
    border-right: 1px solid gray;
    cursor: pointer;
  }
`;

const LoggedAsideList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;

  i {
    margin-right: 15px;
  }

  button {
    padding: 0;
  }
`;

const LoggedUserList = styled.li``;

const LoggedUserButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 9999px;
  border: ${({ clickUserButton }) => (clickUserButton ? '2px' : '1px')} solid
    ${({ clickUserButton }) => (clickUserButton ? '  #258bf7' : '#d1d1d1')};
  background-color: #d1d1d1;

  i {
    margin: 0;
    color: white;
    font-size: 18px;
    padding: 0;
    cursor: pointer;
  }
`;

const AlarmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  i.fa-bell {
    margin: 0;
    font-size: 18px;
    padding: 0;
    cursor: pointer;
  }
`;

const CompanyService = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const ExploreContent = styled.div`
  width: 100%;
  max-height: ${(props) => (props.displayExplore ? '2000px' : '0px')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  transition: ${(props) =>
    props.displayExplore ? 'max-height 0.8s ease-in-out' : 'none'};
`;

const ExploreContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1060px;
  margin: 0 auto;

  div:nth-child(2) {
    padding-top: 71.8px;
  }

  div:last-child {
    margin-bottom: 20px;
  }
`;

const HideMain = styled.div`
  display: ${(props) => (props.displayExplore ? 'display' : 'none')};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Nav;
