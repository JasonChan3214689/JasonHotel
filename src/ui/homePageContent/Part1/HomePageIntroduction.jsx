import Title from "../../Title";
import styled from "styled-components";

const StyledHomePagePart1 = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 2rem;
  }
`;

const StyledHomePagePart1Img = styled.div``;

const StyledHomePagePart1Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-black-600);
  margin-left: 2rem;
  margin-top: -4rem;

  span {
    margin-top: 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    margin: 2rem;
    flex-wrap;
    span {
      margin-top: 2rem;
      font-size: 0.8rem;
      
    }
  }
`;

const HomePageIntroduction = () => {
  return (
    <div>
      <Title category={"體驗"} />
      <StyledHomePagePart1>
        <StyledHomePagePart1Img>
          <img src="/hotel_intro_1.jpg" />
        </StyledHomePagePart1Img>
        <StyledHomePagePart1Content>
          <h4>重新演繹現代亞洲的經典旅遊魅力</h4>
          <span>
            開業90年，傑森酒店業翹楚，時至今天繼續為酒店奠立高水平新標準。今年，《福布斯旅遊指南》年度星級評級名單上，傑森酒店集團旗下十間酒店皆獲五星評級，成為《福布斯旅遊指南》評選史上初次有酒店集團旗下所有酒店均榮獲五星評級的酒店品牌。
          </span>
        </StyledHomePagePart1Content>
      </StyledHomePagePart1>
    </div>
  );
};

export default HomePageIntroduction;
