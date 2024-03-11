import React from "react";
import { useSearchParams } from "react-router-dom";
import { useHotelroom } from "../../hooks/hotelroom/useHotelroom";
import HotelroomCard from "./HotelroomCard";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const StyledHotelRoomWrapper = styled.div`
  margin: 1rem;
  display: flex;

  flex-direction: column;
  gap: 2rem;
`;

const HotelroomTable = ({ showSpinner }) => {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const numNights = searchParams.get("numNights");
  const totalPeople = searchParams.get("totalPeople");
  const { hotelrooms, isLoading } = useHotelroom(totalPeople);

  if (isLoading) return <Spinner />;

  return (
    <div>
      {showSpinner ? (
        <Spinner />
      ) : (
        <StyledHotelRoomWrapper>
          {hotelrooms?.map((hotelroom, index) => (
            <HotelroomCard
              key={index}
              hotelroom={hotelroom}
              startDate={startDate}
              endDate={endDate}
              numNights={numNights}
            />
          ))}
        </StyledHotelRoomWrapper>
      )}
    </div>
  );
};

export default HotelroomTable;
