import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledInformationBarHotelName = styled.div`
  color: var(--color-gold-300);
  font-size: 1rem;
`;

const InformationBarHotelName = () => {
  return (
    <StyledInformationBarHotelName>
      <NavLink to={"/"}>Jason Hotel</NavLink>
    </StyledInformationBarHotelName>
  );
};

export default InformationBarHotelName;
