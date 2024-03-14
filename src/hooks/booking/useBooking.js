import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { createBooking as createBookingApi } from "../../services/apiBooking";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useBooking = () => {
  const navigate = useNavigate();

  const { mutate: createBooking, isLoading: isCreating } = useMutation(
    createBookingApi,
    {
      onSuccess: () => {
        toast.success("已為你成功預約，你可以到查詢預約，觀看你的預約資料", {
          duration: 6000,
        });
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.message, {
          duration: 6000,
        });
      },
    }
  );

  return { createBooking, isCreating };
};

export default useBooking;
