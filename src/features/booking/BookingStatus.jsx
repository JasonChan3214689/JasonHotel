import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 引入样式
import { format, differenceInCalendarDays, addDays } from "date-fns";

const StyledBookingStatus = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background-color: var(--color-gold-300);
`;

const BookingStatus = () => {
  const today = new Date();

  const [searchParams, setSearchParams] = useSearchParams();

  const initialStartDate = searchParams.get("startDate")
    ? new Date(searchParams.get("startDate"))
    : today;

  const initialEndDate = searchParams.get("endDate")
    ? new Date(searchParams.get("endDate"))
    : addDays(today, 1);

  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const [childrens, setChildren] = useState(
    searchParams.get("childrens") || ""
  );
  const [adults, setAdults] = useState(searchParams.get("adults") || "");
  const [numNights, setNumNights] = useState(
    differenceInCalendarDays(endDate, startDate)
  );

  useEffect(() => {
    setNumNights(differenceInCalendarDays(endDate, startDate));
  }, [startDate, endDate]);

  function handleSubmit() {
    setSearchParams({
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
      adults,
      childrens,
      numNights,
    });
  }

  return (
    <StyledBookingStatus>
      <span>你的入住:</span>

      <div>
        入住日期:
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={today}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        退房日期:
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          minDate={addDays(startDate, 1)}
          dateFormat="yyyy-MM-dd"
        />
      </div>

      <div>
        成人數目:
        <input
          type="number"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
        />
      </div>

      <div>
        入住天數:
        {numNights}
      </div>
      <div>
        小童數目:
        <input
          type="number"
          value={childrens}
          onChange={(e) => setChildren(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>修改</button>
    </StyledBookingStatus>
  );
};

export default BookingStatus;
