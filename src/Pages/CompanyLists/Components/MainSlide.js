import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../../config';

const moveSlideLength = 400;

function MainSlide() {
  const [jobCategoryData, setjobCategoryData] = useState([]);
  const [x_axis, setX_axis] = useState(0);

  useEffect(() => {
    fetch(`${API}/recruit/`)
      .then((response) => response.json())
      .then((response) => setjobCategoryData(response.data.menu_list));
  }, []);

  return (
    <Container>
      <Content>
        <PreButton
          preButton
          preVisibleNum={x_axis}
          onClick={() => setX_axis(x_axis + moveSlideLength)}
        >
          <i className="fas fa-angle-left leftArrow" />
        </PreButton>
        <Slide>
          {jobCategoryData.map((el) => (
            <List key={el.id}>
              <SlideItem left={x_axis}>
                <Img src={el.image} alt={el.alt} />
                <OpacityBox />
                <CategoryText>{el.name}</CategoryText>
              </SlideItem>
            </List>
          ))}
        </Slide>
        <NextButton
          nextButton
          nextVisibleNum={x_axis}
          onClick={() => setX_axis(x_axis - moveSlideLength)}
        >
          <i className="fas fa-angle-right rightArrow" />
        </NextButton>
      </Content>
    </Container>
  );
}

export default MainSlide;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2px auto 0;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e1e2e3;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1200px;
  height: 120px;
  overflow: hidden;
  cursor: pointer;
`;

const List = styled.li`
  list-style: none;
  margin-right: 10px;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 1050px;
  height: 120px;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  width: 150px;
  height: 80px;
  background-color: white;
  opacity: 0.33;
  z-index: 3;
  cursor: pointer;
`;

const PreButton = styled(Button.withComponent('button'))`
  left: 10px;
  visibility: ${({ preVisibleNum, preButton }) =>
    preVisibleNum === 0 ? (preButton = 'hidden') : ''};
  cursor: pointer;

  .leftArrow {
    font-size: 50px;
    margin-right: 80px;
  }
`;

const NextButton = styled(Button.withComponent('button'))`
  right: 10px;
  visibility: ${({ nextVisibleNum, nextButton }) =>
    nextVisibleNum === -(moveSlideLength * 3) ? (nextButton = 'hidden') : ''};

  .rightArrow {
    font-size: 50px;
    margin-left: 80px;
  }
`;

const SlideItem = styled.div`
  position: relative;
  width: 140px;
  height: 80px;
  left: ${({ left }) => left}px;
  transition: left 0.3s ease;
`;

const Img = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const OpacityBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.8) 0,
    rgba(46, 49, 49, 0.5)
  );
`;

const CategoryText = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 35px;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: bolder;
`;
