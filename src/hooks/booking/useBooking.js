import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createBooking as createBookingApi } from "../../services/apiBooking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useBooking = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createBooking, isLoading: isCreating } = useMutation({
    mutationFn: createBookingApi,
    onSuccess: () => {
      toast.success("已為你成功預約，你可以到查詢預約，觀看你的預約資料");
      navigate("/");
    },
    onError: (err) => toast.error(err.mesage),
  });
  return { createBooking, isCreating };
};

export default useBooking;
