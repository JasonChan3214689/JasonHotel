import styled from "styled-components";
import Button from "../../Button";
import { useState } from "react";
import BookingMenuForm from "../../../features/booking/BookingMenuForm";

const StyledNavBarContact = styled.div`
  position: absolute;
  right: 0;
  font-size: 1rem;
  z-index: 10;

  .menu-content {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    display: none;
  }

  .menu-content.open {
    display: block;
  }

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return <StyledNavBarContact></StyledNavBarContact>;
};

export default NavbarContact;
