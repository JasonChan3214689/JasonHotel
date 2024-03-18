import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const expandAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const NavBaritem = styled.li`
  font-size: 1rem;
  list-style-type: none;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    background-color: var(--color-gold-600);
    animation: ${expandAnimation} 0.3s forwards;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--color-gold-600);
      }
    `}

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    padding: 10px 0;
  }
`;

const StyledNavBarList = styled.ul`
  color: white;
  display: flex;
  gap: 4rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavBarList = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split("/").filter((x) => x);
    setActiveItem(paths[0]);
  }, [location]);

  function handleItemClick(path, itemName) {
    navigate(path);
    setActiveItem(itemName);
  }

  return (
    <StyledNavBarList>
      <NavBaritem
        isActive={activeItem === "roomDetail"}
        onClick={() => handleItemClick("/roomDetail", "roomDetail")}
      >
        客房與套房
      </NavBaritem>
      <NavBaritem
        isActive={activeItem === "hotelExperience"}
        onClick={() => handleItemClick("/hotelExperience", "hotelExperience")}
      >
        酒店體驗
      </NavBaritem>
      <NavBaritem
        isActive={activeItem === "dining"}
        onClick={() => handleItemClick("/dining", "dining")}
      >
        精選餐廳
      </NavBaritem>
      <NavBaritem
        isActive={activeItem === "meetings"}
        onClick={() => handleItemClick("/meetings", "meetings")}
      >
        會議及宴會
      </NavBaritem>
    </StyledNavBarList>
  );
};

export default NavBarList;
