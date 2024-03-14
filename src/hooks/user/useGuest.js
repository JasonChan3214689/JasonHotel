import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentGuests } from "../../services/apiAuth";

const useGuest = (id) => {
  const queryClient = useQueryClient();

  const { isLoading, data: guests } = useQuery({
    queryKey: ["guests"],
    queryFn: () => getCurrentGuests(id),
  });

  const refetchUser = () => {
    queryClient.invalidateQueries(["guests"]);
  };

  return {
    isLoading,
    guests,
    refetchUser,
  };
};

export default useGuest;
