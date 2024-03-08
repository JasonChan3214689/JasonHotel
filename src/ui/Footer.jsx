import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  height: auto;
  background-color: var(--color-black-600);
`;

const StyledFooterContent = styled.div`
  display: flex;
  background-color: var(--color-black-600);
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  padding: 2rem;
  gap: 15rem;
  color: var(--color-gold-300);
`;

const StyledFooterInfo = styled.div``;

const StyledFooterTitle = styled.div`
  color: var(--color-white-600);
`;

const StyledIcon = styled.i`
  font-size: 1.5rem;
  color: var(--color-gold-300);
  transition: color 0.3s;
  margin-right: 1rem;

  &:hover {
    color: var(--color-gold-500);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterInfo>
          <StyledFooterTitle>香港傑森酒店</StyledFooterTitle>
          <div>九龍梳士巴利道 香港特別行政區</div>
        </StyledFooterInfo>

        <StyledFooterInfo>
          <StyledFooterTitle>查詢</StyledFooterTitle>
          <div>+852 12345678</div>
          <div>jasonHotel@jasonHotel.com</div>
        </StyledFooterInfo>

        <StyledFooterInfo>
          <StyledFooterTitle>追蹤我們</StyledFooterTitle>

          <StyledIcon className="fab fa-facebook-square"></StyledIcon>
          <StyledIcon className="fab fa-twitter-square"></StyledIcon>
          <StyledIcon className="fab fa-instagram-square"></StyledIcon>
        </StyledFooterInfo>
      </StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
