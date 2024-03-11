import React, { useState } from "react";
import BookingBar from "../features/booking/BookingBar";
import styled from "styled-components";
import BookingStatus from "../features/booking/BookingStatus";
import { useSearchParams } from "react-router-dom";
import { differenceInCalendarDays } from "date-fns";
import { format } from "date-fns";
import HotelroomTable from "../features/booking/HotelroomTable";

const StyledBookingStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Booking = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <>
      <StyledBookingStatusWrapper>
        <BookingStatus setShowSpinner={setShowSpinner} />
        <HotelroomTable showSpinner={showSpinner} />
      </StyledBookingStatusWrapper>
    </>
  );
};

export default Booking;
