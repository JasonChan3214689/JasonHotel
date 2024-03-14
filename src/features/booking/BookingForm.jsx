import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import { useUser } from "../../hooks/user/useUser";
import useGuest from "../../hooks/user/useGuest";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import useBooking from "../../hooks/booking/useBooking";
import Spinner from "../../ui/Spinner";

const BookingForm = ({ hotelroom, onClose }) => {
  const [isBreakfast, setIsBreakfast] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const [searchParams] = useSearchParams();
  const { user } = useUser();
  const { guests } = useGuest(user.id);
  const { createBooking, isLoading } = useBooking();

  const numNights = searchParams.get("numNights");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const totalPeople = searchParams.get("totalPeople");
  const averagePrice = formatCurrency(hotelroom.discount);
  const roomId = hotelroom.id;
  const guestId = guests?.at(0).id;

  const userfullName = user.user_metadata.fullName;
  const userEmail = guests?.at(0).email;

  const { register, handleSubmit } = useForm();

  const roomPrice = hotelroom.discount * numNights;
  const breakfastPrice = isBreakfast ? 40 * numNights : 0;
  const TotalPricePassData = roomPrice + breakfastPrice;
  const calculatedTotalPrice = formatCurrency(roomPrice + breakfastPrice);

  useEffect(() => {
    setTotalPrice(calculatedTotalPrice);
  }, [isBreakfast, calculatedTotalPrice]);

  if (isLoading) return <Spinner />;

  function onSubmit(data) {
    const bookingDateTime = new Date();
    const bookingDateTimeISO = bookingDateTime.toISOString();
    console.log(bookingDateTimeISO);

    const newBooking = {
      created_at: bookingDateTimeISO,
      startDate,
      endDate,
      numNights,
      numGuests: totalPeople,
      roomPrice: roomPrice,
      extrasPrice: breakfastPrice,
      totalPrice: TotalPricePassData,
      status: "unconfirmed",
      hasBreakfast: isBreakfast,
      isPaid: false,
      observations: null,
      roomId,
      guestId,
      phoneNumber: data.phoneNumber,
      email: data.email,
    };

    createBooking(newBooking, {
      onSuccess: () => {
        onClose?.();
      },
    });

    console.log(newBooking);
  }

  return (
    <>
      <div>你所選購的:</div>
      <div>
        {hotelroom.name}
        <img src={hotelroom.image} alt="hotel room"></img>
        <div>入住時間: {startDate}</div>
        <div>入住時間: {endDate}</div>
        <div>入住天數: {numNights} 天</div>
        <div>總人數: {totalPeople} 人</div>
        <div>總需付: {totalPrice}</div>
        <div>平址每日:{averagePrice} </div>
        <hr></hr>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>你的入住資料:</div>
          <div>
            <label>姓名:</label>
            <input
              type="text"
              id="userfullName"
              defaultValue={userfullName}
              {...register("usefullName", {
                required: "請輸入資料",
              })}
            />
          </div>
          <div>
            <label>電話:</label>
            <input
              type="text"
              id="userPhone"
              {...register("phoneNumber", {
                required: "請輸入資料 ",
              })}
            />
          </div>
          <div>
            <label>電郵地址:</label>
            <input
              type="text"
              id="email"
              defaultValue={userEmail}
              {...register("email", {
                required: "請輸入資料",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "請提供正確的電子鄱件",
                },
              })}
            />
          </div>
          <div>
            <label>需要我們提供早餐嗎?</label>
            <input
              type="checkbox"
              id="breakfast"
              onChange={(e) => setIsBreakfast(e.target.checked)}
            />
          </div>
          <div>(每天需多付40元HKD)</div>
          <hr></hr>
          <div>付款方式:</div>
          <div>很抱歉，我們現在只支援現金付款方式</div>
          <Button type="submit">預訂</Button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
