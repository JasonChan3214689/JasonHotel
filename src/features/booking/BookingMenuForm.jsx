import Button from "../../ui/Button";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, format, differenceInCalendarDays } from "date-fns";
import { getToday } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { MAX_PEOPLE } from "../../utils/breakpoints";

const BookingMenuForm = () => {
  const [startDate, setStartDate] = useState(getToday());
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (startDate) {
      setEndDate(addDays(startDate, 1));
    }
  }, [startDate]);

  useEffect(() => {
    const numAdults = parseInt(adults, 10) || 0;
    const numChildrens = parseInt(children, 10) || 0;
    const newTotalPeople = numAdults + numChildrens;

    setTotalPeople(newTotalPeople);
  }, [adults, children]);

  function handleClick(event) {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      startDate: format(new Date(startDate), "yyyy-MM-dd"),
      endDate: format(new Date(endDate), "yyyy-MM-dd"),
      adults: adults.toString(),
      children: children.toString(),
      numNights: differenceInCalendarDays(endDate, startDate),
      totalPeople: totalPeople.toString(),
    });
    navigate(`/bookings?${queryParams}`);
  }

  const handleAdultsChange = (e) => {
    const newAdultsValue = Math.min(parseInt(e.target.value, 10), MAX_PEOPLE);
    setAdults(newAdultsValue);

    if (newAdultsValue + children > MAX_PEOPLE) {
      setChildren(MAX_PEOPLE - newAdultsValue);
    }
  };

  const handleChildrenChange = (e) => {
    const newChildrenValue = Math.min(parseInt(e.target.value, 10), MAX_PEOPLE);
    setChildren(newChildrenValue);

    if (newChildrenValue + adults > MAX_PEOPLE) {
      setAdults(MAX_PEOPLE - newChildrenValue);
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>入住日期</label>
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <label>退房日期</label>
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={addDays(startDate, 1)}
            onChange={(date) => setEndDate(date)}
          />
        </div>

        <div>
          <label>成人人數</label>
          <input
            type="number"
            value={adults}
            min="1"
            onChange={handleAdultsChange}
          ></input>
        </div>

        <div>
          <label>小童人數</label>
          <input
            type="number"
            value={children}
            min="0"
            onChange={handleAdultsChange}
          ></input>
        </div>
        <div>
          <Button size="extractsmall" onClick={handleClick}>
            預訂客房
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingMenuForm;
