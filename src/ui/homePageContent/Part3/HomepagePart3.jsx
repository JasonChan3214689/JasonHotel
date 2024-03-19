import styled from "styled-components";
import Title from "../../Title";

const StyledHomePagePart3 = styled.div`
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
    url("/nightviews_banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0%, 0%;
  background-attachment: fixed;
`;

const StyledHomePagePart3Content = styled.div`
  color: var(--color-white-300);
  font-weight: 100;
  text-align: center;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    margin-bottom: 2rem;
  }

  span {
    color: var(--color-white-300);
    display: block;
    max-width: 40%;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    margin: 2rem;
    span {
      max-width: 80%;
      font-size: 1.2rem;
    }
  }
`;

const HomepagePart3 = () => {
  return (
    <StyledHomePagePart3>
      <StyledHomePagePart3Content>
        <div>關於傑森酒店</div>
        <span>
          傑森酒店以全世界最矚目的目的地，打造高端奢華的酒店而為世人熟知。
          我們亦以無與倫比的體貼服務著稱，我們專業的服務團隊滿懷熱情，愛崗敬業，了解熟知其所在的城市。
        </span>
      </StyledHomePagePart3Content>
    </StyledHomePagePart3>
  );
};

export default HomepagePart3;
