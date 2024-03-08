import styled from "styled-components";
import HomePagePart1Contact from "./HomePagePart1Contact";
import HomePageIntroduction from "./HomePageIntroduction";
import HotelPhotoGallery from "../../HotelPhotoGallery";

const StyledHomePagePart1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-black-100);
  margin-bottom: 1rem;
`;

const HomepagePart1 = () => {
  const images = [
    "/hotel_intro_2.jpg",
    "/hotel_intro_3.jpg",
    "/hotel_intro_4.jpg",
  ];

  return (
    <StyledHomePagePart1>
      <HomePagePart1Contact />
      <HomePageIntroduction />
      <HotelPhotoGallery images={images} />
    </StyledHomePagePart1>
  );
};

export default HomepagePart1;
