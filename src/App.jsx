import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Homepage from "./page/Homepage";
import Booking from "./page/Booking";
import Contactus from "./page/Contactus";
import Events from "./page/Events";
import Restaurant from "./page/Restaurant";
import ViewBooking from "./page/ViewBooking";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import RoomDetail from "./page/RoomDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Homepage />} />
              <Route path="homepage" element={<Homepage />} />
              <Route path="bookings" element={<Booking />} />
              <Route path="roomDetail" element={<RoomDetail />} />
              <Route path="viewbookings" element={<ViewBooking />} />
              <Route path="contactus" element={<Contactus />} />
              <Route path="events" element={<Events />} />
              <Route path="restaurant" element={<Restaurant />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          sucess: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidith: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-white-600)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
