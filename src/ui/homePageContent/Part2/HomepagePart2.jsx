import styled from "styled-components";
import Title from "../../Title";
import HotelRoomIntro from "./HotelRoomIntro";

const StyledHomePagePart2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--color-black-100);
  margin-bottom: 1rem;
`;

const HomepagePart2 = () => {
  return (
    <StyledHomePagePart2>
      <Title category="住宿" />
      <HotelRoomIntro />
    </StyledHomePagePart2>
  );
};

export default HomepagePart2;
