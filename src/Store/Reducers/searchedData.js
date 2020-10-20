const searchedDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCHED_DATA':
      return state;
    default:
      return state;
  }
};

export default searchedDataReducer;

const INITIAL_STATE = [
  {
    id: 0,
    name: '카카오페이지',
    category: 'IT, 컨텐츠',
    imgSrc: '/Images/Search/카카오페이지.jpg',
  },
  {
    id: 1,
    name: '카카오뱅크',
    category: '금융',
    imgSrc: '/Images/Search/카카오뱅크.jpg',
  },
  {
    id: 2,
    name: '카카오(KAKAO)',
    category: 'IT, 컨텐츠',
    imgSrc: '/Images/Search/카카오.jpg',
  },
  {
    id: 3,
    name: '카카오페이(Kakaopay)',
    category: 'IT, 컨텐츠',
    imgSrc: '/Images/Search/카카오페이.jpg',
  },
  {
    id: 4,
    name: '카카오모빌리티(KakaoMobility)',
    category: 'IT, 컨텐츠',
    imgSrc: '/Images/Search/카카오모빌리티.jpg',
  },

  {
    id: 5,
    name: '카카오메이커스',
    category: 'IT, 컨텐츠',
    imgSrc: '/Images/Search/카카오메이커스.jpg',
  },
];
