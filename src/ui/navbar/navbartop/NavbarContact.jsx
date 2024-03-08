import styled from "styled-components";
import Button from "../../Button";

const StyledNavBarContact = styled.div`
  position: absolute;
  right: 0;
  font-size: 1rem;

  span {
    color: white;
  }

  span::after {
    content: "|";
    color: white;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  span:last-child::after {
    content: none;
  }
`;

const NavbarContact = () => {
  return (
    <StyledNavBarContact>
      <span>聯絡我們</span>
      <Button variation="primary">預訂客房</Button>
    </StyledNavBarContact>
  );
};

export default NavbarContact;
