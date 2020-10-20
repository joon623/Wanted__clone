import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
function CompanySlide() {
  return (
    <Container>
      <StyledSlider {...settings}>
        {IMGS.map((el, index) => {
          return (
            <IMG backgroundColor={index === 1 ? '#d3def7' : '#fbb1d4'}>
              <img src={el.imgUrl} />
            </IMG>
          );
        })}
      </StyledSlider>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;
const StyledSlider = styled(Slider)`
  width: 100vw;
  height: 300px;
  margin: 0 auto;
`;
const IMG = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const IMGS = [
  {
    id: 1,
    imgUrl: 'Images/CompanyLists/banner1.png',
  },
  {
    id: 2,
    imgUrl: 'Images/CompanyLists/banner2.png',
  },
];
export default CompanySlide;
