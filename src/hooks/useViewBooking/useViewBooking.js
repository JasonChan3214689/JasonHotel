import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBooking";

export function useViewBooking(guestId) {
  const { isLoading, data: bookingRecord } = useQuery({
    queryKey: ["bookingRecord", guestId],
    queryFn: () => getBooking(guestId),
    enabled: !!guestId,
  });

  return {
    isLoading,
    bookingRecord,
  };
}

export default useViewBooking;
