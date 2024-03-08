import styled from "styled-components";
import InformationBarHotelName from "./InformationBarHotelName";
import InformationBarList from "./InformationBarList";

const StyledInformationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-black-600);
  width: 100%;
  height: 50px;
`;

const StyledInformationBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.8rem;
`;

const InformationBar = () => {
  return (
    <StyledInformationBar>
      <StyledInformationBarContent>
        <InformationBarHotelName />
        <InformationBarList />
      </StyledInformationBarContent>
    </StyledInformationBar>
  );
};

export default InformationBar;
