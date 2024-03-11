import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 引入样式
import { format, differenceInCalendarDays, addDays } from "date-fns";
import Button from "../../ui/Button";
import { MAX_PEOPLE } from "../../utils/breakpoints";
import Spinner from "../../ui/Spinner";

const StyledBookingStatusWrapper = styled.div`
  background-color: var(--color-gold-300);

  box-sizing: border-box;
  font-size: 1rem;
`;

const StyledBookingStatusContent = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const StyledInput = styled.input`
  max-width: 20%;
  box-sizing: border-box;
`;

const StyledinputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPeopleWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitleWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 0.5rem;
  color: var(--color-white-600);
  background-color: var(--color-black-600);
`;

const BookingStatus = ({ setShowSpinner }) => {
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

  const [childrens, setChildren] = useState(searchParams.get("children") || "");
  const [adults, setAdults] = useState(searchParams.get("adults") || "");
  const [numNights, setNumNights] = useState(
    differenceInCalendarDays(endDate, startDate)
  );
  const [totalPeople, setTotalPeople] = useState(0);

  useEffect(() => {
    setNumNights(differenceInCalendarDays(endDate, startDate));
  }, [startDate, endDate]);

  useEffect(() => {
    const numAdults = parseInt(adults, 10) || 0;
    const numChildrens = parseInt(childrens, 10) || 0;
    const newTotalPeople = numAdults + numChildrens;

    setTotalPeople(newTotalPeople);
  }, [adults, childrens]);

  function handleSubmit() {
    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    setSearchParams({
      startDate: format(startDate, "yyyy-MM-dd"),
      endDate: format(endDate, "yyyy-MM-dd"),
      adults,
      childrens,
      numNights,
      totalPeople,
    });
  }

  const handleAdultsChange = (e) => {
    const newAdultsValue = Math.min(parseInt(e.target.value, 10), MAX_PEOPLE);
    setAdults(newAdultsValue);

    if (newAdultsValue + childrens > MAX_PEOPLE) {
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
    <StyledBookingStatusWrapper>
      <StyledTitleWrapper>
        <span>你的入住資訊:</span>
      </StyledTitleWrapper>
      <StyledBookingStatusContent>
        <StyledinputWrapper>
          入住日期:
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={today}
            dateFormat="yyyy-MM-dd"
          />
        </StyledinputWrapper>
        <StyledinputWrapper>
          退房日期:
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={addDays(startDate, 1)}
            dateFormat="yyyy-MM-dd"
          />
        </StyledinputWrapper>

        <StyledPeopleWrapper>
          成人數目:
          <StyledInput
            type="number"
            value={adults}
            min={1}
            onChange={handleAdultsChange}
          />
        </StyledPeopleWrapper>

        <StyledPeopleWrapper>
          小童數目:
          <StyledInput
            type="number"
            value={childrens}
            min={0}
            onChange={handleChildrenChange}
          />
        </StyledPeopleWrapper>

        <StyledPeopleWrapper>
          入住天數:
          {numNights}
        </StyledPeopleWrapper>

        <StyledPeopleWrapper>
          <Button variation="black" size="small" onClick={handleSubmit}>
            修改
          </Button>
        </StyledPeopleWrapper>
      </StyledBookingStatusContent>
    </StyledBookingStatusWrapper>
  );
};

export default BookingStatus;
