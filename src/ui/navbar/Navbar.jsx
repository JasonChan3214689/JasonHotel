import styled from "styled-components";
import NavbarTop from "./navbartop/NavbarTop";
import NavbarBottom from "./navbarbottom/NavbarBottom";

const StyledNavBarWrapper = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  align-items: center;
  position: relative;

  background-image: url("/backgroubd_1440.jpg");
  background-position: 40% 20%;
  background-size: auto;
  background-attachment: fixed;
`;

const Navbar = () => {
  return (
    <StyledNavBarWrapper>
      <NavbarTop />
      <NavbarBottom />
    </StyledNavBarWrapper>
  );
};

export default Navbar;
