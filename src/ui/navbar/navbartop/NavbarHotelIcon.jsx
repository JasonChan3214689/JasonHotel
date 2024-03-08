import styled from "styled-components";

const StyledNavBarHotelIcon = styled.div`
  margin: 1rem !important;
  img {
    height: 80px;
    width: 120px;
  }
`;

const NavbarHotelIcon = () => {
  return (
    <StyledNavBarHotelIcon>
      <img src="logo-light.png"></img>
    </StyledNavBarHotelIcon>
  );
};

export default NavbarHotelIcon;
