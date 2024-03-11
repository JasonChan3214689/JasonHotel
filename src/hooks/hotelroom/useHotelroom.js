import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getHotelRoom } from "../../services/apiHotelroom";

export function useHotelroom(totalPeople) {
  const queryClient = useQueryClient();

  const { isLoading, data: hotelrooms } = useQuery({
    queryKey: ["hotelroom", totalPeople],
    queryFn: () => getHotelRoom(totalPeople),
  });

  const refetchHotelroom = () => {
    queryClient.invalidateQueries(["hotelroom"]);
  };

  return {
    isLoading,
    hotelrooms,
    refetchHotelroom,
  };
}
