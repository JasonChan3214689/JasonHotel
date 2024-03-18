import React from "react";
import Title from "../Title";
import styled from "styled-components";

const StyleTitleWrapper = styled.div`
  margin: 1rem;
`;

const StyleTitleIntroImageWrapper = styled.div`
  width: 60%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;

const StyleContentWrapper = styled.div`
  width: 50%;
  height: auto;
`;

const StyleTitle = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 1.5srem;
  font-weight: 400;
  color: var(--color-gold-600);
`;

const StyleContent = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-black-300);
`;

const RoomDetailIntro = () => {
  return (
    <>
      <StyleTitleWrapper>
        <Title category="客房與套房" />
      </StyleTitleWrapper>
      <StyleTitleIntroImageWrapper>
        <img src="/RoomDetail.jpg" alt="Room Detail" />
      </StyleTitleIntroImageWrapper>
      <StyleContentWrapper>
        <StyleTitle>香港獨有</StyleTitle>
        <StyleContent>
          經翻新的客房設計集古典優雅韻味及時尚格調於一身，設計以簡潔高雅為原則，名貴裝潢物料與精湛造工相輔相成，並融匯當今豪華遊艇、名貴轎車及私人飛機的高科技裝潢特色。
        </StyleContent>
      </StyleContentWrapper>
    </>
  );
};

export default RoomDetailIntro;
