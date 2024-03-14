import styled from "styled-components";

import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helper";
import BookingModal from "../../ui/BookingModal";
import LoginForm from "../auth/LogInForm";
import HotelroomBookingButton from "./HotelroomBookingButton";

const StyledHotelRoomWrapper = styled.div`
  margin: 1rem;
  position: relative;
  display: flex;
  padding: 2rem;
  background-color: var(--color-black-600);
  font-size: 1.4rem;
`;

const StyledHotelImgWrapper = styled.div`
  width: 350px;
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
  padding: 1rem;
`;

const StyledHotelRoomTitle = styled.div`
  color: var(--color-gold-300);
  font-size: 2rem;
  font-weight: 600;
`;

const StyledHotelRoomCapacity = styled.div`
  color: var(--color-gold-600);
  font-size: 1.2rem;
  font-weight: 200;
`;

const StyledHotelRoomDescription = styled.div`
  padding: 1.5rem;
  background-color: var(--color-gold-600);
  color: var(--color-white-300);
  margin: 2rem;
`;

const StyledHotelRoomBookingDate = styled.div`
  color: var(--color-white-300);
  margin: 2rem;
  font-size: 1.2rem;
`;

const StyledHotelRoomButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0px;
  right: 0;
  gap: 2rem;
`;

const StyledHotelRoomBookingPriceContent = styled.div`
  text-align: center;
  width: 30%;
  padding: 1rem;
  color: var(--color-white-300);
  background-color: var(--color-gold-600);
  padding: rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledHotelRoomBookingPriceRegular = styled.div`
  font-size: 0.9rem;
  color: var(--color-white-300);
`;

const HighlightedText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-);
`;

const StyledHotelRoomBookingPriceContainer = styled.div`
  padding-left: 2rem;
`;

const HotelroomCard = ({ hotelroom, startDate, endDate, numNights }) => {
  console.log(hotelroom);

  const hotelDiscountPrice = formatCurrency(hotelroom.discount);
  const totalPrice = formatCurrency(hotelroom.discount * numNights);

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
          <div>{`${startDate} 至 ${endDate} 總 ${numNights} 天 可供應`}</div>
        </StyledHotelRoomBookingDate>
        <StyledHotelRoomBookingPriceContainer>
          <StyledHotelRoomBookingPriceRegular>
            {`原價: HKD ${hotelroom.regularPrice} / 官網訂購優惠:`}
          </StyledHotelRoomBookingPriceRegular>
          <StyledHotelRoomBookingPriceContent>
            <div>
              <HighlightedText>平均每晚: {hotelDiscountPrice}</HighlightedText>
            </div>
            <div>
              <HighlightedText>總需要: {totalPrice}</HighlightedText>
            </div>
          </StyledHotelRoomBookingPriceContent>
        </StyledHotelRoomBookingPriceContainer>
        <StyledHotelRoomButtonWrapper>
          <HotelroomBookingButton hotelroom={hotelroom} />
        </StyledHotelRoomButtonWrapper>
      </StyledHotelImgRightSide>
    </StyledHotelRoomWrapper>
  );
};

export default HotelroomCard;
