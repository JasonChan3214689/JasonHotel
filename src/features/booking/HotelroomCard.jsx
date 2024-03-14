import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
} from "@mui/material";
import { formatCurrency } from "../../utils/helper";
import HotelroomBookingButton from "./HotelroomBookingButton";
import Button from "../../ui/Button";

const HotelroomCard = ({ hotelroom, startDate, endDate, numNights }) => {
  const hotelDiscountPrice = formatCurrency(hotelroom.discount);
  const totalPrice = formatCurrency(hotelroom.discount * numNights);

  return (
    <Card sx={{ display: "flex", margin: "1rem", position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            color="var(--color-gold-600)"
          >
            {hotelroom.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            可容納人數: {hotelroom.maxCapacity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {hotelroom.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {startDate} 至 {endDate} 總 {numNights} 天 可供應
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
          <Typography variant="subtitle1" component="div">
            原價: HKD {hotelroom.regularPrice} / 官網訂購優惠:
          </Typography>
          <Typography component="div" sx={{ pl: 2, fontWeight: "bold" }}>
            平均每晚: {hotelDiscountPrice}
          </Typography>
          <Typography component="div" sx={{ pl: 2, fontWeight: "bold" }}>
            總需要: {totalPrice}
          </Typography>
        </Box>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button sizes="small" variations="priamy">
            <HotelroomBookingButton hotelroom={hotelroom} />
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 350 }}
        image={hotelroom.image}
        alt={hotelroom.name}
      />
    </Card>
  );
};

export default HotelroomCard;
