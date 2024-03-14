import React from "react";
import { formatCurrency, formatDate } from "../../utils/helper";
import useBookingHotelRoom from "../../hooks/useViewBooking/useBookingHotelRoom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ViewRow = ({ record, onDelete }) => {
  const theme = useTheme();
  const startDate = formatDate(record.startDate);
  const endDate = formatDate(record.endDate);
  const createDate = formatDate(record.created_at);
  const totalPrice = formatCurrency(record.totalPrice);
  const { bookingHotelRoom } = useBookingHotelRoom(record.roomId);

  return (
    <Card
      sx={{
        margin: "2rem",
        display: "flex",
        marginBottom: theme.spacing(2),
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "300px", height: "100%" }}
        image={bookingHotelRoom?.at(0).image}
        alt={bookingHotelRoom?.at(0).name}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            noWrap
            color="var(--color-gold-600)"
          >
            {bookingHotelRoom?.at(0)?.name}
          </Typography>
          <Box sx={{ display: "flex", width: "100%", gap: "2rem" }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              訂單編號: {record.id}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              訂單狀態: {record.status}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            下單時間: {createDate}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            入住日期: {startDate}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            離開日期: {endDate}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
          >
            總付款金額: {totalPrice}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={() => {
              onDelete(record.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ViewRow;
