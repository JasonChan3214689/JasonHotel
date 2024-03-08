import Button from "../../Button";
import styled from "styled-components";
import NavbarHotelIcon from "./NavbarHotelIcon";
import NavbarContact from "./NavbarContact";

const StyledNavBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;

const NavbarTop = () => {
  return (
    <StyledNavBarTop>
      <NavbarHotelIcon />
      <NavbarContact />
    </StyledNavBarTop>
  );
};

export default NavbarTop;
