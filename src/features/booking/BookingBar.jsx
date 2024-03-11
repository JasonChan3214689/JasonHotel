import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiOutlineCalendar } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getToday } from "../../utils/helper";
import { addDays, format, differenceInCalendarDays } from "date-fns";
import { MAX_PEOPLE } from "../../utils/breakpoints";

const BookingBarContainer = styled.div`
  width: 100vw;
  height: 120px;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: var(--color-white-600);
`;

const StyledBookingBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: auto !important;
  height: auto;
  background-color: #ffffff;
  box-shadow: var(--shadow-md);
  padding: 1rem !important;
  flex-wrap: wrap;
  transform: translate(-2%, -1rem);
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
`;

const StyledLabel = styled.label`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 0.25rem;
  width: 80px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyleHotelContent = styled.span`
  display: flex;
  font-size: 0.8rem;
  justify-content: center;
  align-items: center;
`;

const BookingBar = () => {
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
    <>
      <BookingBarContainer>
        <StyledBookingBarWrapper>
          <StyledForm>
            <StyledLabel>
              <span>
                入住 <HiOutlineCalendar />
              </span>

              <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={(date) => setStartDate(date)}
              />
            </StyledLabel>

            <StyledLabel>
              <span>
                退房 <HiOutlineCalendar />
              </span>
              <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={addDays(startDate, 1)}
                onChange={(date) => setEndDate(date)}
              />
            </StyledLabel>

            <StyledLabel>
              <span>成人:</span>

              <StyledInput
                type="number"
                value={adults}
                min="1"
                onChange={handleAdultsChange}
              />
            </StyledLabel>

            <StyledLabel>
              <span>小童:</span>
              <StyledInput
                type="number"
                value={children}
                min="0"
                onChange={handleChildrenChange}
              />
            </StyledLabel>

            <StyledButtonContainer>
              <Button size="small" onClick={handleClick}>
                查看客房預訂情況{" "}
              </Button>
            </StyledButtonContainer>
          </StyledForm>
        </StyledBookingBarWrapper>
        <StyleHotelContent>
          通過官網直接預訂客房即可專享額外優惠，包括靈活安排入住和退房時間並尊享優惠客房價格
        </StyleHotelContent>
      </BookingBarContainer>
    </>
  );
};

export default BookingBar;
