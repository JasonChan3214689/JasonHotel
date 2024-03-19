import styled from "styled-components";

const StyledHotelPhotoGallery = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const StyledImgWrapper = styled.div`
  width: 35%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 100%;
    span {
      padding: 4rem;
      margin-top: 2rem;
      font-size: 1rem;
    }
  }
`;

const HotelPhotoGallery = ({ images }) => {
  return (
    <StyledHotelPhotoGallery>
      {images.map((src, index) => (
        <StyledImgWrapper key={index}>
          <img src={src} alt={`Hotel image ${index + 1}`} />
        </StyledImgWrapper>
      ))}
    </StyledHotelPhotoGallery>
  );
};

export default HotelPhotoGallery;
