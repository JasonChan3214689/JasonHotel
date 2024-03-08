import styled from "styled-components";

const StyledNavBarList = styled.ul`
  color: white;
  display: flex;
  gap: 4rem;
`;
const NavBaritem = styled.li`
  font-size: 1rem;
`;

const NavBarList = () => {
  return (
    <StyledNavBarList>
      <NavBaritem>我們的酒店</NavBaritem>
      <NavBaritem>酒店體驗</NavBaritem>
      <NavBaritem>精選餐廳</NavBaritem>
      <NavBaritem>會議及宴會</NavBaritem>
    </StyledNavBarList>
  );
};

export default NavBarList;
