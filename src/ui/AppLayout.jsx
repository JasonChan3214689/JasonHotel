import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import InformationBar from "./InformationBar/InformationBar";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppLayout = () => {
  return (
    <>
      <InformationBar />
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
