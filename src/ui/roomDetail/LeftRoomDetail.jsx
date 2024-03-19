import React from "react";
import styled from "styled-components";

const StyleLeftImageWrapper = styled.div`
  gap: -1rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyleImageWrapper = styled.div`
  width: 450px;
  height: auto;
  margin: 2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const StyleCotentWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    margin-right: 0rem;
    width: 80%;
    margin-left: 3rem;
    padding: 2rem;
  }
`;

const StyleTitle = styled.div`
  font-size: 1.6rem;
  color: var(--color-gold-600);
  margin-bottom: 1rem;
`;

const StyleDescripton = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

const StyleTitleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyleCapacity = styled.div`
  font-size: 0.8rem;
  color: var(--color-gold-600);
  margin-bottom: 1rem;
`;

const LeftRoomDetail = ({ image, description, title, maxCapacity }) => {
  return (
    <StyleLeftImageWrapper>
      <StyleImageWrapper>
        <img src={image} alt="RoomDetail" />
      </StyleImageWrapper>
      <StyleCotentWrapper>
        <StyleTitleInfoWrapper>
          <StyleTitle>{title}</StyleTitle>
          <StyleCapacity>{`可容納人數: ${maxCapacity}`}</StyleCapacity>
        </StyleTitleInfoWrapper>
        <StyleDescripton>{description}</StyleDescripton>
      </StyleCotentWrapper>
    </StyleLeftImageWrapper>
  );
};

export default LeftRoomDetail;
