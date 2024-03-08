import styled from "styled-components";
import NavBarList from "./NavBarList";

const StyledNavBarBottom = styled.div`
  margin-top: 1rem;
`;

const NavbarBottom = () => {
  return (
    <StyledNavBarBottom>
      <NavBarList />
    </StyledNavBarBottom>
  );
};

export default NavbarBottom;
