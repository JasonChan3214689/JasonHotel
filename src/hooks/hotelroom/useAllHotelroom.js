import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllHotelRoom } from "../../services/apiHotelroom";

export function useAllHotelroom() {
  const { isLoading, data: hotelrooms } = useQuery({
    queryKey: ["Allhotelroom"],
    queryFn: getAllHotelRoom,
  });

  return {
    isLoading,
    hotelrooms,
  };
}
