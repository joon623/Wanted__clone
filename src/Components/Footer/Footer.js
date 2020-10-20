import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <InnerContainer>
          <InnerHeader>
            <img src="/Images/Footer/cuted_full.png" alt="cutedImg" />
            <ul>
              {FOOTER_INFO.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </InnerHeader>
          <InnerText>
            <p>
              (주)큐티드랩 (대표이사:큐티연성) | 서울특별시 송파구 올림픽로
              300|통신판매번호 : 2016-서울강남-00207 <br />
              유료직업소개사업등록번호 : (국내) 제2016-3220163-14-5-00001호 |
              (국외) F1201020170005 | 사업자등록번호 : 299-86-00021 <br />©
              Wantedlab, Inc.
            </p>
          </InnerText>
        </InnerContainer>
        <SelectWrapper>
          <KoreaImg src="/Images/Footer/korea.png" alt="koreaLogo" />
          <CountrySelector>
            {COUNTRY_WRAPPER.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </CountrySelector>
        </SelectWrapper>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  padding: 30px 0 70px;
  background-color: #2b2d2e;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  max-width: 1060px;
`;

const InnerHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  width: 100%;

  img {
    width: 66px;
    height: 14px;
    margin-right: 45px;
  }

  ul {
    display: flex;

    li {
      margin-right: 45px;
    }
  }
`;

const InnerText = styled.div`
  width: 100%;
  line-height: 1.66667em;
  font-size: 12px;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const KoreaImg = styled.img`
  width: 20px;
  height: 14px;
  position: absolute;
  top: 12px;
  left: 18px;
`;

const CountrySelector = styled.select`
  width: 250px;
  height: 36px;
  padding: 8px 45px;
  background-color: black;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  outline: none;
`;

const FOOTER_INFO = ['이용약관', '개인정보 처리방침', '고객센터'];

const COUNTRY_WRAPPER = [
  '한국(한국어)',
  '日本 (日本語)',
  '台灣 (繁體中文)',
  'Worldwide (English)',
  'Hong Kong (English)',
  'Singapore (English)',
];
