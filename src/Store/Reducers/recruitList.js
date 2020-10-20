const recruitListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECRUIT_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default recruitListReducer;

const INITIAL_STATE = [
  {
    id: 0,
    title: '[Hosting KR]백엔드 개발(Back-end Developer)',
    company_name: '메가존클라우드',
    thumbnail_url: '/Images/Search/Recruit1.jpg',
    location: '서울',
  },
  {
    id: 1,
    title: '[Cloud Apps]백엔드 개발(Back-end Developer)',
    company_name: '메가존클라우드',
    thumbnail_url: '/Images/Search/Recruit2.jpg',
    location: '서울',
  },
  {
    id: 2,
    title: '시니어 백엔드 엔지니어 (Back-end)',
    company_name: '이쿠얼키(인공지능수학 깨봉)',
    thumbnail_url: '/Images/Search/Recruit3.jpg',
    location: '서울',
  },
  {
    id: 3,
    title: '백엔드 개발',
    company_name: '미디움',
    thumbnail_url: '/Images/Search/Recruit4.jpg',
    location: '서울',
  },
  {
    id: 4,
    title: '백엔드 개발자(JAVA)',
    company_name: '와그(WAUG)',
    thumbnail_url: '/Images/Search/Recruit5.jpg',
    location: '서울',
  },
  {
    id: 5,
    title: '백엔드팀 QA (6년 이상)',
    company_name: '민병철교육그룹',
    thumbnail_url: '/Images/Search/Recruit6.jpg',
    location: '서울',
  },
  {
    id: 6,
    title: '백엔드 개발 (Java/Spring)',
    company_name: '29CM(에이플러스비)',
    thumbnail_url: '/Images/Search/Recruit7.jpg',
    location: '서울',
  },
  {
    id: 7,
    title: '서버(백엔드) 개발자',
    company_name: '글로벌머니익스프레스',
    thumbnail_url: '/Images/Search/Recruit8.jpg',
    location: '서울',
  },
  {
    id: 8,
    title: 'Node.js 백엔드 개발자',
    company_name: '캡박스',
    thumbnail_url: '/Images/Search/Recruit1.jpg',
    location: '서울',
  },
];
