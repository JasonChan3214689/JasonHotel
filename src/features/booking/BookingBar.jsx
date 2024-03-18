import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import Button from "../../ui/Button";
import { HiOutlineCalendar } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { getToday } from "../../utils/helper";
import { addDays, format, differenceInCalendarDays } from "date-fns";
import { MAX_PEOPLE, device, size } from "../../utils/breakpoints";

const BookingBarContainer = styled.div`
  width: 100%;
  height: 120px;
  position: relative;
  background-color: var(--color-white-600);

  @media (max-width: 600px) {
    height: 330px;
  }
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

  @media (max-width: 600px) {
    transform: translate(0, -1rem);
    padding: 0.5rem !important;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 0.75rem !important;
  }
`;

const StyledForm = styled.form`
  display: flex;
  gap: 2rem;
  font-size: 0.8rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0rem;
    align-items: stretch;
  }
`;

const StyledLabel = styled.label`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 0.25rem;
  width: 20px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  margin-left: 2rem;

  @media (max-width: 600px) {
    margin-left: 0rem;
    flex-basis: 100%;
    justify-content: center;
    margin-right: 2rem;
  }
`;

const StyleHotelContent = styled.span`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    text-align: center;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }
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
          </StyledForm>
          <StyledButtonContainer>
            <Button size="small" onClick={handleClick}>
              立即預訂{" "}
            </Button>
          </StyledButtonContainer>
        </StyledBookingBarWrapper>
        <StyleHotelContent>
          通過官網直接預訂客房即可專享額外優惠，包括靈活安排入住和退房時間並尊享優惠客房價格
        </StyleHotelContent>
      </BookingBarContainer>
    </>
  );
};

export default BookingBar;
