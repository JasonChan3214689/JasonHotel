import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-black-600);
  margin-bottom: 2rem;
`;

const StyledHotelTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 100;
`;

const StyledCategory = styled.div`
  font-size: 2rem;
  font-weight: 100;
`;

const Divider = styled.div`
  width: 6rem;
  border-bottom: 1px solid var(--color-gold-300);
  margin-top: 1rem;
`;

const Title = ({ category }) => {
  return (
    <StyledTitle>
      <StyledHotelTitle>傑森酒店</StyledHotelTitle>
      <StyledCategory>{category}</StyledCategory>
      <Divider />
    </StyledTitle>
  );
};

export default Title;
