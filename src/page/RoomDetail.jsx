import React from "react";
import RoomDetailIntro from "../ui/roomDetail/RoomDetailIntro";
import styled from "@emotion/styled";
import { useHotelroom } from "../hooks/hotelroom/useHotelroom";
import { useAllHotelroom } from "../hooks/hotelroom/useAllHotelroom";
import LeftRoomDetail from "../ui/roomDetail/LeftRoomDetail";
import RightRoomDetail from "../ui/roomDetail/RightRoomDetail";
import BookingBar from "../features/booking/BookingBar";

const SylerRoomDetailWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RoomDetail = () => {
  const { hotelrooms } = useAllHotelroom();
  console.log(hotelrooms);

  return (
    <SylerRoomDetailWrapper>
      <BookingBar />
      <RoomDetailIntro />
      {hotelrooms?.map((hotelroom, index) =>
        index % 2 === 0 ? (
          <RightRoomDetail
            key={index}
            maxCapacity={hotelroom.maxCapacity}
            image={hotelroom.image}
            description={hotelroom.description}
            title={hotelroom.name}
          />
        ) : (
          <LeftRoomDetail
            key={index}
            maxCapacity={hotelroom.maxCapacity}
            image={hotelroom.image}
            description={hotelroom.description}
            title={hotelroom.name}
          />
        )
      )}
    </SylerRoomDetailWrapper>
  );
};

export default RoomDetail;
