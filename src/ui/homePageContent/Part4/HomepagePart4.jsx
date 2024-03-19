import styled from "styled-components";
import Title from "../../Title";
import HotelPhotoGallery from "../../HotelPhotoGallery";

const StyledHomePagePart4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-black-100);
  margin-bottom: 1rem;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledRestaurantImageWrapper = styled.div`
  width: 60%;
  height: auto;
  z-index: -1;
  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledRestaurantInfoWrapper = styled.div`
  width: 60%;
  height: 350px;
  z-index: 1;
  position: absolute;
  top: 10%;
  right: -10%;
  background-color: var(--color-white-100);
  box-shadow: var(--shadow-md);
  color: var(--color-black-600);
  padding: 4rem;

  span {
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    top: 0%;
    right: -0%;
    display: block;
    padding: 3rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

const HomepagePart4 = () => {
  const images = [
    "/hotel_food_1.jpg",
    "/hotel_food_2.jpg",
    "/hotel_food_3.jpg",
  ];

  return (
    <div>
      <StyledHomePagePart4>
        <Title category="特色佳餚" />
        <StyledInfoWrapper>
          <StyledRestaurantImageWrapper>
            <img src="hotel_restaurent_1.jpg" />
          </StyledRestaurantImageWrapper>
          <StyledRestaurantInfoWrapper>
            <h3>珍饌盛宴</h3>
            <span>
              探索一個以數十年的卓越烹飪和服務為基礎的迷人餐飲地點，這裡有大家深受喜愛的餐廳、壯麗的維海景色及香港獨有的味道，以及擁有創新、創造力互相結合的餐飲人才。香港以豐富文化與藝術饒有特色，結合飲食文化匯聚於此，讓您一起感受美食為靈感的感官體驗。
            </span>
          </StyledRestaurantInfoWrapper>
        </StyledInfoWrapper>
        <HotelPhotoGallery images={images} />
      </StyledHomePagePart4>
    </div>
  );
};

export default HomepagePart4;
