import React from "react";
import BookingModal from "../../ui/BookingModal";
import Button from "../../ui/Button";
import LoginForm from "../auth/LogInForm";
import { useUser } from "../../hooks/user/useUser";
import BookingLoginForm from "./BookingLoginForm";
import BookingForm from "./BookingForm";

const HotelroomBookingButton = ({ hotelroom }) => {
  const { user } = useUser();

  return (
    <BookingModal>
      <BookingModal.Open opens="booking">
        <Button variant="primary" size="small">
          立即訂購
        </Button>
      </BookingModal.Open>
      <BookingModal.Window name="booking">
        {user ? (
          <BookingForm
            hotelroom={hotelroom}
            onClose={() => BookingModal.close()}
          />
        ) : (
          <BookingLoginForm onClose={() => BookingModal.close()} />
        )}
      </BookingModal.Window>
    </BookingModal>
  );
};

export default HotelroomBookingButton;
