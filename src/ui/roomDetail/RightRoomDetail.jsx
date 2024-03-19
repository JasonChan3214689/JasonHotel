import React from "react";
import styled from "styled-components";

const StyledRightImageWrapper = styled.div`
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
  text-align: right;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`;

const StyleCotentWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    width: 80%;
    margin-left: 3rem;
    padding: 4rem;
  }
`;

const StyleTitle = styled.div`
  font-size: 1.6rem;
  color: var(--color-gold-600);
  margin-bottom: 1rem;
`;

const StyleCapacity = styled.div`
  font-size: 0.8rem;
  color: var(--color-gold-600);
  margin-bottom: 1rem;
`;

const StyleDescripton = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
`;

const StyleTitleInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const RightRoomDetail = ({ image, description, title, maxCapacity }) => {
  return (
    <StyledRightImageWrapper>
      <StyleCotentWrapper>
        <StyleTitleInfoWrapper>
          <StyleTitle>{title}</StyleTitle>
          <StyleCapacity>{`可容納人數: ${maxCapacity}`}</StyleCapacity>
        </StyleTitleInfoWrapper>
        <div>
          <StyleDescripton>{description}</StyleDescripton>
        </div>
      </StyleCotentWrapper>
      <StyleImageWrapper>
        <img src={image} alt="RoomDetail" />
      </StyleImageWrapper>
    </StyledRightImageWrapper>
  );
};

export default RightRoomDetail;
