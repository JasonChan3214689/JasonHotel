import styled from "styled-components";

const HomePagePart1Contact = () => {
  const StyledContactInformation = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    color: var(--color-gold-300);
    margin-bottom: 4rem;

    span {
      font-size: 0.9rem;
      margin-right: 0.5rem;

      &:last-child {
        margin-right: 0;
      }
    }
  `;
  return (
    <>
      <span>傑森酒店 九龍梳士巴利道 香港特別行政區</span>
      <StyledContactInformation>
        <span>+852 12345678</span>
        <span>jasonHotel@jasonHotel.com</span>
      </StyledContactInformation>
    </>
  );
};

export default HomePagePart1Contact;
