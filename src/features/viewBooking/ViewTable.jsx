import React from "react";
import useGuest from "../../hooks/user/useGuest";
import { useUser } from "../../hooks/user/useUser";
import useViewBooking from "../../hooks/useViewBooking/useViewBooking";
import Spinner from "../../ui/Spinner";
import ViewRow from "./ViewRow";

const ViewTable = () => {
  const { user, isLoading: userIsLoading } = useUser();
  const { guests, isLoading: guestIsLoading } = useGuest(user?.id);
  const guestsId = guests?.at(0)?.id;
  const { bookingRecord, isLoading: viewIsLoading } = useViewBooking(guestsId);

  if (userIsLoading || guestIsLoading || viewIsLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {bookingRecord.map((record, index) => (
        <ViewRow key={index} record={record} />
      ))}
    </div>
  );
};

export default ViewTable;
