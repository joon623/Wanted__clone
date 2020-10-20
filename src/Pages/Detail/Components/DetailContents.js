import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import styled from 'styled-components';

function DetailContents({ google, detailList, setFollowToggle, followToggle }) {
  return (
    <>
      {!!Object.keys(detailList).length && (
        <DetailContentsBlock>
          <DetailContentsImg src={detailList.thumbnail} />
          <DetailContentsHead>
            <h2>{detailList.title}</h2>
            <SubText>
              <InnerTextList>{detailList.company_name}</InnerTextList>
              <ResBox>응답률 평균 이상</ResBox>
              <InnerTextList color='#999999'>
                {detailList.location} · 한국
              </InnerTextList>
            </SubText>
            <TagBox>#스타트업</TagBox>
            <TagBox>#스톡옵션</TagBox>
            <TagBox>#IT, 컨텐츠</TagBox>
          </DetailContentsHead>
          <InnerText>
            <InnerTextList>{detailList.intro}</InnerTextList>
          </InnerText>
          <InnerList>주요업무</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: detailList.main_work,
            }}
          ></InnerTextList>
          <InnerList>자격요건</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: detailList.condition,
            }}
          ></InnerTextList>
          <InnerList>우대사항</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: detailList.prefer,
            }}
          ></InnerTextList>
          <InnerList>혜택 및 복지</InnerList>
          <InnerTextList
            dangerouslySetInnerHTML={{
              __html: detailList.benefit,
            }}
          ></InnerTextList>
          <InnerLoction>
            <LocationText>
              <GrayText>마감일</GrayText>
              <span
                dangerouslySetInnerHTML={{
                  __html: detailList.due_date,
                }}
              ></span>
            </LocationText>
            <LocationText>
              <GrayText>근무지역</GrayText>
              <span
                dangerouslySetInnerHTML={{
                  __html: detailList.work_area,
                }}
              ></span>
            </LocationText>
          </InnerLoction>
          <div className='map'>
            <Map
              containerStyle={mapStyle}
              google={google}
              zoom={17}
              initialCenter={{
                lat: detailList.latitude,
                lng: detailList.longitude,
              }}
            >
              <Marker
                title={'LEEYEONSEONG'}
                name={'CompanyLocation'}
                position={{
                  lat: detailList.latitude,
                  lng: detailList.longitude,
                }}
              />
            </Map>
          </div>
          <FollowContainer>
            <FollowContents>
              <FollowImg src='/Images/Detail/FollowImg.jpg' />
              <div>
                <p>큐티테인먼트</p>
                <GrayText>IT, 컨텐츠</GrayText>
              </div>
            </FollowContents>
            <FollowBtn
              onClick={() => setFollowToggle(!followToggle)}
              followToggle={followToggle}
            >
              팔로우
            </FollowBtn>
          </FollowContainer>
        </DetailContentsBlock>
      )}
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyANOuE6xyd2Lb56Zu5VE8LjBAsZN3hhgGk',
})(DetailContents);

const mapStyle = {
  height: '350px',
};

const DetailContentsBlock = styled.div`
  flex-direction: column;
  margin: 0 auto;
  width: 700px;
  .map {
    position: relative;
    height: 350px;
  }
`;

const DetailContentsImg = styled.img`
  width: 100%;
  height: 450px;
  border-radius: 4px;
  @media (max-width: 992px) {
    img:nth-child(1) {
      height: 600px;
    }
  }
`;

const DetailContentsHead = styled.section`
  margin: 40px 0 30px;
  h2 {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
  span {
    margin-right: 10px;
  }
`;

const InnerText = styled.div`
  padding-right: 20px;
  span {
    line-height: 1.75;
  }
`;

const InnerList = styled.h6`
  margin-top: 20px;
  font-weight: 500;
  line-height: 1.75;
`;

const InnerLoction = styled.section`
  border-top: 1px solid #eee;
  margin-top: 20px;
  span {
    margin-right: 40px;
    margin-top: 20px;
    width: 80px;
  }
`;

const InnerTextList = styled.span`
  line-height: 1.75;
  li {
    list-style: disc;
  }
`;

const LocationText = styled.div`
  margin-bottom: 20px;
  margin-top: 30px;
`;

const FollowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  border-radius: 3px;
  border: 1px solid #e1e2e3;
  padding: 20px;
`;

const FollowImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const FollowContents = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.25;
`;

const GrayText = styled.span`
  color: #999;
  font-size: 16px;
  font-weight: 600;
`;

const FollowBtn = styled.button`
  border-radius: 3px;
  background: ${(props) => (props.followToggle ? 'white' : '#258bf7')};
  color: ${(props) => (props.followToggle ? 'black' : '#fff')};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 10px 30px;
  outline: none;
  border: ${(props) => (props.followToggle ? '1px solid black' : 'none')};
  cursor: pointer;
`;

const TagBox = styled.div`
  display: inline-block;
  margin-right: 6px;
  margin: 20px 10px 0 0;
  padding: 9px 14px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #333;
  background-color: #f3f5f8;
  border-radius: 25px;
`;

const ResBox = styled.div`
  border: 1px solid #855af0;
  color: #855af0;
  font-size: 10px;
  margin-right: 8px;
  padding: 3px;
`;

const SubText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
