import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const StyledMessageWraper = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem;
`;

const EmptyBookingRecord = () => {
  const navigate = useNavigate();

  function handleOnClck() {
    navigate("/");
  }

  return (
    <>
      <StyledMessageWraper>
        <div>你暫時沒有Booking記錄~</div>{" "}
        <Button size="small" onClick={handleOnClck}>
          回主頁
        </Button>
      </StyledMessageWraper>
    </>
  );
};

export default EmptyBookingRecord;
