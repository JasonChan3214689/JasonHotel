import styled from "styled-components";
import React from "react";
import Button from "../../ui/Button";

const StyledHotelRoomWrapper = styled.div`
  position: relative;
  display: flex;
  padding: 2rem;
  background-color: var(--color-black-600);
  font-size: 1.4rem;
  box-shadow: var(--shadow-md);
`;

const StyledHotelImgWrapper = styled.div`
  width: 400px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const StyledHotelImgLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHotelImgRightSide = styled.div`
  padding: 2rem;
`;

const StyledHotelRoomTitle = styled.div`
  color: var(--color-gold-300);
  font-size: 2.5rem;
  font-weight: 600;
`;

const StyledHotelRoomCapacity = styled.div`
  color: var(--color-gold-600);
  font-size: 1.2rem;
  font-weight: 200;
`;

const StyledHotelRoomDescription = styled.div`
  padding: 2rem;
  background-color: var(--color-gold-600);
  color: var(--color-white-300);
  margin: 2rem;
`;

const StyledHotelRoomBookingDate = styled.div`
  color: var(--color-white-300);
  margin: 2rem;
  font-size: 1.2rem;
`;

const StyledHotelRoomBookingPriceWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 1;
  right: 0;
  gap: 2rem;
`;

const StyledHotelRoomBookingPriceContent = styled.div`
  font-size: 1.2rem;
  color: var(--color-white-300);
  font-weight: bold;
  background-color: var(--color-gold-600);
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledHotelRoomBookingPriceRegular = styled.div`
  font-size: 0.9rem;
  color: var(--color-white-300);
`;

const HighlightedText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-);
`;

const HotelroomCard = ({ hotelroom, startDate, endDate, numNights }) => {
  console.log(hotelroom);

  return (
    <StyledHotelRoomWrapper>
      <StyledHotelImgLeftSide>
        <StyledHotelImgWrapper>
          <img src={hotelroom.image} />
        </StyledHotelImgWrapper>
      </StyledHotelImgLeftSide>

      <StyledHotelImgRightSide>
        <StyledHotelRoomTitle>{hotelroom.name}</StyledHotelRoomTitle>

        <StyledHotelRoomCapacity>
          可容納人數:{hotelroom.maxCapacity}
        </StyledHotelRoomCapacity>
        <StyledHotelRoomDescription>
          {hotelroom.description}
        </StyledHotelRoomDescription>
        <StyledHotelRoomBookingDate>
          <div>
            {startDate} 至 {endDate}
          </div>
          <div>總{numNights}天 可供應</div>
        </StyledHotelRoomBookingDate>

        <StyledHotelRoomBookingPriceWrapper>
          <StyledHotelRoomBookingPriceRegular>
            {`原價: HKD ${hotelroom.regularPrice}`}
          </StyledHotelRoomBookingPriceRegular>
          <StyledHotelRoomBookingPriceContent>
            <HighlightedText>HKD {hotelroom.discount}</HighlightedText>
          </StyledHotelRoomBookingPriceContent>
          <Button variant="primary">立即訂購</Button>
        </StyledHotelRoomBookingPriceWrapper>
      </StyledHotelImgRightSide>
    </StyledHotelRoomWrapper>
  );
};

export default HotelroomCard;
