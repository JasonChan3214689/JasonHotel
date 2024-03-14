import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookingHotelRoom } from "../../services/apiHotelroom";

export function useBookingHotelRoom(roomId) {
  const { isLoading, data: bookingHotelRoom } = useQuery({
    queryKey: ["bookingHotelRoom", roomId],
    queryFn: () => getBookingHotelRoom(roomId),
  });

  return {
    isLoading,
    bookingHotelRoom,
  };
}

export default useBookingHotelRoom;
