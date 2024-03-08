import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const queryClient = useQueryClient();

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  const refetchUser = () => {
    queryClient.invalidateQueries(["user"]);
  };

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
    refetchUser,
  };
}
