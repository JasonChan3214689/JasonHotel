import React from "react";
import BookingBar from "../features/booking/BookingBar";
import styled from "styled-components";
import BookingStatus from "../features/booking/BookingStatus";
import { useSearchParams } from "react-router-dom";
import { differenceInCalendarDays } from "date-fns";
import { format } from "date-fns";

const StyledBookingStatusWrapper = styled.div`
  display: flex;
  position: relative;
  height: 1300px;
`;

const Booking = () => {
  const [searchParams] = useSearchParams();
  const startDate = new Date(searchParams.get("startDate"));
  const endDate = new Date(searchParams.get("endDate"));
  const numNights = differenceInCalendarDays(endDate, startDate);
  const adults = searchParams.get("adults");
  const childrens = searchParams.get("children");

  return (
    <>
      <StyledBookingStatusWrapper>
        <BookingStatus
          startDate={format(startDate, "yyyy-MM-dd")}
          endDate={format(endDate, "yyyy-MM-dd")}
          adults={adults}
          childrens={childrens}
          numNights={numNights}
        />
      </StyledBookingStatusWrapper>
    </>
  );
};

export default Booking;
